function delegateOfCheckAll (data) {
  function getGroupNames () {
    let groups = {};
    document.querySelectorAll('input[name]').forEach(inputNode => {
      groups[inputNode.name] = true;
    });
    return groups;
  }
  let groupNames = getGroupNames();
  function checkedOnceAtleast (groups) {
    return Object.getOwnPropertyNames(groupNames).every(groupName => {
      return document.querySelectorAll('input[name=' + groupName + ']:checked').length >= 1;
    });
  }
  let prompMsg = '尚有未作答的題目，確定要交卷嗎？';
  function displayExamResult (result) {
    let msg = '總共答對' + result.correctTimes + '題';
    let msg2 = '總共答錯' + result.wrongQaArray.length + '題';
    let section = document.createElement('section');
    section.id = 'displayResult';
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    p.textContent = msg;
    p2.textContent = msg2;
    section.appendChild(p);
    section.appendChild(p2);
    if (result.wrongQaArray.length > 0) {
      let btn = document.createElement('button');
      btn.textContent = '針對答錯題目繼續練習';
      btn.addEventListener('click', function () {
        if (document.getElementById('displayResult')) {
          document.getElementById('displayResult').remove();
        }
        var correctArray = [];
        let examTable = makeTable(result.wrongQaArray);
        correctArray = JSON.parse(localStorage.getItem('correctArray'));
        let btn = document.createElement('button');
        btn.id = 'calculate';
        btn.class = 'button';
        btn.textContent = '計算成績';
        btn.addEventListener('click', e => {
          delegateOfCheckAll(result.wrongQaArray);
        }, false);
        examTable.appendChild(btn);
          document.body.replaceChild(examTable, document.getElementById('examTable'));
      }, false);
      section.appendChild(btn);
    }
    return section;
  }
  if (!checkedOnceAtleast()) {
    if (confirm(prompMsg)) {
      if (!document.getElementById('displayResult')) {
        document.body.appendChild(displayExamResult(checkAns()));
      } else {
        document.body.replaceChild(displayExamResult(checkAns()), document.getElementById('displayResult'));
      }
    }
  } else {
    document.body.appendChild(displayExamResult(checkAns()));
  }
  function checkAns () {
    let result = {
      correctTimes: 0,
      wrongQaArray: []
    };
    Object.getOwnPropertyNames(groupNames).map(groupName => {
      return document.querySelector('input[name=' + groupName + ']:checked');
    }).filter(ele => {
      return ele !== null;
    }).forEach(ele => {
      let qNum = ele.id.match(/_(\d{1,3})_/)[1];
      if (ele.type === 'radio') {
        let optText = ele.nextSibling.textContent;
        let parentNode = ele.parentNode;
        if (optText === correctArray[qNum][0]) {
          result.correctTimes++;
          parentNode.classList.add('correctAns');
        } else {
          result.wrongQaArray.push(data[qNum]);
          parentNode.classList.add('wrongAns');
        }
        let radioGroup = document.querySelectorAll(
          'li input[name = singleChoicesGroup_' + qNum + ']'
        );
        radioGroup.forEach(ele => {
          let parentNode = ele.parentNode;
          let ansText = ele.nextSibling.textContent;
          if (ansText === correctArray[qNum][0]) {
            parentNode.classList.add('correctAns');
          }
        });
        disableEles(radioGroup);
      } else if (ele.type === 'checkbox') {
        let checkboxGroup = document.querySelectorAll(
          'li input[name = multipleChoicesGroup_' + qNum + ']'
        );
        let cAnsLen = correctArray[qNum].length;
        let selected = [];
        let checkedPosition = [];
        let correctCounts = 0;
        checkboxGroup.forEach((ele, index) => {
          if (ele.checked) {
            checkedPosition.push(index);
            selected.push(ele.nextSibling.textContent);
          }
        });
        selected.forEach(ele => {
          correctArray[qNum].some(cAns => {
            if (ele === cAns) {
              correctCounts++;
              return true;
            }
          });
        });
        checkboxGroup.forEach(ele => {
          let parentNode = ele.parentNode;
          let ansText = ele.nextSibling.textContent;
          correctArray[qNum].some(cAns => {
            if (ansText === cAns) {
              parentNode.classList.remove('wrongAns');
              parentNode.classList.add('correctAns');
              return true;
            } else {
              parentNode.classList.add('wrongAns');
            }
          });
        });
        if (correctCounts === cAnsLen && selected.length === cAnsLen) {
          result.correctTimes++;
          checkedPosition.forEach(ele => {
            checkboxGroup[ele].parentNode.classList.add('correctAns');
          });
        } else {
          result.wrongQaArray.push(data[qNum]);
        }
        disableEles(checkboxGroup);
      }
    });
    Object.getOwnPropertyNames(groupNames).map(groupName => {
      if (document.querySelector('input[name=' + groupName + ']:checked')) {
        return null;
      } else {
        return document.querySelector('input[name=' + groupName + ']:not(:checked)');
      }
    }).filter(ele => {
      return ele !== null;
    }).forEach(ele => {
      let qNum = ele.id.match(/_(\d{1,3})_/)[1];
      result.wrongQaArray.push(data[qNum]);
      if (ele.type === 'radio') {
        let radioGroup = document.querySelectorAll(
          'li input[name = singleChoicesGroup_' + qNum + ']'
        );
        radioGroup.forEach(ele => {
          let optText = ele.nextSibling.textContent;
          let parentNode = ele.parentNode;
          if (optText === correctArray[qNum][0]) {
            parentNode.classList.add('correctAns');
          }
        });
        disableEles(radioGroup);
      } else if (ele.type === 'checkbox') {
        let checkboxGroup = document.querySelectorAll(
          'li input[name = multipleChoicesGroup_' + qNum + ']'
        );
        checkboxGroup.forEach(ele => {
          let parentNode = ele.parentNode;
          let ansText = ele.nextSibling.textContent;
          correctArray[qNum].forEach(cAns => {
            if (ansText === cAns) {
              parentNode.classList.add('correctAns');
              return true;
            }
          });
        });
      }
    });
    return result;
  }
}
