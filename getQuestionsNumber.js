<<<<<<< HEAD
module.exports = {
    getQuestionsNumbers: function (questions) {
        let questionsNumberRegexp = /^\d{1,3}\.[\s\S]+?/gum;
        return questions.match(questionsNumberRegexp);
    }
};
=======
export function getQuestionsNumbers(quesions) {
    let questionsNumberRegexp = /^\d{1,3}\.[\s\S]+?/gum;
    return quesions.match(questionsNumberRegexp);
}
>>>>>>> 4054e0642da1c46401dc2b3f3113c5487acc694a
