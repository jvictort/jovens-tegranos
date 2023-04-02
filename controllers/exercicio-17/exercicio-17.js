const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstNumber  = parseInt(form['first-number'].value);
  const secondNumber  = parseInt(form['second-number'].value);
 
  let message = Number.isInteger((secondNumber / firstNumber)) ? 'Os números são múltiplos' : 'Os números não são múltiplos';

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
