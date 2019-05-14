export default {
  getRandomNumber(n) {
    return Math.round(Math.random() * n);
  },

  /**
   * Generates a GUID string.
   * @returns The generated GUID.
   * @example af8a8416-6e18-a307-bd9c-f2c947bbb3aa
   */
  getUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line: no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line: no-bitwise
      const v = c === 'x' ? r : r & 0x3 | 0x8;

      return v.toString(16);
    });
  }
};
