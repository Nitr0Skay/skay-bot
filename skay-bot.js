(function() {
  const botBox = createBotBox(document.body);
  const Gall = 'Anonim';
  const botName = 'Skay Bot';

  let name = '';
  let mail = '';

  greeting(botBox);

  let answerBox = document.querySelectorAll('.answerBox');
      answerBox[0].addEventListener('click', function(e) {
        if(e.target.innerHTML === 'Tak') {
          askName(e.target.parentElement, name);
        } else if(e.target.innerHTML === 'Nie') {
          name = Gall;
        }
      }, {
        // This part will remove this Event Listener after the first invocation
        once: true
      },false);
})();
