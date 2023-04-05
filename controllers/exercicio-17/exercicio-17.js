const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstNumber  = parseInt(Number(form['first-number'].value));
  const secondNumber  = parseInt(Number(form['second-number'].value));

  let message = '';

  if(validNumericInputs([firstNumber, secondNumber], true)) {

    message = Number.isInteger((secondNumber / firstNumber)) ?
      `${secondNumber} é múltiplo de ${firstNumber}.` :
      `${secondNumber} não é múltiplo de ${firstNumber}.`

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
