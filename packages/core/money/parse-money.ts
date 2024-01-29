import { isCurrencySymbol, Money } from "./money";

const RE_CURRENCY = /([$£])(\d+)\.(\d\d)/;

export const parseMoney = (raw: string): Money | null => {
  const match = raw.match(RE_CURRENCY);
  if (match) {
    const [, symbol, large, small] = match;
    if (
      symbol !== undefined &&
      large !== undefined &&
      small !== undefined &&
      isCurrencySymbol(symbol)
    ) {
      return {
        symbol,
        large: parseInt(large),
        small: parseInt(small),
      };
    }
  }
  return null;
};
