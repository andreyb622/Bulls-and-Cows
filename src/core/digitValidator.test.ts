import { describe, expect, it } from 'vitest';
import { createDigitValidator } from './digitValidator.js';

describe('createDigitValidator', () => {
  it('returns a function', () => {
    expect(typeof createDigitValidator(10)).toBe('function');
  });

  describe('binary (base 2)', () => {
    const isBinDigit = createDigitValidator(2);

    it.each(['0', '1'])('accepts %s', (char) => {
      expect(isBinDigit(char)).toBe(true);
    });

    it.each(['2', '9', 'a'])('rejects %s', (char) => {
      expect(isBinDigit(char)).toBe(false);
    });
  });

  describe('octal (base 8)', () => {
    const isOctDigit = createDigitValidator(8);

    it.each(['0', '7'])('accepts %s', (char) => {
      expect(isOctDigit(char)).toBe(true);
    });

    it.each(['8', '9', 'a'])('rejects %s', (char) => {
      expect(isOctDigit(char)).toBe(false);
    });
  });

  describe('decimal (base 10)', () => {
    const isDecDigit = createDigitValidator(10);

    it.each(['0', '9'])('accepts %s', (char) => {
      expect(isDecDigit(char)).toBe(true);
    });

    it.each(['a', 'A'])('rejects %s', (char) => {
      expect(isDecDigit(char)).toBe(false);
    });
  });

  describe('hex (base 16)', () => {
    const isHexDigit = createDigitValidator(16);

    it.each(['0', '9', 'a', 'f', 'A', 'F'])('accepts %s', (char) => {
      expect(isHexDigit(char)).toBe(true);
    });

    it.each(['g', 'G'])('rejects %s', (char) => {
      expect(isHexDigit(char)).toBe(false);
    });
  });

  describe('not a single character', () => {
    const isHexDigit = createDigitValidator(16);

    it.each(['', '10'])('rejects "%s"', (char) => {
      expect(isHexDigit(char)).toBe(false);
    });
  });
});
