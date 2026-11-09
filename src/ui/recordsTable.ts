import type { GameRecord } from '../core/types.ts';

const createRecordItem = ({ attempts, duration, settings }: GameRecord): HTMLLIElement => {
  const item = document.createElement('li');
  const seconds = (duration / 1000).toFixed(1);
  item.textContent = `${attempts} attempts, ${seconds} s (length ${settings.length}, base ${settings.base})`;

  return item;
};

export const createRecordsTable = (records: readonly GameRecord[]): HTMLElement => {
  const table = document.createElement('div');
  const title = document.createElement('h2');
  const list = document.createElement('ol');

  title.textContent = 'Records';
  list.append(...records.map(createRecordItem));

  table.append(title, records.length > 0 ? list : 'No records yet');

  return table;
};
