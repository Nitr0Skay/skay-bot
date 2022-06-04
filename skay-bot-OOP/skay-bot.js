(function() {
  const Skay = new Bot('Skay');
  const Gall = new String('Anonim');
  const botBox = Skay.createChatBox(document.body);

  Skay.greeting(botBox);
  const promise = new Promise((resolve, reject) => {
    EventHandler(Skay.answerBox, 'click', function(e) {
  
      if(e.target.innerHTML === 'Tak') {
          Skay.askName(e.target.parentElement, Skay.answerBox);
          const nameSubmitButton = document.getElementById('submitName');
          EventHandler(nameSubmitButton, 'click', function(e) {
            e.preventDefult;
            this.remove();
            resolve(document.getElementById('imie').value);
          }, false);
        } else if(e.target.innerHTML === 'Nie') {
          resolve(Gall);
        }
      }, {
        useCapture: false,
        once: true
      });
  });
  
  promise.then((resolve) => {
    const User = new Bot(resolve);
    console.log(User);
  });
})();
