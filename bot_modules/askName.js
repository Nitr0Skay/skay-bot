export default function(parentElement, removeElement) {
  /* Create text input form for the User Name, then returns it */

  const nameForm = document.createElement('form');
        nameForm.classList.add('nameForm');

  const nameLabel = document.createElement('label');
        nameLabel.innerHTML = 'Wpisz zatem swoję imię poniżej, proszę:';
        nameLabel.setAttribute('for', 'imie');

  const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = 'imie';
        nameInput.id   = 'imie';

  const submitName = document.createElement('button');
        submitName.innerHTML = 'Oto moje imię';
        submitName.id = 'submitName';
      //   submitName.addEventListener('click', function(e) {
      //     e.preventDefault();               //this prevents the form to submit form, which is default action, so we can stay at the same page after Name submit
      //     removeElement.remove();
      //     return nameInput.value;

      // }, false);

        nameForm.append(nameLabel, nameInput, submitName);
        parentElement.append(nameForm);
};
