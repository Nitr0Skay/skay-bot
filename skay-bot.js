(function() {
  const botBox = createBotBox(document.body);
  const Gall = 'Anonim';

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

      //  this.removeEventListener('click');
      }, false);
})();
