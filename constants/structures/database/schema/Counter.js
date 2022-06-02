const mongoose = require('mongoose');

module.exports = mongoose.model("counter", new mongoose.Schema({
      counterName: { type: String, required: true },
      count: { type: Number, required: true }
}));