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
  describe('Add Array data to TextAreaNode', () => {
    it('should append/replace a textarea node to a given id node', () => {
      let addNodeId = 'resultOfGetQuestionsNumbers';
      const dataArray = ['1.', '2.', '3.', '4.'];
      addResultToTextArea(dataArray, addNodeId);
      let textAreaDom = document.querySelector('#' + addNodeId);
      expect(textAreaDom.id).toEqual(addNodeId);
      expect(textAreaDom.value.split(/\n/m, 4)).toEqual(dataArray);
    });
  });
}));
