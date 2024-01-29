import express from "express";
import { parseMoney } from "@currencies/core/money/parse-money";
import { convert } from "@currencies/core/conversion/currency-conversion";
import { fetchConversionRate } from "@currencies/core/conversion/conversion-rate";

const app = express();

app.get("/convert", (req, res) => {
  console.log(req.query);
  if ("amount" in req.query && typeof req.query.amount == "string") {
    const amount = parseMoney(req.query.amount);
    if (amount) {
      const targetCurrency = amount.symbol === "£" ? "$" : "£";
      const converted = convert(
        amount,
        fetchConversionRate(amount.symbol, targetCurrency),
        targetCurrency,
      );
      return res.json({ result: converted }).send();
    }
  }
  return res.status(400).send("Bad Request");
});

console.log(`Listening on port 8000`);
app.listen(8000);
