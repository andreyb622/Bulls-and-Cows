const cache = new Map<string, number>();

export const countPossibleSecrets = (length: number, base: number): number => {
  const key = `${length}-${base}`;
  const cachedResult = cache.get(key);

  if (cachedResult !== undefined) {
    return cachedResult;
  }

  const result = length === 0 ? 1 : base * countPossibleSecrets(length - 1, base - 1);

  cache.set(key, result);

  return result;
};
