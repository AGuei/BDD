/* eslint-env jasmine, browser, webextensions, amd */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../splitResultOfTextArea')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      'splitResultOfTextArea'
    ], factory);
  } else {
    // Browser globals
    factory(root.splitResultOfTextArea);
  }
}(this, function factory (splitResultOfTextArea) {
  describe('split textarea textcontent', () => {
    let textarea = document.createElement('textarea');
    it('should split textarea content that single line', () => {
      textarea.textContent = 'aaa\nbbb\nccc\n';
      let result = splitResultOfTextArea(textarea.textContent);
      expect(result).toEqual(['aaa', 'bbb', 'ccc']);
    });
    it('should split textarea content that multi lines', () => {
      textarea.textContent = 'aaa\nbbb\nccc\n\nddd\neee\n\n';
      let result = splitResultOfTextArea(textarea.textContent);
      expect(result).toEqual([['aaa', 'bbb', 'ccc'], ['ddd', 'eee']]);
    });
  });
}))
;
