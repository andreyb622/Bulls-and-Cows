import { GuessResult } from './types.ts';

export const evaluateGuess = (secret: string, guess: string): GuessResult => {
  const secretChars = secret.toLowerCase().split('');
  const guessChars = guess.toLowerCase().split('');

  const bulls = guessChars.filter((char, index) => char === secretChars[index]).length;
  const cows = guessChars.filter((char) => secretChars.includes(char)).length;

  return {
    bulls: bulls,
    cows: cows - bulls,
  };
};
