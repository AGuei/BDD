export function getQuestionsNumbers(quesions) {
    let quesionsNumberRegexp = /^\d{1,3}\.[\s\S]+?/gum;
    return quesions.match(quesionsNumberRegexp);
}
