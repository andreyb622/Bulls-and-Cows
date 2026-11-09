import type { Base } from './types.ts';

export const createDigitValidator = (base: Base) => {
  const digitSymbols = Array.from({ length: base }, (_, value) => value.toString(base));
  const allowedDigits = new Set(digitSymbols);

  return (char: string): boolean => {
    const isSingleChar = char.length === 1;
    const isAllowedDigit = allowedDigits.has(char.toLowerCase());

    return isSingleChar && isAllowedDigit;
  };
};
