var app = {

  createElement: function(objParameter) {

    console.log('objParameter', objParameter);
    var element = document.createElement (objParameter.tagName);

    if (objParameter.inputType){
      element.setAttribute('type', objParameter.inputType);
    }

    if (objParameter.className){
      element.className = objParameter.className;
    }

    if (objParameter.content){
      element.innerHTML = objParameter.content;
    }

    if (objParameter.parentElement){
      objParameter.parentElement.appendChild(element);
    }

    return element;
  },

  generateQuestions: function(questionsAmount, answersAmount) {

    for (var i = 0; i < questionsAmount; i++) {

      this.createElement({
        tagName: 'h2',
        content: 'Вопрос №' + (i + 1),
        parentElement: form
      });

      for (var j = 0; j < answersAmount; j++) {

        var label = this.createElement({
          tagName: 'label',
          content: 'Вариант ответа №' + (j + 1),
          parentElement: form
        });

        var checkBox = this.createElement({
          tagName: 'input',
          inputType: 'checkbox'
        });

        label.insertAdjacentElement('afterBegin', checkBox);
      };

    };

  }

};

var body = document.querySelector('body');

app.createElement({
  tagName: 'h1',
  content: 'Тест по програмированию',
  parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  parentElement: body
});

app.generateQuestions(3, 3);

app.createElement({
  tagName: 'input',
  inputType: 'submit',
  content: 'Проверить мои результаты',
  parentElement: form
});
