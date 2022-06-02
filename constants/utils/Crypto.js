const mt19937 = require('@stdlib/random-base-mt19937');

class Crypto {
      static createSessionKey (length) {
            if (!length) return null;

            var result = '';
            while (length--){
                  result += Math.floor(Math.random() * 16).toString(16);
            }

            return result.length ? result : null;
      }
}

module.exports = Crypto;