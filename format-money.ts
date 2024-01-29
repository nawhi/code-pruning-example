import type { Money } from "./money.ts";

export const formatMoney = (money: Money): string =>
  `${money.symbol}${money.large.toFixed(2)}.${money.small.toFixed(2)}`
