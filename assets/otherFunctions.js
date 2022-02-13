function createAnswerBox(...answers) {
    const answerContainer = document.createElement('div');
    answerContainer.classList.add('answerBox');
    answerContainer.style.display = 'flex';          //Or style .answerBox in CSS
    answerContainer.appendChild(...answers);
}

function createBotBox(parentElement) {
    const container = parentElement;
    const botBox = document.createElement('div');
    botBox.className = 'botBox';
    botBox.setAttribute('id', 'botBox');
    container.prepend(botBox);

    return document.getElementById(botBox.id);
}

function greeting(parentElement) {
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
