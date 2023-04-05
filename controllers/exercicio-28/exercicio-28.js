const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Assim como no exercício 10, utilizei um array para facilitar manutenções futuras e aumentar a performance

  const inputNumbers = document.querySelectorAll('input');

  let numbers = [];
  let message = '';

  inputNumbers.forEach(inputNumber => {
    numbers.push(parseFloat(Number(inputNumber.value)));
  });

  if(validNumericInputs(numbers, true)) {
    let sortedNumbers = '';

    let maxNumber = Math.max(...numbers).toLocaleString('pt-br');
    let minNumber = Math.min(...numbers).toLocaleString('pt-br');

    message = `O maior número é ${maxNumber} e o menor número é ${minNumber}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números.';
  }

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>${message}</p>
  `

})
