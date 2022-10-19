(function() {
  const Skay = new Bot(`Skay`);
  const Gall = new String(`Anonim`);
  const botBox = Skay.createChatBox(document.body);

  Skay.greeting(botBox);
  const promise = new Promise((resolve, reject) => {
    EventHandler(Skay.answerBox, `click`, function(e) {

      if(e.target.innerHTML === `Tak`) {
          Skay.askName(e.target.parentElement, Skay.answerBox);
          const nameSubmitButton = document.getElementById(`submitName`);
          EventHandler(nameSubmitButton, `click`, function(e) {
            e.preventDefault();
            resolve(document.getElementById(`imie`).value);
          }, false);
        } else if(e.target.innerHTML === `Nie`) {
          resolve(Gall);
        }
      }, {
        useCapture: false,
        once: true
      });
  });

  promise.then(async (name) => {
    const user = new User(name);
    const userContener = document.createElement(`u`);
          userContener.classList.add('userName');
          userContener.innerHTML = user.name;

    await Skay.answerBox.remove();
    await Skay.saySomething(new String(`Bardzo mi miło Ciebie poznać, panie `), botBox, userContener);
    await Skay.saySomething(new String(`Jak mogę Panu pomóc ? :D`), botBox);
    await Skay.saySomething(new String(`Poniżej podam listę pomocnych linków:`), botBox);
    await Skay.createHelpList(botBox);
  });
})();
