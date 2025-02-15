import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArr(arr: any[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
