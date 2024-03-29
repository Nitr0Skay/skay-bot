import { EventHandler, sleep } from './assets/EventHandler.js';
import { Bot, User } from './assets/protos.js';

(function() {
  //  Phase 1  - Initialize
  const Skay = new Bot(`Skay`);
  const Gall = new String(`Anonim`);
  const botBox = Skay.createChatBox(document.body);
  let answerSet = null;

  Skay.greeting(botBox);
  const getTheName = Skay.getTheUserName(Skay.answerBox);

  getTheName.then(async (name) => {
    //  Phase 3  -  Rendering the Help List for the User
    const user = new User(name);
    const userContener = document.createElement(`u`);
          userContener.classList.add('userName');
          userContener.innerHTML = user.name;

    await Skay.answerBox.remove();
    await Skay.saySomething(new String(`Bardzo mi miło Ciebie poznać, panie `), botBox, userContener);

    if(name !== Gall) {
      answerSet = new Array(`Pewnie, przyda się`, `Raczej podziękuję`);
      await Skay.saySomething(new String(`Czy zapiszesz się na nasz newsletter ? Wystarczy tylko podać adres e-mail`), botBox);
      Skay.answerBox = Skay.createAnswerBox(answerSet);
      botBox.append(Skay.answerBox);
        const askAboutMail = new Promise((resolve, reject) => {
        EventHandler(Skay.answerBox, `click`, function(e) {
          Skay.askAbout(e.target.parentElement, `mail`, Skay.answerBox);

          if(e.target.innerHTML === answerSet[0]) {
              const nameSubmitButton = document.getElementById(`submitButton`);
              EventHandler(nameSubmitButton, `click`, function(e) {
                e.preventDefault();
                resolve(document.getElementById(`mail`).value);
              }, false);
            } else if(e.target.innerHTML === answerSet[1]) {
              resolve();
            }
          }, {
            useCapture: false,
            once: true
          });
        });

        askAboutMail.then(async (mail) => { console.log(mail);
          await Skay.answerBox.remove();
          await Skay.saySomething(new String(`Dziękujemy za zaufanie, panie `), botBox, userContener);
        });
  }

  await Skay.sendHelp(botBox);
});

})();