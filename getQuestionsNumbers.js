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
  function getQuestionsNumbers (questions) {
    let questionsNumberRegexp = /^\d{1,3}\.[\s\S]+?/gum;
    return questions.match(questionsNumberRegexp);
  }
  return getQuestionsNumbers;
}));
