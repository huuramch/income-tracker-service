const transactionModel = require("../models/transactionModel");
 
const createIncome = async (req, res) => {
    const data = req.body;
    try {
        const response = await transactionModel.create(data);
        console.log(response);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error)
    }
}
 
const getIncome = async (req, res) => {
    try {
        const allIncome = await transactionModel.find({});
        res.status(200).send(allIncome);
    } catch (error) {
        res.status(500).send(error);
    }
};
 
module.exports = {createIncome, getIncome}