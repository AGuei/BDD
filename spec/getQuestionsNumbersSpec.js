/* eslint-env jasmine, browser, webextensions, amd */

// var getQuestionsNumbers = require('../getQuestionsNumbers.js');

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../getQuestionsNumbers')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      '../getQuestionsNumbers'
    ], factory);
  } else {
    // Browser globals
    factory(root.getQuestionsNumbers);
  }
}(this, function factory (getQuestionsNumbers) {
  let questions = '1. xxxxxx\n2. aaaasadf\n3. 444asdjfj';
  describe('Accept pattern from user\'s choice for finding questions numbers', () => {
    it('should find all questions numbers if regexp do not include capture group', () => {
      let questionsRegexpString = '^\\d{1,3}\\.[\\s\\S]+?/gmu';
      let result = getQuestionsNumbers(questions, questionsRegexpString);
      expect(result).toEqual(['1. ', '2. ', '3. ']);
    });
    it('should find all questions numbers if regexp includes capture group', () => {
      let questionsRegexpString = '^(\\d{1,3}\\.)[\\s\\S]+?/gmu';
      let result = getQuestionsNumbers(questions, questionsRegexpString);
      expect(result).toEqual(['1.', '2.', '3.']);
    });
  });
}));
