/* eslint-env jasmine, browser, webextensions, amd */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../addResultToTextArea')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      'addResultToTextArea'
    ], factory);
  } else {
    // Browser globals
    factory(root.addResultToTextArea);
  }
}(this, function factory (addResultToTextArea) {
  describe('Add Array data to HTMLNode', () => {
    it('should append/replace a textarea node to a given id node', () => {
      let addNodeId = 'resultOfGetQuestionsNumbers';
      addResultToTextArea(addNodeId);
      expect(document.querySelector('#' + addNodeId).id).toEqual(addNodeId);
    });
  });
}));
