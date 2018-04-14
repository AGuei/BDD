/* eslint-env jasmine, browser, webextensions, amd */
/* eslint-disable no-unused-vars */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else {
    // Browser globals
    root.stringToRegexp = factory();
  }
}(this, function factory () {
  function stringToRegexp (regexpString) {
    let patternString = regexpString.replace(/(.+)\/(?:[gium]*)/, '$1');
    let regexpFlags = regexpString.replace(/.+\/([gium]*)$/, '$1');
    if (!regexpFlags.match(/[gimu]+/)) {
      return new RegExp(patternString);
    } else {
      return new RegExp(patternString, regexpFlags);
    }
  }
  return stringToRegexp;
}));
