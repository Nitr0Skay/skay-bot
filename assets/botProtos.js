Bot.prototype.saySomething = function(content, parentElement){
  const botElement = document.createElement('b');
        botElement.classList.add('botName');
        botElement.innerHTML = this.name + this.separator + this.surname;

  const botMessage = document.createElement('p');
        botMessage.classList.add('botMessage');
        botMessage.innerHTML = content;
        botMessage.style.display = 'inline-block';                              //Or style .botMessage in CSS

  const container = document.createElement('div');
        container.append(botElement, botMessage);
        parentElement.append(container);

        return this;
};

Bot.prototype.createChatBox = function(parentElement) {
  /* Creates the Box element where the Bot has something to Say */

  const botBox = document.createElement('aside');
        botBox.setAttribute('class', 'botBox');
        botBox.setAttribute('id', 'botBox');

  const container = parentElement;
        container.prepend(botBox);

  return document.getElementById(botBox.id);
};

Bot.prototype.greeting = function(parentElement) {
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
    this.saySomething(content, divElement);
    divElement.append(createAnswerBox(answers));
};
