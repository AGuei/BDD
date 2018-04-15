/* eslint-env jasmine, browser, webextensions, amd */
/* eslint-disable no-unused-vars */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('./stringToRegexp.js'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      './stringToRegexp.js'
    ], factory);
  } else {
    // Browser globals
    root.getRegexpResultArray = factory(root.stringToRegexp);
  }
}(this, function factory (stringToRegexp) {
  function getRegexpResultArray (questions, regExpPatternString) {
    let regexp = stringToRegexp(regExpPatternString);
    let matchResult;
    let resultArray = [];
    while ((matchResult = regexp.exec(questions)) !== null) {
      if (matchResult.length > 1) {
        for (let i = 1; i < matchResult.length; i++) {
          resultArray.push(matchResult[i]);
        }
      } else {
        resultArray.push(matchResult[0]);
      }
    }
    return resultArray;
  }
  return getRegexpResultArray;
}));
