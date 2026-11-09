import { GuessResult } from './types.ts';

export const evaluateGuess = (_secret: string, _guess: string): GuessResult => {
  return {
    bulls: 0,
    cows: 0,
  };
};
