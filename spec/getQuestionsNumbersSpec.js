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
  describe('find questions numbers', () => {
    it('should find all questions numbers', () => {
      let questions = '1. xxxxxx\n2. aaaasadf\n3. 444asdjfj';
      // let questionsRegex = /^\d{1,3}\.[\s\S]+?/gum;

      expect(getQuestionsNumbers(questions).length).toEqual(3);
      expect(getQuestionsNumbers(questions)).toEqual(['1. ', '2. ', '3. ']);
    });
  });
}));
