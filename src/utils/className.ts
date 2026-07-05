import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const CN = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
