const Hydroline = require('./main');
const Logger = require('../../Logger-static');

const Schemas = {
      Account: require('./schema/Account'),
      Redemption: require('./schema/Redemption')
}

class Liquibase extends Hydroline {

      /**
       * 
       * @param {string} databaseURI 
       */
      constructor(databaseURI) {
            super(databaseURI);

            this.accounts = Schemas.Account;
            this.redemptions = Schemas.Redemption;

            // event handling for connection.
            this.connection.on('connected', () => Logger.log(`Liquibase State: ${this.CONNECTION_STATE[this.connection.readyState]}`));
            this.connection.on('error', (error) => Logger.error(`Liquibase Error: %s`, [error?.message]));
            this.connection.on('disconnected', () => {
                  Logger.error(`Liquibase disconnected/failed to connect from database.`);
                  throw new Error(`Database disconnected, crashing app as a fail-safe method.`);
            });
      }
}

module.exports = Liquibase;