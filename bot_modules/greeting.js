export default function(parentElement) {
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
    this.answerBox = this.createAnswerBox(answers);

    parentElement.append(divElement);
    divElement.classList.add('greeting');
    divElement.append(paragraph);
    paragraph.append(greetingText);
    paragraph = document.createElement('p');
    divElement.append(paragraph);
    paragraph.append(selfIntroduction);
    this.saySomething(content, divElement);
    divElement.append(this.answerBox);

    return this;
};
