require('dotenv').config();
const Crypto = require('./constants/utils/Crypto')
/* const HydrolinaDB = require('./constants/structures/database/index');
const db = new HydrolinaDB(process.env.MONGO_URI);
db.init(); */

// const path = require('path');
// const { version } = require('./package.json');
// const Logger = require('./constants/Logger.js');
// const HTTPServer = require('./server/HTTPServer.js');

// let port = 810;
// const logger = new Logger(path.resolve(process.cwd() + '/logs/'));

// logger.info(`Welcome to Simulacra, using version ${version}`)
// HTTPServer.execute(port);

// console.log(Crypto.createSessionKey(64));
// console.log(Crypto.createSessionKey(64));
// console.log(Crypto.createSessionKey(64));
// console.log(Crypto.createSessionKey(64));
// console.log(Crypto.createSessionKey(64));

console.log(makeid(32))