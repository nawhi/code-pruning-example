import type { CurrencySymbol, Money, MoneyAmount } from "../money/money.ts";

// NB: Never use floats for money in a real system
export const moneyToFloat = (money: Money): number =>
  money.large + Math.round(money.small / 100);

// NB: Never use floats for money in a real system
export const floatToMoneyAmount = (val: number): MoneyAmount => ({
  large: Math.floor(val),
  small: Math.round(val * 100) % 100,
});

export const convert = (
  amount: Money,
  rate: number,
  target: CurrencySymbol,
): Money => {
  const val = moneyToFloat(amount);
  const converted = val * rate;
  const { large, small } = floatToMoneyAmount(converted);
  return { large, small, symbol: target };
};
