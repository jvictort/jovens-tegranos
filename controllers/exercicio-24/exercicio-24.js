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
    numbers.push(parseInt(Number(inputNumber.value)));
  });

  if(validNumericInputs(numbers, true)) {
    let sortedNumbers = '';

    // Função que ordena os números de forma crescente
    numbers.sort((a, b) => a > b);

    sortedNumbers = numbers.toString().replaceAll(',', ', ');

    message = `A ordem crescente será: ${sortedNumbers}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números.';
  }

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>${message}</p>
  `

})
