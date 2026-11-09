import { Base } from './types.ts';

export const generateSecret = (
  _length: number,
  _base: Base,
  _random: () => number = Math.random,
): string => '';
