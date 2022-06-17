export default function(parentElement) {
  /* Creates the Box element where the Bot has something to Say */

  const botBox = document.createElement('aside');
        botBox.setAttribute('class', 'botBox');
        botBox.setAttribute('id', 'botBox');

  const container = parentElement;
        container.prepend(botBox);

  return document.getElementById(botBox.id);
};
