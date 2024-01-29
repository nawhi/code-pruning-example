import type { CurrencySymbol, Money } from "./money.ts";

export const fetchConversionRate = (dest: CurrencySymbol): number => {
  // You would probably do a database lookup here...

  const hardcodedRate = 1.25;
  return dest === "£"
    ? 1 / hardcodedRate
    : hardcodedRate;
};

export const convert = (orig: Money, dest: CurrencySymbol): Money => {
  const rate = fetchConversionRate(dest);
  const val = orig.large * 100 + orig.small;
  const converted = val * rate;
  return {
    symbol: dest,
    large: Math.floor(converted / 100),
    small: converted % 100
  };
};
