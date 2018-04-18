/* eslint-env jasmine, browser, webextensions, amd */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../addResultToNode')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      'addResultToNode'
    ], factory);
  } else {
    // Browser globals
    factory(root.addResultToNode);
  }
}(this, function factory (addResultToNode) {
  describe('Add Array data to HTMLNode', () => {
    it('should append/replace a textarea node to a given id node', () => {
      let addNodeId = 'resultOfGetQuestionsNumbers';
      addResultToNode(addNodeId);
      let bodyChildNodesLength = document.body.childNodes.length;
      expect(bodyChildNodesLength).toBe(1);
      expect(document.querySelector('#' + addNodeId).id).toEqual(addNodeId);
    });
  });
}));
