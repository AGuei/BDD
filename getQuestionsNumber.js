module.exports = {
  getQuestionsNumbers: function (questions) {
    let questionsNumberRegexp = /^\d{1,3}\.[\s\S]+?/gum;
    return questions.match(questionsNumberRegexp);
  }
};
