import type { CurrencySymbol } from "../money/money";

export const fetchConversionRate = (
  from: CurrencySymbol,
  to: CurrencySymbol,
): number => {
  // You would probably do a database lookup here...
  // ... but this is just a test repo
  const hardcodedRate = 1.25;
  if (from === to) {
    return 1;
  }
  if (from === "£") {
    return 1 / hardcodedRate;
  }
  return hardcodedRate;
};
