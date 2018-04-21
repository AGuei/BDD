/* eslint-env jasmine, browser, webextensions, amd */
/* eslint-disable no-unused-vars */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else {
    // Browser globals
    root.addResultToTextArea = factory();
  }
}(this, function factory () {
  function addResultToTextArea (result, textAreaId, parrentNodeId) {
    let textArea = document.createElement('textarea');
    textArea.id = textAreaId;
    for (let i = 0; i < result.length; i++) {
      if (i < result.length - 1) {
        textArea.value += result[i] + '\r\n';
      } else {
        textArea.value += result[result.length-1];
      }
    }
    let parrentNode = document.querySelector('#' + parrentNodeId);
    if (!document.getElementById('resultOfGetQuestionsNumbers')) {
      parrentNode.appendChild(textArea);
    } else {
      parrentNode.replaceChild(textArea, document.getElementById('resultOfGetQuestionsNumbers'));
    }
  }
  return addResultToTextArea;
}));
