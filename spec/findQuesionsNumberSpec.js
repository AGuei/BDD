import { getQuestionsNumbers } from "../getQuesionsNumber.js";

describe('find quesions numbers', () => {
    it('should find all quesions numbers', () => {
        let quesions = '1. xxxxxx\n2. aaaasadf\n3. 444asdjfj';
        let quesionsRegex = /^\d{1,3}\.[\s\S]+?/gum;

        expect(getQuestionsNumbers(quesions).length).toEqual(3, 'length cannot match');
        expect(getQuestionsNumbers(quesions)).toEqual(['1. ', '2. ', '3. '], "Numbers can't match");
    });
});