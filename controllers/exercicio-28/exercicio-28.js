const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Assim como no exercício 10, utilizei um array para facilitar manutenções futuras e aumentar a performance

  const inputNumbers = document.querySelectorAll('input');

  let numbers = [];
  let sortedNumbers = '';

  inputNumbers.forEach(inputNumber => {
    numbers.push(parseFloat(inputNumber.value));
  })

  let maxNumber = Math.max(...numbers).toLocaleString('pt-br');
  let minNumber = Math.min(...numbers).toLocaleString('pt-br');

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>O maior número é ${maxNumber} e o menor número é ${minNumber}</p>
  `

})
