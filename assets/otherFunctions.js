function createAnswerBox(...answers) {
    const answerContainer = document.createElement('div');
          answerContainer.classList.add('answerBox');
          answerContainer.style.display = 'flex';          //Or style .answerBox in CSS
          answerContainer.appendChild(...answers);
}

function createBotBox(parentElement) {
    /* Creates the Box element where the Bot has something to Say */

    const botBox = document.createElement('div');
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
    const paragraph = document.createElement('p');
    const greetingText = document.createTextNode(`Witam Ciebie, drogi użytkowniku. Czy zechciałbyś podzielić się
    swoim imieniem, nim zaczniemy ?`);

    const answers = [];

    parentElement.appendChild(divElement);
    divElement.appendChild(paragraph);
    paragraph.appendChild(greetingText);
    createAnswerBox(answers);
    divElement.classList.add('greeting');

}
