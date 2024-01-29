import { describe, expect, it } from "vitest";
import { convert } from "./currency-conversion";
import { Money } from "../money/money";

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
