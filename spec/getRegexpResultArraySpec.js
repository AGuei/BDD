/* eslint-env jasmine, browser, webextensions, amd */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../getRegexpResultArray')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      '../getRegexpResultArray'
    ], factory);
  } else {
    // Browser globals
    factory(root.getRegexpResultArray);
  }
}(this, function factory (getRegexpResultArray) {
  let questions = '1. xxxxxx\n2. aaaasadf\n3. 444asdjfj';
  describe('Accept pattern from user\'s choice for finding questions numbers', () => {
    it('should find all questions numbers if regexp do not include capture group', () => {
      let getQuestionsNumbersRegexpString = '^\\d{1,3}\\.[\\s\\S]+?/gmu';
      let result = getRegexpResultArray(questions, getQuestionsNumbersRegexpString);
      expect(result).toEqual(['1. ', '2. ', '3. ']);
    });
    it('should find all questions numbers if regexp includes capture group', () => {
      let getQuestionsNumbersRegexpString = '^(\\d{1,3}\\.)[\\s\\S]+?/gmu';
      let result = getRegexpResultArray(questions, getQuestionsNumbersRegexpString);
      expect(result).toEqual(['1.', '2.', '3.']);
    });
  });
}));
