import type { CurrencySymbol } from "../money/money";

export const fetchConversionRate = async (
  from: CurrencySymbol,
  to: CurrencySymbol,
): Promise<number> => {
  // You would probably do a database lookup here...
  // ... but this is just a test repo
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const hardcodedRate = 1.25;
  if (from === to) {
    return 1;
  }
  if (from === "£") {
    return 1 / hardcodedRate;
  }
  return hardcodedRate;
};
