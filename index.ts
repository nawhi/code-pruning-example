import express from "express";
import { parseMoney } from "./parse-money.ts";
import { convert } from "./conversion-rate.ts";

const app = express();

app.get("/convert", (req, res) => {
  if ("amount" in req.params && typeof req.params.amount == "string") {
    const amount = parseMoney(req.params.amount);
    if (amount) {
      const converted = convert(amount, amount.symbol === "£" ? "$" : "£");
      return res.json({ result: converted }).send();
    }
  }
  return res.status(400).send();
});
