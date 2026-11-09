import { GameRecord, GameState } from './types.ts';

export const RECORDS_LIMIT = 10;

export const createRecord = (state: GameState): GameRecord => {
  if (state.finishedAt === null) {
    throw new Error('Game is not finished.');
  }

  return {
    attempts: state.history.length,
    duration: state.finishedAt - state.startedAt,
    settings: state.settings,
  };
};

export const addRecord = (
  records: readonly GameRecord[],
  newRecord: GameRecord,
  limit: number,
): GameRecord[] => {
  const updatedRecords = [...records, newRecord];
  updatedRecords.sort((a, b) => a.attempts - b.attempts || a.duration - b.duration);

  return updatedRecords.slice(0, limit);
};
