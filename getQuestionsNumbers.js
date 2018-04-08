/* eslint-disable no-unused-vars */

function getQuestionsNumbers (questions) {
  let questionsNumberRegexp = /^\d{1,3}\.[\s\S]+?/gum;
  return questions.match(questionsNumberRegexp);
}

// module.exports = getQuestionsNumbers;
