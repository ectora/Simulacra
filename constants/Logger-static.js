// @ts-ignore
// const { Console } = require('console');
const chalk = require('chalk');
// const fs = require('fs');

module.exports = class {

      /**
       * This will not do anything. Instantiating will not make it special.
       */
      constructor() {
            // if (!fs.existsSync(logPath)) fs.mkdirSync(logPath, { recursive: true });
            // const output = fs.createWriteStream(`${logPath}/${this.date}.log`);
            // this.logger = new Console({ stdout: output, stderr: output });
      }

      /** @private  */
      // @ts-ignore
      get date() {
            const date = new Date();
            const parseNumber = (number = 5) => (number.toString().length === 1 ? `0${number}` : number);
            return [
                  `${date.getFullYear()}-${parseNumber(date.getMonth() + 1)}-${parseNumber(date.getDate())}`,
                  ` ${parseNumber(date.getHours())}-${parseNumber(date.getMinutes())}`
            ].join('');
      }

      static log(string = 'Empty response', optionalParams = []) {
            const date = new Date();
            const parseNumber = (number = 5) => (number.toString().length === 1 ? `0${number}` : number);

            const dateNsecond = [
                  `${date.getFullYear()}-${parseNumber(date.getMonth() + 1)}-${parseNumber(date.getDate())}`,
                  ` ${parseNumber(date.getHours())}:${parseNumber(date.getMinutes())}:${parseNumber(date.getSeconds())}`
            ].join('');

            // @ts-ignore
            if ((string instanceof Error)) throw new TypeError('The Logger#log method only accepts strings.');
            if (typeof string === 'object') {
                  console.log(`${chalk.black.bgGreenBright(' | LOG   | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgGreenBright(' ')} ${chalk.greenBright(JSON.stringify(string))}`);
                  // return this.logger.log(` | LOG   |  ${dateNsecond}  ${JSON.stringify(string)}`);
            }

            if (optionalParams && optionalParams.length !== 0) {
                  console.log(`${chalk.black.bgGreenBright(' | LOG   | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgGreenBright(' ')} ${chalk.greenBright(string)}`, ...optionalParams);
                  // return this.logger.log(` | LOG   |  ${dateNsecond}  ${string}`, ...optionalParams);
            }

            console.log(`${chalk.black.bgGreenBright(' | LOG   | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgGreenBright(' ')} ${chalk.greenBright(string)}`);
            // return this.logger.log(` | LOG   |  ${dateNsecond}  ${string}`);
      }

      static info(string = 'Empty response', optionalParams = []) {
            const date = new Date();
            const parseNumber = (number = 5) => (number.toString().length === 1 ? `0${number}` : number);

            const dateNsecond = [
                  `${date.getFullYear()}-${parseNumber(date.getMonth() + 1)}-${parseNumber(date.getDate())}`,
                  ` ${parseNumber(date.getHours())}:${parseNumber(date.getMinutes())}:${parseNumber(date.getSeconds())}`
            ].join('');

            // @ts-ignore
            if ((string instanceof Error)) throw new TypeError('The Logger#info method only accepts strings.');
            if (typeof string === 'object') {
                  console.log(`${chalk.black.bgMagentaBright(' | INFO  | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgMagentaBright(' ')} ${chalk.magentaBright(JSON.stringify(string))}`);
                  // return this.logger.log(` | INFO  |  ${dateNsecond}  ${JSON.stringify(string)}`);
            }

            if (optionalParams && optionalParams.length !== 0) {
                  console.log(`${chalk.black.bgMagentaBright(' | INFO  | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgMagentaBright(' ')} ${chalk.magentaBright(string)}`, ...optionalParams);
                  // return this.logger.log(` | INFO  |  ${dateNsecond}  ${string}`, ...optionalParams);
            }

            console.log(`${chalk.black.bgMagentaBright(' | INFO  | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgMagentaBright(' ')} ${chalk.magentaBright(string)}`);
            // return this.logger.log(` | INFO  |  ${dateNsecond}  ${string}`);
      }

      static warn(string = 'Empty response', optionalParams = []) {
            const date = new Date();
            const parseNumber = (number = 5) => (number.toString().length === 1 ? `0${number}` : number);

            const dateNsecond = [
                  `${date.getFullYear()}-${parseNumber(date.getMonth() + 1)}-${parseNumber(date.getDate())}`,
                  ` ${parseNumber(date.getHours())}:${parseNumber(date.getMinutes())}:${parseNumber(date.getSeconds())}`
            ].join('');

            // @ts-ignore
            if ((string instanceof Error)) throw new TypeError('The Logger#warn method only accepts strings.');
            if (typeof string === 'object') {
                  // this.logger.log(` | WARN  |  ${dateNsecond}  ${JSON.stringify(string)}`);
                  return console.log(`${chalk.black.bgYellow(' | WARN  | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgYellow(' ')} ${chalk.yellowBright(JSON.stringify(string))}`);
            }

            if (optionalParams && optionalParams.length !== 0) {
                  // this.logger.log(` | WARN  |  ${dateNsecond}  ${string}`, ...optionalParams);
                  return console.log(`${chalk.black.bgYellow(' | WARN  | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgYellow(' ')} ${chalk.yellowBright(string)}`, ...optionalParams);
            }

            // this.logger.log(` | WARN  |  ${dateNsecond}  ${string}`);
            return console.log(`${chalk.black.bgYellow(' | WARN  | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgYellow(' ')} ${chalk.yellowBright(string)}`);
      }

      static debug(string = 'Empty response', optionalParams = []) {
            const date = new Date();
            const parseNumber = (number = 5) => (number.toString().length === 1 ? `0${number}` : number);

            const dateNsecond = [
                  `${date.getFullYear()}-${parseNumber(date.getMonth() + 1)}-${parseNumber(date.getDate())}`,
                  ` ${parseNumber(date.getHours())}:${parseNumber(date.getMinutes())}:${parseNumber(date.getSeconds())}`
            ].join('');

            // @ts-ignore
            if ((string instanceof Error)) throw new TypeError('The Logger#debug method only accepts strings.');
            if (typeof string === 'object') {
                  // this.logger.log(` | DEBUG |  ${dateNsecond}  ${JSON.stringify(string)}`);
                  return console.log(`${chalk.black.bgBlueBright(' | DEBUG | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgBlueBright(' ')} ${chalk.blueBright(JSON.stringify(string))}`);
            }

            if (optionalParams && optionalParams.length !== 0) {
                  // this.logger.log(` | DEBUG |  ${dateNsecond}  ${string}`, ...optionalParams);
                  return console.log(`${chalk.black.bgBlueBright(' | DEBUG | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgBlueBright(' ')} ${chalk.blueBright(string)}`, ...optionalParams);
            }

            // this.logger.log(` | DEBUG |  ${dateNsecond}  ${string}`);
            return console.log(`${chalk.black.bgBlueBright(' | DEBUG | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgBlueBright(' ')} ${chalk.blueBright(string)}`);
      }

      static error(string = 'Empty response', optionalParams = []) {
            const date = new Date();
            const parseNumber = (number = 5) => (number.toString().length === 1 ? `0${number}` : number);

            const dateNsecond = [
                  `${date.getFullYear()}-${parseNumber(date.getMonth() + 1)}-${parseNumber(date.getDate())}`,
                  ` ${parseNumber(date.getHours())}:${parseNumber(date.getMinutes())}:${parseNumber(date.getSeconds())}`
            ].join('');

            // @ts-ignore
            if ((string instanceof Error)) {
                  // this.logger.log(` | ERROR |  ${dateNsecond}  ${string.toString()}`);
                  return console.log(`${chalk.black.bgRedBright(' | ERROR | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgRedBright(' ')} ${chalk.redBright(string.toString())}`);
            }

            if (typeof string === 'object') {
                  // this.logger.log(` | ERROR |  ${dateNsecond}  ${JSON.stringify(string)}`);
                  return console.log(`${chalk.black.bgRedBright(' | ERROR | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgRedBright(' ')} ${chalk.redBright(JSON.stringify(string))}`);
            }

            if (optionalParams && optionalParams.length !== 0) {
                  // this.logger.log(` | ERROR |  ${dateNsecond}  ${string}`, ...optionalParams);
                  return console.log(`${chalk.black.bgRedBright(' | ERROR | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgRedBright(' ')} ${chalk.redBright(string)}`, ...optionalParams);
            }

            // this.logger.log(` | ERROR |  ${dateNsecond}  ${string}`);
            return console.log(`${chalk.black.bgRedBright(' | ERROR | ') + chalk.bgGray(` ${dateNsecond} `) + chalk.bgRedBright(' ')} ${chalk.redBright(string)}`);
      }

}