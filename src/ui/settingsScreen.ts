import { countPossibleSecrets } from '../core/countPossibleSecrets.ts';
import type { Base, GameSettings } from '../core/types.ts';

const BASE_OPTIONS: [string, Base][] = [
  ['bin', 2],
  ['oct', 8],
  ['dec', 10],
  ['hex', 16],
];
const LENGTH_OPTIONS: [string, number][] = [
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
];

const createSelect = (options: [string, number][], selected: number): HTMLSelectElement => {
  const select = document.createElement('select');

  options.forEach(([label, value]) => {
    const option = document.createElement('option');
    option.textContent = label;
    option.value = String(value);
    select.append(option);
  });

  select.value = String(selected);

  return select;
};

export const createSettingsScreen = (onStart: (settings: GameSettings) => void): HTMLElement => {
  const screen = document.createElement('div');

  const baseSelect = createSelect(BASE_OPTIONS, 10);
  const lengthSelect = createSelect(LENGTH_OPTIONS, 4);
  const possibleSecrets = document.createElement('p');
  const startButton = document.createElement('button');
  startButton.textContent = 'Start';

  const getSettings = (): GameSettings => ({
    length: Number(lengthSelect.value),
    base: Number(baseSelect.value) as Base,
  });

  const update = () => {
    const base = Number(baseSelect.value);

    Array.from(lengthSelect.options).forEach((option) => {
      option.disabled = Number(option.value) > base;
    });

    if (Number(lengthSelect.value) > base) {
      lengthSelect.value = '2';
    }

    const { length } = getSettings();
    possibleSecrets.textContent = `Possible secrets: ${countPossibleSecrets(length, base)}`;
  };

  baseSelect.addEventListener('change', update);
  lengthSelect.addEventListener('change', update);
  startButton.addEventListener('click', () => onStart(getSettings()));

  update();

  screen.append('Base: ', baseSelect, ' Length: ', lengthSelect, possibleSecrets, startButton);

  return screen;
};
