function delegateOfCheck(e) {
  let event = e || window.event;
  let target = event.target || event.srcElement;
  function isInputEle () {
    return target.id && target.tagName === 'INPUT';
  }
  if (isInputEle()) {
    let id = target.id;
    let qNum = id.match(/_(\d{1,3})_/)[1];
    if (target.type === 'radio') {
      let radioEle = document.getElementById(id);
      let optText = radioEle.nextSibling.textContent;
      let parentNode = radioEle.parentNode;
      if (radioEle.checked) {
        if (optText === correctArray[qNum][0]) {
          parentNode.classList.add('correctAns');
          let radioGroup = document.querySelectorAll(
            'li input[name = singleChoicesGroup_' + qNum + ']'
          );
          disableEles(radioGroup);
        } else {
          parentNode.classList.add('wrongAns');
        }
      }
    } else if (target.type === 'checkbox') {
      let checkboxGroup = document.querySelectorAll(
        'li input[name = multipleChoicesGroup_' + qNum + ']'
      );
      let cAnsLen = correctArray[qNum].length;
      let selected = [];
      let checkedPosition = [];
      let correctTimes = 0;
      for (let i = 0, len = checkboxGroup.length; i < len; i++) {
        if (checkboxGroup[i].checked) {
          checkedPosition.push(i);
          selected.push(checkboxGroup[i].nextSibling.textContent);
        }
      }
      for (let p = 0; p < selected.length; p++) {
        for (let k = 0; k < cAnsLen; k++) {
          if (selected[p] === correctArray[qNum][k]) {
            correctTimes++;
            break;
          }
        }
      }
      checkboxGroup.forEach(ele => {
        let parentNode = ele.parentNode;
        let ansText = ele.nextSibling.textContent;
        if (ele.checked) {
          correctArray[qNum].some(cAns => {
            if (ansText === cAns) {
              parentNode.classList.remove('wrongAns');
              parentNode.classList.add('correctAns');
              return true;
            } else {
              parentNode.classList.add('wrongAns');
            }
          });
        } else {
          parentNode.classList.remove('correctAns', 'wrongAns');
        }
      });
      if (correctTimes === cAnsLen && selected.length === cAnsLen) {
        for (let i = 0; i < checkedPosition.length; i++) {
          checkboxGroup[checkedPosition[i]].parentNode.classList.add('correctAns');
        }
        disableEles(checkboxGroup);
      }
    }
  }
}
