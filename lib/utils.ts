import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, handling conditional logic
 * and resolving Tailwind CSS conflicts efficiently.
 *
 * It uses `clsx` to construct the class string (handling arrays, objects, and strings)
 * and `tailwind-merge` to deduplicate conflicting Tailwind utility classes.
 *
 * @param {...ClassValue[]} inputs - A list of class values. Can be strings, arrays of strings, 
 *                                   or objects where keys are class names and values are booleans.
 * @returns {string} A merged string of unique Tailwind CSS classes.
 *
 * @example
 * // Basic usage
 * cn('px-4 py-2', 'bg-blue-500'); // 'px-4 py-2 bg-blue-500'
 *
 * @example
 * // Conditional classes
 * cn('text-white', isActive && 'font-bold'); 
 *
 * @example
 * // Conflict resolution (last winner takes precedence)
 * cn('p-4', 'p-2'); // 'p-2'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}