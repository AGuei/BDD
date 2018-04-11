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
    root.getQuestionsNumbers = factory(root.stringToRegexp);
  }
}(this, function factory (stringToRegexp) {
  function returnExports (questions, regExpPatternString) {    
    let questionsNumbersRegexp = new RegExp(stringToRegexp(regExpPatternString));
    return questions.match(questionsNumbersRegexp);
  }
  return returnExports;
}));
