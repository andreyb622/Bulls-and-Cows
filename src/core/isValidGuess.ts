import { createDigitValidator } from './digitValidator.ts';
import { Base } from './types.ts';

export const isValidGuess = (guess: string, length: number, base: Base): boolean => {
  const isDigit = createDigitValidator(base);
  const digits = [...guess.toLowerCase()];

  const hasCorrectLength = digits.length === length;
  const hasOnlyValidDigits = digits.every(isDigit);
  const hasUniqueDigits = new Set(digits).size === digits.length;

  return hasCorrectLength && hasOnlyValidDigits && hasUniqueDigits;
};
