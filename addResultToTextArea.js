/* eslint-env jasmine, browser, webextensions, amd */
/* eslint-disable no-unused-vars */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(
      require('./getRegexpResultArray.js')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else {
    // Browser globals
    root.addResultToNode = factory(root.getRegexpResultArray);
  }
}(this, function factory (getRegexpResultArray) {
  function addResultToNode (textAreaId) {
    let textArea = document.createElement('textarea');
    textArea.id = textAreaId;
    document.body.appendChild(textArea);
  }
  return addResultToNode;
}));
