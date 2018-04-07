export function getQuestionsNumbers(quesions) {
    let questionsNumberRegexp = /^\d{1,3}\.[\s\S]+?/gum;
    return quesions.match(questionsNumberRegexp);
}
