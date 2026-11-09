import { Base } from './types.ts';

export const generateSecret = (
  length: number,
  base: Base,
  random: () => number = Math.random,
): string => {
  const digitSymbols = Array.from({ length: base }, (_, value) => value.toString(base));
  const steps = Array.from({ length });

  const { secret } = steps.reduce(
    ({ secret, available }) => {
      const randomIndex = Math.floor(random() * available.length);
      const randomDigit = available[randomIndex];

      const remainingDigits = available.filter(
        (_: string, digitIndex: number) => digitIndex !== randomIndex,
      );
      return {
        secret: secret + randomDigit,
        available: remainingDigits,
      };
    },
    { secret: '', available: digitSymbols },
  );

  return secret;
};
