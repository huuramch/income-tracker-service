const { Schema, mongoose } = require("mongoose")
 
const transactionSchema = new Schema ({
    userId: {type: String, required: true },
    category: {
        type: String,
        enum: ["food", "shopping", "bills", "clothing"],
    },
    transactionTitle: String,
    amount: { type: Number, required: true},
    createdAt: { type: Date, default: Date.now() },
    note: String,
    transactionType: {
        type: String,
        enum: ["income", "expense"],
    },
});
 
const transactionModel = mongoose.model("transactions", transactionSchema);
 
module.exports = transactionModel;