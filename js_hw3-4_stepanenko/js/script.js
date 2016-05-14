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
        tagName: 'h3',
        content: (i + 1) + '.  ' + 'Вопрос №' + (i + 1),
        parentElement: form
      });

      for (var j = 0; j < answersAmount; j++) {

        var label = this.createElement({
          tagName: 'label',
          className: 'checkbox',
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
body.className = 'container';

var wrapper = app.createElement({
  tagName: 'div',
  className: 'wrapper',
  parentElement: body
});

var header = app.createElement({
  tagName: 'header',
  parentElement: wrapper
});

app.createElement({
  tagName: 'h1',
  content: 'Тест по програмированию',
  parentElement: header
});

var form = app.createElement({
  tagName: 'form',
  parentElement: wrapper
});

app.generateQuestions(3, 3);

app.createElement({
  tagName: 'button',
  className: 'btn btn-default',
  content: 'Проверить мои результаты',
  parentElement: form
});
