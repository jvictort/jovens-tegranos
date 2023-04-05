const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const initialNumber  = parseInt(Number(form['initial-number'].value));
  const finalNumber  = parseInt(Number(form['final-number'].value));

  let message = '';

  if(validNumericInputs([initialNumber, finalNumber], true)) {
    let sumNumbers = 0;

    for(let i = initialNumber; i <= finalNumber; i++) {
      sumNumbers += i;
    }

    message = `A somatória entre ${initialNumber} e ${finalNumber} é de ${sumNumbers}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
