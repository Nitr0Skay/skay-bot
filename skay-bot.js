(function() {
  const botBox = createBotBox(document.body);
  const Gall = 'Anonim';
  const botName = 'Skay Bot';

  let name = '';
  let mail = '';

  greeting(botBox);

  const answerBox = document.querySelectorAll('.answerBox');
        /*answerBox[0].addEventListener('click', function(e) {
          if(e.target.innerHTML === 'Tak') {
            askName(e.target.parentElement, this);
          } else if(e.target.innerHTML === 'Nie') {
            name = Gall;
            this.remove();
          }
        }, {
          // addEventListener Options
          // This part will remove this Event Listener after the first invocation
          once: true,
          capture: false
        });*/

  const promise = new Promise((resolve, reject) => {
    answerBox[0].addEventListener('click', function(e) {
      if(e.target.innerHTML === 'Tak') {
        name = askName(e.target.parentElement, this);
        console.log(name);
      } else if(e.target.innerHTML === 'Nie') {
        name = Gall;
        this.remove();
      }
      resolve(name);
    }, {
      // addEventListener Options
      // This part will remove this Event Listener after the first invocation
      once: true,
      capture: false
    });
  });

  promise.then((name) => {
    saySomething(('Imię to ' + name), botBox);
  });

})();
