const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  /*
    - Assim como no exercício 10, utilizei um array e a função Math.max() para
    facilitar futuras manutenções e aumentar a performance
  */

  const inputNumbers = document.querySelectorAll('input');

  let numbers = [];
  let message = '';

  inputNumbers.forEach(input => {
    numbers.push(parseFloat(Number(input.value)));
  });

  if(validNumericInputs(numbers, false)) {
    let higherTry = Math.max(...numbers);
    higherTry = higherTry.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    message = `A maior distância foi de ${higherTry}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
