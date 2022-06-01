(function() {
  const Gall = 'Anonim';
  const Skay = new Bot();
  const botBox = Skay.createChatBox(document.body);

  Skay.greeting(botBox);
  EventHandler(Skay.answerBox, 'click', function(e) {

  if(e.target.innerHTML === 'Tak') {
      Skay.askName(e.target.parentElement, Skay.answerBox);
    } else if(e.target.innerHTML === 'Nie') {
      name = Gall;
    }
  }, {
    useCapture: false,
    once: true
  });

})();
