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
  describe('Accept pattern from user\'s choice for finding questions numbers', () => {
    it('should find all questions numbers', () => {
      let questions = '1. xxxxxx\n2. aaaasadf\n3. 444asdjfj';
      let questionsRegexpString = '^\\d{1,3}\\.[\\s\\S]+?/gmu';

      expect(getQuestionsNumbers(questions, questionsRegexpString).length).toEqual(3);
      expect(getQuestionsNumbers(questions, questionsRegexpString)).toEqual(['1. ', '2. ', '3. ']);
    });
  });
}));
