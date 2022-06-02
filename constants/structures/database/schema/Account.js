const mongoose = require('mongoose');

module.exports = mongoose.model("account", new mongoose.Schema({
      username: String,
      email: {
            content: String,
            verified: Boolean
      },
      token: String,
      devices: [
            {
                  deviceId: String,
                  timeToLive: String,
                  sessionKey: String
            }
      ],
      permissions: String,
      reservedUid: String,
}));