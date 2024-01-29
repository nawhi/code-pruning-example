import type { Money } from "./money.ts";
import { formatMoney } from "./format-money.ts";

export const CURRENCY_ZERO: Money = { large: 0, small: 0 };
export const CURRENCY_ZERO_STRING = formatMoney(CURRENCY_ZERO);
