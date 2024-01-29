import { describe, it, expect } from "vitest";
import { formatMoney } from "./format-money";

describe("formatMoney", () => {
  it("formats 0", () => {
    expect(formatMoney({ symbol: "£", large: 0, small: 0 })).toEqual("£0.00");
  });

  it("formats 1", () => {
    expect(formatMoney({ symbol: "£", large: 1, small: 0 })).toEqual("£1.00");
  });

  it("formats 1.1", () => {
    expect(formatMoney({ symbol: "£", large: 1, small: 10 })).toEqual("£1.10");
  });

  it("formats 1.01", () => {
    expect(formatMoney({ symbol: "£", large: 1, small: 1 })).toEqual("£1.01");
  });

  it("works with $", () => {
    expect(formatMoney({ symbol: "$", large: 1, small: 99 })).toEqual("$1.99");
  });
});
