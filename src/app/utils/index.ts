export default {
  getRandomNumber: function(n) {
    return Math.round(Math.random() * n);
  },

  /**
 * Generates a GUID string.
 * @returns {String} The generated GUID.
 * @example af8a8416-6e18-a307-bd9c-f2c947bbb3aa
 */
  getUuid: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;

      return v.toString(16);
    });
  }
}
