/* eslint-env jasmine, browser, webextensions, amd */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../stringToRegexp.js')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      '../stringToRegexp.js'
    ], factory);
  } else {
    // Browser globals
    factory(root.stringToRegexp);
  }
}(this, function factory (stringToRegexp) {
  describe('Transform string to an Regexp object', () => {
    it('should tranform string to Regexp', () => {
      let string = '^\\d{1,3}\\.[\\s\\S]+?/gmu';
      let string2 = '123';
      let regExp = /^\d{1,3}\.[\s\S]+?/gmu;
      let regExp2 = /123/;

      expect(stringToRegexp(string).source).toEqual(regExp.source);
      expect(stringToRegexp(string2).source).toEqual(regExp2.source);
    });
  });
}));
