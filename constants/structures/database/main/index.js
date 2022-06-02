const mongoose = require('mongoose');

// Logger.log('hey');

/**
 * Creates a Hydroline class, this handles the things all data.
 * Basically things database related; handles logins, data storing, etc.
 */
class Hydroline {
      get CONNECTION_STATE() {
            return {
                  "0": "DISCONNECTED",
                  "1": "CONNECTED",
                  "2": "CONNECTING",
                  "3": "DISCONNECTING",
                  "4": "UNATHORIZED",
                  "99": "UNINITIALIZED"
            };
      }

      /**
       * 
       * @param {string} databaseURI 
       */
      constructor(databaseURI) {
            const mongoRegex = /mongodb(\+srv)?:\/\/(?:(?<login>[^\:\/\?\#\[\]\@]+)(?::(?<password>[^\:\/\?\#\[\]\@]+))?@)?(?<host>[\w\.\-]+(?::\d+)?(?:,[\w\.\-]+(?::\d+)?)*)(?:\/(?<dbname>[\w\.\-]+))?(?:\?(?<query>[\w\.\-]+=[\w\.\-]+(?:&[\w\.\-]+=[\w.\-]+)*))?/gm;
            if (!databaseURI) throw new TypeError(`Your URI looks empty.`);
            if ((databaseURI instanceof String)) throw new TypeError(`URI must be a type of string. Received type ${typeof databaseURI}`);
            if (!databaseURI.match(mongoRegex)) throw new TypeError(`URI isn't a valid MongoDB URL.`);

            /** @private */
            this.databaseURI = databaseURI;
            this.connection = mongoose.connection;
            this.connectionState = this.CONNECTION_STATE[this.connection.readyState ? this.connection.readyState : '0'];
      }

      init() {
            mongoose.connect(this.databaseURI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
            });
      }
}

module.exports = Hydroline;