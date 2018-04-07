var module = require('../getQuesionsNumber.js');

describe('find quesions numbers', () => {
    it('should find all quesions numbers', () => {
        let quesions = '1. xxxxxx\n2. aaaasadf\n3. 444asdjfj';
        let quesionsRegex = /^\d{1,3}\.[\s\S]+?/gum;

        expect(module.getQuestionsNumbers(quesions).length).toEqual(3, 'length cannot match');
        expect(module.getQuestionsNumbers(quesions)).toEqual(['1. ', '2. ', '3. '], "Numbers can't match");
    });
});