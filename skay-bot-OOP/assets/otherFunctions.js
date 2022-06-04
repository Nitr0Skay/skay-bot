function askName(parentElement, removeElement) {
  /* Create text input form for the User Name, then returns it */

  const nameForm = document.createElement('form');
        nameForm.classList.add('nameForm');

  const nameLabel = document.createElement('label');
        nameLabel.innerHTML = 'Wpisz zatem swoję imię poniżej, proszę:';
        nameLabel.setAttribute('for', 'imie');

  const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = 'imie';
        nameInput.id   = 'imie';

  const submitName = document.createElement('button');
        submitName.innerHTML = 'Oto moje imię';
        submitName.id = 'submitName';
        submitName.addEventListener('click', function(e) {
          e.preventDefault();                 //this prevents the form to submit form, which is default action, so we can stay at the same page after Name submit
          removeElement.remove();
          return Promise.resolve(nameInput.value);
      }, false);

        nameForm.append(nameLabel, nameInput, submitName);
        parentElement.append(nameForm);
}

function createAnswerBox(answers) {
    /* Creates a FlexBox Container with Answer Buttons */

    const answerContainer = document.createElement('div');
          answerContainer.classList.add('answerBox');
          answerContainer.style.display = 'flex';                                //Or style .answerBox in CSS

    for(let i = 0; i < answers.length; i++) {
      let button = document.createElement('button');
          button.innerHTML = answers[i];
          answerContainer.append(button);
    }

    return answerContainer;
}

function createBotBox(parentElement) {
    /* Creates the Box element where the Bot has something to Say */

    const botBox = document.createElement('aside');
          botBox.setAttribute('class', 'botBox');
          botBox.setAttribute('id', 'botBox');

    const container = parentElement;
          container.prepend(botBox);

    return document.getElementById(botBox.id);
}

function greeting(parentElement) {
    /* Greeting the user and asking for permission to ask the name */
    /* If user accept, then activate function askName to get the User's name */
    /* If not, then use Gall Variable of Anonim Value xD */
    /* https://en.wikipedia.org/wiki/Gallus_Anonymus */

    const divElement = document.createElement('div');
    let paragraph = document.createElement('p');
    const greetingText = 'Witam Ciebie, drogi użytkowniku.';
    const selfIntroduction = 'Jestem Skay Bot. Twój osobisty Chat Bot';
    const content = 'Czy zechciałbyś podzielić się swoim imieniem, nim zaczniemy ?';

    const answers = ['Tak', 'Nie'];

    parentElement.append(divElement);
    divElement.classList.add('greeting');
    divElement.append(paragraph);
    paragraph.append(greetingText);
    paragraph = document.createElement('p');
    divElement.append(paragraph);
    paragraph.append(selfIntroduction);
    saySomething(content, divElement);
    divElement.append(createAnswerBox(answers));
}

function saySomething(content, parentElement) {
    const botElement = document.createElement('b');
          botElement.classList.add('botName');
          botElement.innerHTML = 'Skay Bot: ';

    const botMessage = document.createElement('p');
          botMessage.classList.add('botMessage');
          botMessage.innerHTML = content;
          botMessage.style.display = 'inline-block';                              //Or style .botMessage in CSS

    const container = document.createElement('div');
          container.append(botElement, botMessage);
          parentElement.append(container);
}
