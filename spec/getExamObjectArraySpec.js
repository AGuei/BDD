/* eslint-env jasmine, browser, webextensions, amd */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../getExamObjectArray')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      'getExamObjectArray'
    ], factory);
  } else {
    // Browser globals
    factory(root.getExamObjectArray);
  }
}(this, function factory (getExamObjectArray) {
  describe('examObjectArray', () => {
    let textareaContainer = {qa: undefined, ans: undefined, options: undefined};
    for (let prop in textareaContainer) {
      if (textareaContainer.hasOwnProperty(prop)) {
        textareaContainer[prop] = document.createElement('textarea');
      }
    }
    textareaContainer.qa.textContent = 'aaaaaaaaaaaaaaa\nbbbbbbbbbbbbb\ncccccccccc\nddddddddddddddd\n';
    textareaContainer.ans.textContent = 'a\n\nb\n\nc\nd\n\nd\n\n';
    textareaContainer.options.textContent = 'aaa\nbbb\nccc\nddd\n\neee\nfff\nggg\nhhh\n\niii\njjj\nkkk\nlll\n\nmmm\nnnn\nooo\nppp\n\n';
    it('get data from textarea to return a exam object', () => {
      let examObjectArray = getExamObjectArray(textareaContainer);
      expect(examObjectArray.length).toEqual(4);
      expect(examObjectArray[0].qa).toEqual('aaaaaaaaaaaaaaa');
      expect(examObjectArray[1].ans[0]).toEqual('b');
      expect(examObjectArray[2].ans).toEqual(['c', 'd']);
      expect(examObjectArray[2].options[0]).toEqual('iii');
    });
  });
}))
;
