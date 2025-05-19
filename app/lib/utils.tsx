import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sampleN<T>(array: T[], n: number): T[] {
  if (n > array.length) {
    throw new Error(`Cannot sample ${n} unique items from an array of length ${array.length}`);
  }

  const result: T[] = [];
  const usedIndices = new Set<number>();

  while (result.length < n) {
    const i = Math.floor(Math.random() * array.length);
    if (!usedIndices.has(i)) {
      usedIndices.add(i);
      result.push(array[i]);
    }
  }

  return result;
}

export function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
