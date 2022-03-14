function createAnswerBox(...answers) {
    /* Creates a FlexBox Container with Answer Buttons */

    const answerContainer = document.createElement('div');
          answerContainer.classList.add('answerBox');
          answerContainer.style.display = 'flex';                                //Or style .answerBox in CSS
          //answerContainer.appendChild(...answers);

    let button = [];
    for(let i = 0; i < answers.length; i++) {
      button[i] = document.createElement('button');
      button[i].innerHTML = answers[i];
      answerContainer.append(button[i]);
    }

    console.log(answerContainer);
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

    const answers = ['Tak', 'Nie'];

    parentElement.append(divElement);
    divElement.append(paragraph);
    divElement.classList.add('greeting');
    paragraph.append(greetingText);
    createAnswerBox(answers);

}
