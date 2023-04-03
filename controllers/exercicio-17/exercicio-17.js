const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstNumber  = parseInt(form['first-number'].value);
  const secondNumber  = parseInt(form['second-number'].value);

  let message = Number.isInteger((secondNumber / firstNumber)) ?
    `${secondNumber} é múltiplo de ${firstNumber}` :
    `${secondNumber} não é múltiplo de ${firstNumber}`

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
