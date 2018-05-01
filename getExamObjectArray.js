/* eslint-env jasmine, browser, webextensions, amd */
/* eslint-disable no-unused-vars */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('./splitResultOfTextArea'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      './splitResultOfTextArea'
    ], factory);
  } else {
    // Browser globals
    root.getExamObjectArray = factory(root.splitResultOfTextArea);
  }
}(this, function factory (splitResultOfTextArea) {
  function getExamObjectArray (textareaContainer) {
    let examObjectArray = [];
    let qaArray = splitResultOfTextArea(textareaContainer.qa.textContent);
    let ansArray = splitResultOfTextArea(textareaContainer.ans.textContent);
    let optionsArray = splitResultOfTextArea(textareaContainer.options.textContent);
    function hasSameLength () {
      let len = arguments.length;
      for (let i = 1; i < len; i++) {
        if (arguments[i] !== arguments[i - 1]) {
          return false;
        }
      }
      return true;
    }
    if (hasSameLength(qaArray.length, ansArray.length, optionsArray.length)) {
      for (let i = 0; i < qaArray.length; i++) {
        let examObject = {qa: '', ans: [], options: []};
        examObject.qa = qaArray[i];
        for (let j = 0; j < ansArray[i].length; j++) {
          examObject.ans.push(ansArray[i][j]);
        }
        for (let j = 0; j < optionsArray[i].length; j++) {
          examObject.options.push(optionsArray[i][j]);
        }
        examObjectArray.push(examObject);
      }
    }
    return examObjectArray;
  }
  return getExamObjectArray;
}));
