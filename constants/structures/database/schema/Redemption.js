const mongoose = require('mongoose');

module.exports = mongoose.model("redemption", new mongoose.Schema({
      redemptionCode: { type: String, required: true },
      redeemableData: {
            expiry: { type: String, required: true },
            usages: { type: Number, default: 100 },
            counter: { type: Number, default: 0 }
      },
      redemptionRewards: [
            {
                  itemID: { type: Number, required: true },
                  amount: { type: Number, required: true },
                  level: { type: Number, required: true }
            }
      ]
}));