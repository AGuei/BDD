/* eslint-env jasmine, browser, webextensions, amd */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    factory(
      require('../addResultToTextArea')
    );
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      'addResultToTextArea'
    ], factory);
  } else {
    // Browser globals
    factory(root.addResultToTextArea);
  }
}(this, function factory (addResultToTextArea) {
  describe('Add Array data to TextAreaNode', () => {
    const addNodeId = 'resultOfGetQuestionsNumbers';
    const parrentNodeId = 'container';
    beforeAll(() => {
      let parrentNode = document.createElement('div');
      parrentNode.id = 'container';
      document.body.appendChild(parrentNode);
    });
    describe('if data is Array', () => {
      const dataArray = ['1.', '2.', '3.', '4.'];
      const dataArray2 = ['2.', '3.', '4.'];
      it('should append a textarea node to a given id node', () => {
        addResultToTextArea(dataArray, addNodeId, parrentNodeId);
        let textAreaDom = document.querySelector('#' + addNodeId);
        let parrentNode = document.querySelector('#' + parrentNodeId);
        expect(textAreaDom.id).toEqual(addNodeId);
        expect(textAreaDom.value.split(/\n/m)).toEqual(dataArray);
        expect(parrentNode).toBe(textAreaDom.parentNode);
      });
      it('should replace a textarea node to a given id node', () => {
        addResultToTextArea(dataArray2, addNodeId, parrentNodeId);
        let textAreaDom = document.querySelector('#' + addNodeId);
        let parrentNode = document.querySelector('#' + parrentNodeId);
        textAreaDom = document.querySelector('#' + addNodeId);
        expect(textAreaDom.value.split(/\n/m)).toEqual(dataArray2);
        expect(parrentNode.firstChild.value.split(/\n/m)).toEqual(dataArray2);
        expect(parrentNode.firstChild.value.split(/\n/m)).not.toEqual(dataArray);
        addResultToTextArea(dataArray, addNodeId, parrentNodeId);
        textAreaDom = document.querySelector('#' + addNodeId);
        expect(textAreaDom.value.split(/\n/m)).toEqual(dataArray);
        expect(parrentNode.childNodes.length).toBe(1);
        expect(parrentNode.firstChild.value.split(/\n/m)).toEqual(dataArray);
        expect(parrentNode.firstChild.value.split(/\n/m)).not.toEqual(dataArray2);
      });
      describe('if data is Object Array and have choices property', () => {
        const dataObjArray = [
          {
            choices: ['sssss', 'kdddd', 'dddddd', 'ffffff']
          },
          {
            choices: ['aaaaa', 'kcccc', 'rrrrrr', 'gggggg']
          }, {
            choices: ['wwwww', 'khhhh', 'nnnnnn', 'jjjjjj']
          }
        ];
        const dataObjArray2 = [
          {
            choices: ['lllll', 'uuuuu', 'yyyyy', 'ttttt']
          },
          {
            choices: ['zzzzz', 'xxxxx', 'vvvvv', 'mmmmm']
          }
        ];
        it('should append a textarea node to a given id node', () => {
          addResultToTextArea(dataObjArray, addNodeId, parrentNodeId);
          let textAreaDom = document.querySelector('#' + addNodeId);
          let parrentNode = document.querySelector('#' + parrentNodeId);
          expect(textAreaDom.id).toEqual(addNodeId);
          expect(textAreaDom.value.split(/\n\n/m)[0].split(/\n/m)).toEqual(dataObjArray[0].choices);
          expect(textAreaDom.value.split(/\n\n/m)[1].split(/\n/m)).toEqual(dataObjArray[1].choices);
          expect(parrentNode).toBe(textAreaDom.parentNode);
        });
        it('should replace a textarea node to a given id node', () => {
          addResultToTextArea(dataObjArray2, addNodeId, parrentNodeId);
          let textAreaDom = document.querySelector('#' + addNodeId);
          let parrentNode = document.querySelector('#' + parrentNodeId);
          expect(textAreaDom.value.split(/\n\n/m)[0].split(/\n/m)).toEqual(dataObjArray2[0].choices);
          expect(parrentNode.firstChild.value.split(/\n\n/m)[0].split(/\n/m)).toEqual(dataObjArray2[0].choices);
          expect(parrentNode.firstChild.value.split(/\n\n/m)[1].split(/\n/m)).not.toEqual(dataObjArray[0].choices);
          addResultToTextArea(dataObjArray, addNodeId, parrentNodeId);
          textAreaDom = document.querySelector('#' + addNodeId);
          expect(textAreaDom.value.split(/\n\n/m)[0].split(/\n/m)).toEqual(dataObjArray[0].choices);
          expect(parrentNode.childNodes.length).toBe(1);
          expect(parrentNode.firstChild.value.split(/\n\n/m)[0].split(/\n/m)).toEqual(dataObjArray[0].choices);
          expect(parrentNode.firstChild.value.split(/\n\n/m)[1].split(/\n/m)).not.toEqual(dataObjArray2[1].choices);
        });
      });
    });
  });
}));
