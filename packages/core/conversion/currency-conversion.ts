import type { CurrencySymbol, Money } from "../money/money.ts";

export const convert = (
  amount: Money,
  rate: number,
  target: CurrencySymbol,
): Money => {
  const val = amount.large * 100 + amount.small;
  const converted = val * rate;
  return {
    symbol: target,
    large: Math.floor(converted / 100),
    small: Math.round(converted % 100),
  };
};
