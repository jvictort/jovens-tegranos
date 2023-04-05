const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  let seconds = parseInt(Number(form['seconds'].value));

  let message = '';

  if(validNumericInputs([seconds], false)) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(((seconds / 3600) - hours) * 60);
    seconds = Math.round(((((seconds / 3600) - hours) * 60) - minutes) * 60);

    let time = `${hours}:${minutes}:${seconds}`;

    message = `O tempo é de ${time}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
