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
    let qaArray = splitResultOfTextArea(textareaContainer.qa.value) || [];
    let ansArray = splitResultOfTextArea(textareaContainer.ans.value) || [];
    let optionsArray = splitResultOfTextArea(textareaContainer.options.value) || [];
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
          switch (ansArray[i][j].toUpperCase()) {
            case 'A':
              examObject.ans.push(optionsArray[i][0]);
              break;
            case 'B':
              examObject.ans.push(optionsArray[i][1]);
              break;
            case 'C':
              examObject.ans.push(optionsArray[i][2]);
              break;
            case 'D':
              examObject.ans.push(optionsArray[i][3]);
              break;
            case 'E':
              examObject.ans.push(optionsArray[i][4]);
              break;
            case '1':
              examObject.ans.push(optionsArray[i][0]);
              break;
            case '2':
              examObject.ans.push(optionsArray[i][1]);
              break;
            case '3':
              examObject.ans.push(optionsArray[i][2]);
              break;
            case '4':
              examObject.ans.push(optionsArray[i][3]);
              break;
            case '5':
              examObject.ans.push(optionsArray[i][4]);
              break;
          }
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
