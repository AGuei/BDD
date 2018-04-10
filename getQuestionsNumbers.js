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
    root.getQuestionsNumbers = factory();
  }
}(this, function factory () {
  function getQuestionsNumbers (questions, regExpPatternString) {
    let regexpPattern = /(.+)\/(?:[gum]+)/;
    let patternString = regexpPattern.exec(regExpPatternString)[1];
    let regexpModePattern = /.+\/([gum]+)/;
    let patternModeString = regexpModePattern.exec(regExpPatternString)[1];
    let questionsNumbersRegexp = new RegExp(patternString, patternModeString);
    return questions.match(questionsNumbersRegexp);
  }
  return getQuestionsNumbers;
}));
