import { RemoveUrlQueryParams } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string"; // Ensure this package is installed: `npm i query-string`

/**
 * Merge Tailwind classes conditionally.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a File object to a local object URL (e.g., for image previews).
 */
export const convertFileToUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

/**
 * Formats a number or string as currency.
 */
export const formatPrice = (
  price: string | number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string => {
  const number = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(number)) return '';
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(number);
};

/**
 * Adds or updates query parameters in a URL string.
 */
export const addQueryParams = (
  url: string,
  params: Record<string, string | number | boolean | undefined>
): string => {
  const urlObj = new URL(url, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      urlObj.searchParams.set(key, String(value));
    }
  });
  return urlObj.toString();
};

/**
 * Removes specific keys from a URL's query string.
 */
export const removeQueryParams = (url: string, keysToRemove: string[]): string => {
  const urlObj = new URL(url, window.location.origin);
  keysToRemove.forEach(key => urlObj.searchParams.delete(key));
  return urlObj.toString();
};

/**
 * Removes specified keys from a query string object and returns a cleaned URL string.
 */
export function removeKeysFromQuery({ params, keysToRemove }: RemoveUrlQueryParams): string {
  const currentQuery = qs.parse(params);

  keysToRemove.forEach(key => {
    delete currentQuery[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentQuery,
    },
    { skipNull: true }
  );
}

/**
 * Formats a date string or Date object to a readable format.
 * Example: "May 28, 2025, 10:00 AM"
 */
export const formatDate = (
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  },
  locale: string = 'en-US'
): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(parsedDate.getTime())) return '';
  return new Intl.DateTimeFormat(locale, options).format(parsedDate);
};

/**
 * Logs and throws a consistent error.
 */
export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error));
};