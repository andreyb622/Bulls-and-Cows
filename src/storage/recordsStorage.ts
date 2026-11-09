import { GameRecord } from '../core/types.ts';

const STORAGE_KEY = 'gameRecords';

export const loadRecords = (): GameRecord[] => {
  try {
    const recordsJson = localStorage.getItem(STORAGE_KEY);
    if (recordsJson) {
      return JSON.parse(recordsJson) as GameRecord[];
    }
  } catch (error) {
    console.error('Error loading records from localStorage:', error);
  }
  return [];
};

export const saveRecords = (records: GameRecord[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
};
