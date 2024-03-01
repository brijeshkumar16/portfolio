import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollIntoView = (querySelector: string) => {
  const element = document.querySelector(querySelector);
  element?.scrollIntoView({ behavior: 'smooth' });
};
