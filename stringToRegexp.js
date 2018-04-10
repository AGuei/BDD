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
  function returnExports (regexpString) {
    let regexpPattern = /(.+)\/(?:[gum]+)/;
    let patternString = regexpPattern.exec(regexpString)[1];
    let regexpModePattern = /.+\/([gum]+)/;
    let patternModeString = regexpModePattern.exec(regexpString)[1];
    let pattern = new RegExp(patternString, patternModeString);
    return pattern;
  }
  return returnExports;
}));
