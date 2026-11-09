export type Base = 2 | 8 | 10 | 16;

export type GuessResult = {
  readonly bulls: number;
  readonly cows: number;
};

export type GameSettings = {
  readonly length: number;
  readonly base: Base;
};

export type HistoryEntry = {
  readonly guess: string;
  readonly result: GuessResult;
};

export type GameStatus = 'playing' | 'won';

export type GameState = {
  readonly secret: string;
  readonly settings: GameSettings;
  readonly history: readonly HistoryEntry[];
  readonly status: GameStatus;
  readonly startedAt: number;
  readonly finishedAt: number | null;
};
