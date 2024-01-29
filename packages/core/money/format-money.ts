import type { Money } from "./money.ts";

export const formatMoney = (money: Money): string =>
    `${money.symbol}${money.large}.${money.small.toString().padStart(2, "0")}`;
