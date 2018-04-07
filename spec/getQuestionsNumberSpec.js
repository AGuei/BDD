import { getQuestionsNumbers } from "../getQuestionsNumber.js";

describe('Get questions numbers', () => {
    it('should get all questions numbers', () => {
        let questions = '1. xxxxxx\n2. aaaasadf\n3. 444asdjfj';
        let questionsRegex = /^\d{1,3}\.[\s\S]+?/gum;

        expect(getQuestionsNumbers(questions).length).toEqual(3, 'length cannot match');
        expect(getQuestionsNumbers(questions)).toEqual(['1. ', '2. ', '3. '], "Numbers can't match");
    });
});