export default function saySomething(content, parentElement){
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
}
