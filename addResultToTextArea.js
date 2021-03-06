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
    if (!result || result.length === 0) {
      return;
    }
    let existedTextArea = document.getElementById(textAreaId);
    let textArea;
    if (existedTextArea) {
      textArea = existedTextArea.cloneNode();
      textArea.value = '';
    } else {
      textArea = document.createElement('textarea');
      textArea.id = textAreaId;
    }
    textArea.rows = '10';
    if (result[0].hasOwnProperty('choices')) {
      for (let j = 0; j < result.length; j++) {
        for (let i = 0; i < result[j].choices.length; i++) {
          if (i < result[j].choices.length - 1) {
            textArea.value += result[j].choices[i] + '\r\n';
          } else {
            textArea.value += result[j].choices[result[j].choices.length - 1];
          }
        }
        if (j < result.length - 1) {
          textArea.value += '\r\n' + '\r\n';
        }
      }
    } else {
      for (let i = 0; i < result.length; i++) {
        if (i < result.length - 1) {
          textArea.value += result[i] + '\r\n';
        } else {
          textArea.value += result[result.length - 1];
        }
      }
    }
    let parrentNode;
    if (!document.getElementById(textAreaId)) {
      parrentNode = document.querySelector('#' + parrentNodeId);
      parrentNode.appendChild(textArea);
    } else {
      parrentNode = document.getElementById(textAreaId).parentNode;
      parrentNode.replaceChild(textArea, document.getElementById(textAreaId));
    }
  }
  return addResultToTextArea;
}));
