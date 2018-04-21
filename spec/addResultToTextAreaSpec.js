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
    const dataArray2 = ['2.', '3.', '4.'];
    const dataArray = ['1.', '2.', '3.', '4.'];
    const addNodeId = 'resultOfGetQuestionsNumbers';
    const parrentNodeId = 'container';
    beforeAll(() => {
      let parrentNode = document.createElement('div');
      parrentNode.id = 'container';
      document.body.appendChild(parrentNode);
    });
    it('should append a textarea node to a given id node', () => {
      addResultToTextArea(dataArray, addNodeId, parrentNodeId);
      let textAreaDom = document.querySelector('#' + addNodeId);
      let parrentNode = document.querySelector('#' + parrentNodeId);
      expect(textAreaDom.id).toEqual(addNodeId);
      expect(textAreaDom.value.split(/\n/m)).toEqual(dataArray);
      expect(parrentNode).toBe(textAreaDom.parentNode);
    });
    it('should replace a textarea node to a given id node', () => {
      addResultToTextArea(dataArray2, addNodeId, parrentNodeId);
      let textAreaDom = document.querySelector('#' + addNodeId);
      let parrentNode = document.querySelector('#' + parrentNodeId);
      textAreaDom = document.querySelector('#' + addNodeId);
      expect(textAreaDom.value.split(/\n/m)).toEqual(dataArray2);
      expect(parrentNode.firstChild.value.split(/\n/m)).toEqual(dataArray2);
      expect(parrentNode.firstChild.value.split(/\n/m)).not.toEqual(dataArray);
      addResultToTextArea(dataArray, addNodeId, parrentNodeId);
      textAreaDom = document.querySelector('#' + addNodeId);
      expect(textAreaDom.value.split(/\n/m)).toEqual(dataArray);
      expect(parrentNode.childNodes.length).toBe(1);
      expect(parrentNode.firstChild.value.split(/\n/m)).toEqual(dataArray);
      expect(parrentNode.firstChild.value.split(/\n/m)).not.toEqual(dataArray2);
    });
  });
}));
