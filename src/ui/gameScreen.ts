import { createDigitValidator } from '../core/digitValidator.ts';
import { applyGuess, createGame } from '../core/gameState.ts';
import { generateSecret } from '../core/generateSecret.ts';
import { isValidGuess } from '../core/isValidGuess.ts';
import { RECORDS_LIMIT, addRecord, createRecord } from '../core/records.ts';
import type { GameSettings, HistoryEntry } from '../core/types.ts';
import { loadRecords, saveRecords } from '../storage/recordsStorage.ts';

const createHistoryItem = ({ guess, result }: HistoryEntry): HTMLLIElement => {
  const item = document.createElement('li');
  item.textContent = `${guess} — ${result.bulls} bulls, ${result.cows} cows`;

  return item;
};

export const createGameScreen = (settings: GameSettings, onNewGame: () => void): HTMLElement => {
  const { length, base } = settings;
  const isDigit = createDigitValidator(base);
  let state = createGame(settings, generateSecret(length, base), Date.now());

  const screen = document.createElement('div');
  const input = document.createElement('input');
  const guessButton = document.createElement('button');
  const message = document.createElement('p');
  const historyList = document.createElement('ul');
  const newGameButton = document.createElement('button');

  input.maxLength = length;
  guessButton.textContent = 'Guess';
  newGameButton.textContent = 'New game';

  input.addEventListener('input', () => {
    input.value = [...input.value].filter(isDigit).join('');
  });

  guessButton.addEventListener('click', () => {
    const guess = input.value;

    if (!isValidGuess(guess, length, base)) {
      message.textContent = `Enter ${length} unique digits`;
      return;
    }

    state = applyGuess(state, guess, Date.now());
    historyList.replaceChildren(...state.history.map(createHistoryItem));
    input.value = '';
    message.textContent = '';

    if (state.status === 'won') {
      const record = createRecord(state);
      saveRecords(addRecord(loadRecords(), record, RECORDS_LIMIT));

      const seconds = (record.duration / 1000).toFixed(1);
      message.textContent = `You won in ${record.attempts} attempts, ${seconds} s`;
      input.disabled = true;
      guessButton.disabled = true;
    }
  });

  newGameButton.addEventListener('click', onNewGame);

  screen.append(input, guessButton, message, historyList, newGameButton);

  return screen;
};
