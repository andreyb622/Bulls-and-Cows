import { evaluateGuess } from './evaluateGuess.ts';
import { GameSettings, GameState } from './types.ts';

export const createGame = (settings: GameSettings, secret: string, now: number): GameState => {
  return {
    secret,
    settings,
    history: [],
    status: 'playing',
    startedAt: now,
    finishedAt: null,
  };
};

export const applyGuess = (state: GameState, guess: string, now: number): GameState => {
  const { secret, settings, history } = state;
  const { length } = settings;

  const isGuessAlreadyMade = history.some(
    (entry) => entry.guess.toLowerCase() === guess.toLowerCase(),
  );
  if (isGuessAlreadyMade) {
    return state;
  }

  const result = evaluateGuess(secret, guess);

  const newHistoryEntry = {
    guess,
    result,
  };

  const newHistory = [...history, newHistoryEntry];

  const newStatus = result.bulls === length ? 'won' : 'playing';

  return {
    ...state,
    history: newHistory,
    status: newStatus,
    finishedAt: newStatus === 'won' ? now : null,
  };
};
