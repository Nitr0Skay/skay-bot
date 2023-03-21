import { EventHandler, sleep } from  './EventHandler.js';

export const User = function(name) {
  this.name = new String(name);
};

export const Bot = function(...args) {
  User.apply(this, args);
  this.surname = `Bot`,
  this.separator = `-`
};

Bot.prototype.saySomething = async function(content, parentElement) {
  const botElement = document.createElement(`b`);
        botElement.classList.add(`botName`);
        botElement.innerHTML = this.name + this.separator + this.surname;

  const botMessage = document.createElement(`p`);
        botMessage.classList.add(`botMessage`);
        botMessage.innerHTML = content;

  if(arguments[2]) botMessage.append(arguments[2]);

  const container = document.createElement(`div`);
        container.append(botElement, botMessage);

  await sleep(500);
  await parentElement.append(container);

  return this;
};

Bot.prototype.createAnswerBox = function(answers) {
    /* Creates a FlexBox Container with Answer Buttons */

    const answerContainer = document.createElement(`div`);
          answerContainer.classList.add(`answerBox`);
          answerContainer.style.display = `flex`;                                //Or style .answerBox in CSS

    for(let i = 0; i < answers.length; i++) {
      let button = document.createElement(`button`);
          button.innerHTML = answers[i];
          answerContainer.append(button);
    }

    return answerContainer;
};

Bot.prototype.createChatBox = function(parentElement) {
  /* Creates the Box element where the Bot has something to Say */

  const botBox = document.createElement(`aside`);
        botBox.setAttribute(`class`, `botBox`);
        botBox.setAttribute(`id`, `botBox`);

  const container = parentElement;
        container.prepend(botBox);

  const drag = (e) => {
    botBox.style.top = e.pageY + `px`;
    botBox.style.left = e.pageX + `px`;
  };

  EventHandler(botBox, `mousedown`, () => {
    // EventHandler(window, `mousemove`, drag);
    window.addEventListener(`mousemove`, drag);
  });

  EventHandler(window, `mouseup`, () => {
    window.removeEventListener(`mousemove`, drag);
  });

  return document.getElementById(botBox.id);
};

Bot.prototype.createHelpList = async function(parentElement) {

  let helpContent = await fetch(`./assets/helpContent.json`);
      helpContent = await helpContent.json();
      
  const contentList = document.createElement(`dl`);
        contentList.setAttribute(`id`, `helpList`);
        contentList.setAttribute(`class`, `helpList`);

    for (let term in helpContent) {
      await sleep(800);
      //helpContent[prop];

      const description = helpContent[term][0]
      const href = helpContent[term][1][0];
      const anchor = helpContent[term][1][1];
      const listElement = document.createElement(`dt`);
            listElement.append(term);

      contentList.append(listElement);

      for(let i = 0, a = document.createElement(`a`), dd = document.createElement(`dd`); i < helpContent[term].length; i++) {
        await sleep(200);
        //helpContent[prop][i];

        dd.append(description);
        a.href = href;
        a.innerHTML = anchor;
        a.setAttribute(`target`, `_blank`);
        dd = document.createElement(`dd`);
        dd.append(a);
        contentList.append(dd);
        parentElement.append(contentList);
        await sleep(200);
      }
    }
};

Bot.prototype.greeting = async function(parentElement) {
    /* Greeting the user and asking for permission to ask the name */
    /* If user accept, then activate function askName to get the User`s name */
    /* If not, then use Gall Variable of Anonim Value xD */
    /* https://en.wikipedia.org/wiki/Gallus_Anonymus */

    let paragraph = document.createElement(`p`);
    const divElement = document.createElement(`div`);
    const greetingText = `Witam Ciebie, drogi użytkowniku.`;
    const selfIntroduction = `Jestem Skay Bot, Twój osobisty Chat Bot`;
    const content = `Czy zechciałbyś podzielić się swoim imieniem, nim zaczniemy ?`;

    const answers = [`Tak`, `Nie`];
    this.answerBox = this.createAnswerBox(answers);

    parentElement.append(divElement);
    divElement.classList.add(`greeting`);
    divElement.append(paragraph);
    paragraph.append(greetingText);
    paragraph = document.createElement(`p`);
    divElement.append(paragraph);
    paragraph.append(selfIntroduction);
    await this.saySomething(`Jestem tu, aby Tobie pomóc.`, divElement);
    await this.saySomething(content, divElement);
    divElement.append(this.answerBox);

    return this;
};

Bot.prototype.sendHelp = async function(parentElement) {
      // Parent Element is basicly where that Help will be send;
      this.saySomething(new String(`Jak mogę Panu pomóc ? :D`), parentElement);
      this.saySomething(new String(`Poniżej podam listę pomocnych linków:`), parentElement);
      this.createHelpList(parentElement);
};

// Bot.prototype.askName = function(parentElement, removeElement) {
//   /* Create text input form for the User Name, then returns it */
//
//   const nameForm = document.createElement(`form`);
//         nameForm.classList.add(`nameForm`);
//
//   const nameLabel = document.createElement(`label`);
//         nameLabel.innerHTML = `Wpisz zatem swoję imię poniżej, proszę:`;
//         nameLabel.setAttribute(`for`, `imie`);
//
//   const nameInput = document.createElement(`input`);
//         nameInput.type = `text`;
//         nameInput.name = `imie`;
//         nameInput.id   = `imie`;
//
//   const submitName = document.createElement(`button`);
//         submitName.innerHTML = `Oto moje imię`;
//         submitName.id = `submitName`;
//       //   submitName.addEventListener(`click`, function(e) {
//       //     e.preventDefault();               //this prevents the form to submit form, which is default action, so we can stay at the same page after Name submit
//       //     removeElement.remove();
//       //     return nameInput.value;
//
//       // }, false);
//
//         nameForm.append(nameLabel, nameInput, submitName);
//         parentElement.append(nameForm);
// };

Bot.prototype.askAbout = async function(parentElement, question, answers) {
  const questionForm = document.createElement(`form`);
        questionForm.classList.add(`questionForm`);

  const questionLabel = document.createElement(`label`);
        questionLabel.innerHTML = `Wpisz zatem swoję imię poniżej, proszę:`;
        questionLabel.setAttribute(`for`, question);

  const answerInput = document.createElement(`input`);
        answerInput.type = `text`;
        answerInput.name = question;
        answerInput.id   = question;

  const submitAnswer = document.createElement(`button`);
        submitAnswer.innerHTML = `Odpowiedz`;
        submitAnswer.id = `submitButton`;

        questionForm.append(questionLabel, answerInput, submitAnswer);
        parentElement.append(questionForm);
}

Bot.prototype.getTheUserName = async function() {
      return new Promise((resolve, reject) => {
            //  Phase 2  -  Getting the Name

            // Initializing the context of this - we need that later in the Event Handler
            const Skay = this;

            EventHandler(Skay.answerBox, `click`, function(e) {
              const clickedButton = e.target;                    
              if(clickedButton.innerHTML === `Tak`) {
                  Skay.askAbout(clickedButton.parentElement, `name`, Skay.answerBox);
                  const nameSubmitButton = document.getElementById(`submitButton`);
                  EventHandler(nameSubmitButton, `click`, function(e) {
                    e.preventDefault();
                    resolve(document.getElementById(`name`).value);
                  }, false);
                } else if(e.target.innerHTML === `Nie`) {
                  resolve(Gall);
                }
              }, {
                useCapture: false,
                once: true
              });
          });
}