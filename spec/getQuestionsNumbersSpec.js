/* eslint-env jasmine, browser, webextensions */
/* global getQuestionsNumbers */

// var getQuestionsNumbers = require('../getQuestionsNumbers.js');

describe('find questions numbers', () => {
  it('should find all questions numbers', () => {
    let questions = '1. xxxxxx\n2. aaaasadf\n3. 444asdjfj';
    // let questionsRegex = /^\d{1,3}\.[\s\S]+?/gum;

    expect(getQuestionsNumbers(questions).length).toEqual(3);
    expect(getQuestionsNumbers(questions)).toEqual(['1. ', '2. ', '3. ']);
  });
});
