import { describe, expect, it } from 'vitest';
import { generateSecret } from './generateSecret.ts';

describe('generateSecret', () => {
  it('picks the first available digit when random returns 0', () => {
    expect(generateSecret(4, 10, () => 0)).toBe('0123');
  });

  it('picks the last available digit when random returns 0.99', () => {
    expect(generateSecret(4, 10, () => 0.99)).toBe('9876');
  });

  it('removes picked digits from the available ones', () => {
    expect(generateSecret(2, 10, () => 0.5)).toBe('54');
  });

  it('uses hex digits', () => {
    expect(generateSecret(3, 16, () => 0.99)).toBe('fed');
  });

  it('works for binary', () => {
    expect(generateSecret(2, 2, () => 0)).toBe('01');
  });
});
