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
            e.preventDefault();
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

  promise.then((name) => {
    const user = new User(name);

    Skay.answerBox.remove();
    Skay.saySomething(new String('Bardzo mi miło Ciebie poznać'), botBox);
    Skay.saySomething(new String('Jak mogę Tobie pomóc ? :D'), botBox);
    Skay.saySomething(new String('Poniżej podam listę pomocnych linków:'), botBox);
    Skay.createHelpList(botBox);
  });
})();
