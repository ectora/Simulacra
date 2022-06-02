class Utils {
      static HEX_ARRAY = "0123456789abcdef".split('');

      static bytesToHex (bytes) {
            if (bytes == null) return "";
            if (!Array.isArray(bytes)) throw new Error(`Byte is not an array.`);
            const hexChars = [];
            
            for (let j = 0; j < bytes.length; j++) {
                  const v = bytes[j] & 0xFF;
                  hexChars[j * 2] = this.HEX_ARRAY[v >>> 4];
                  hexChars[j * 2 + 1] = this.HEX_ARRAY[v & 0x0F];
            }

            return hexChars.join('').toLowerCase();
      }
}

module.exports = Utils;