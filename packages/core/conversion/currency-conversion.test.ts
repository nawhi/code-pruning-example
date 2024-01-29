import { describe, expect, it } from "vitest";
import { convert, floatToMoneyAmount } from "./currency-conversion";
import { Money } from "../money/money";

describe("numberToMoneyAmount", () => {
  it("converts 0", () => {
    expect(floatToMoneyAmount(0)).toEqual({ large: 0, small: 0 });
  });

  it("converts 0.01", () => {
    expect(floatToMoneyAmount(0.01)).toEqual({ large: 0, small: 1 });
  });

  it("converts 0.1", () => {
    expect(floatToMoneyAmount(0.1)).toEqual({ large: 0, small: 10 });
  });

  it("converts 1", () => {
    expect(floatToMoneyAmount(1)).toEqual({ large: 1, small: 0 });
  });
});

describe("currency conversion", () => {
  it("converts to itself with conversion rate of 1", () => {
    const amount: Money = { symbol: "£", large: 0, small: 0 };
    expect(convert(amount, 0, "£")).toEqual(amount);
  });

  it("converts to half itself", () => {
    const amount: Money = { symbol: "£", large: 5, small: 30 };
    expect(convert(amount, 0.5, "$")).toEqual({
      symbol: "$",
      large: 2,
      small: 65,
    });
  });

  it("converts to twice itself", () => {
    const amount: Money = { symbol: "£", large: 5, small: 75 };
    expect(convert(amount, 2, "$")).toEqual({
      symbol: "$",
      large: 11,
      small: 50,
    });
  });
});
