const { Router } = require("express");
const { createIncome, getIncome } = require("../controller/incomeController");
 
const transactionRoute = Router()
 
transactionRoute.get("/get-income", getIncome )
transactionRoute.post("/create-transaction",createIncome)
 
module.exports = { transactionRoute };