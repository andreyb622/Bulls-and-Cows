import { describe, expect, it } from 'vitest';
import { countPossibleSecrets } from './countPossibleSecrets.ts';

describe('countPossibleSecrets', () => {
  it('binary, length 2', () => {
    expect(countPossibleSecrets(2, 2)).toBe(2);
  });

  it('octal, length 3', () => {
    expect(countPossibleSecrets(3, 8)).toBe(336);
  });

  it('decimal, length 4', () => {
    expect(countPossibleSecrets(4, 10)).toBe(5040);
  });

  it('hex, length 6', () => {
    expect(countPossibleSecrets(6, 16)).toBe(5765760);
  });
});
