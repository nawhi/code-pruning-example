export const CURRENCY_SYMBOLS = ["£", "$"] as const;
export type CurrencySymbol = typeof CURRENCY_SYMBOLS[number];
export const isCurrencySymbol = (s: string): s is CurrencySymbol =>
  CURRENCY_SYMBOLS.includes(s as CurrencySymbol);

export interface Money {
  large: number;
  small: number;
  symbol: CurrencySymbol;
}

