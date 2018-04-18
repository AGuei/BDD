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
    beforeAll(() => {
      let parrentNode = document.createElement('div');
      parrentNode.id = 'container';
      document.body.appendChild(parrentNode);
    });
    it('should append/replace a textarea node to a given id node', () => {
      let addNodeId = 'resultOfGetQuestionsNumbers';
      const dataArray = ['1.', '2.', '3.', '4.'];
      let parrentNodeId = 'container';
      addResultToTextArea(dataArray, addNodeId, parrentNodeId);
      let textAreaDom = document.querySelector('#' + addNodeId);
      expect(textAreaDom.id).toEqual(addNodeId);
      let parrentNode = document.querySelector('#' + parrentNodeId);
      expect(textAreaDom.value.split(/\n/m, 4)).toEqual(dataArray);
      expect(parrentNode).toBe(textAreaDom.parentNode);
    });
  });
}));
