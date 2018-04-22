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
  describe('Accept pattern from user\'s choice for finding somethins', () => {
    let questions = '1. xxxxxx (A)\n2. aaa\nasadf (A)\n3. 444asdjfj (A)';
    describe('Accept pattern from user\'s choice for finding questions numbers', () => {
      it('should find all questions numbers if regexp do not include capture group', () => {
        let getQuestionsNumbersPattern = '^\\d{1,3}\\.[\\s\\S]+?/gmu';
        let result = getRegexpResultArray(questions, getQuestionsNumbersPattern);
        expect(result).toEqual(['1. ', '2. ', '3. ']);
      });
      it('should find all questions numbers if regexp includes capture group', () => {
        let getQuestionsNumbersPattern = '^(\\d{1,3}\\.)[\\s\\S]+?/gmu';
        let result = getRegexpResultArray(questions, getQuestionsNumbersPattern);
        expect(result).toEqual(['1.', '2.', '3.']);
      });
    });
    describe('Accept pattern from user\'s choice for finding questions', () => {
      it('should remove new line symbol and space at front and end', () => {
        let getQuestionsPattern = '^\\d{1,3}\\.\\s{0,3}([\\s\\S]+?)(?=\\(A\\))/gmu';
        let result = getRegexpResultArray(questions, getQuestionsPattern);
        expect(result).toEqual(['xxxxxx', 'aaaasadf', '444asdjfj']);
      });
    });
  });
}));
