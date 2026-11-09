import { describe, expect, it } from 'vitest';
import { isValidGuess } from './isValidGuess.ts';

describe('isValidGuess', () => {
  it('accepts a guess with unique digits', () => {
    expect(isValidGuess('1234', 4, 10)).toBe(true);
  });

  it('accepts a guess with a leading zero', () => {
    expect(isValidGuess('0123', 4, 10)).toBe(true);
  });

  it('accepts hex digits in any case', () => {
    expect(isValidGuess('a1F', 3, 16)).toBe(true);
  });
  it('rejects a guess that is too short', () => {
    expect(isValidGuess('123', 4, 10)).toBe(false);
  });

  it('rejects a guess that is too long', () => {
    expect(isValidGuess('12345', 4, 10)).toBe(false);
  });

  it('rejects a letter in decimal', () => {
    expect(isValidGuess('12a4', 4, 10)).toBe(false);
  });

  it('rejects digit 2 in binary', () => {
    expect(isValidGuess('12', 2, 2)).toBe(false);
  });

  it('rejects repeated digits', () => {
    expect(isValidGuess('1123', 4, 10)).toBe(false);
  });

  it('rejects the same hex digit in different case', () => {
    expect(isValidGuess('aA', 2, 16)).toBe(false);
  });
});
