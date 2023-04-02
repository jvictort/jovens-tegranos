const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const inputNumbers = document.querySelectorAll('input');

  let numbers = [];
  let sortedNumbers = '';

  inputNumbers.forEach(inputNumber => {
    numbers.push(parseInt(inputNumber.value));
  })

  // Função que ordena os números de forma crescente
  numbers.sort((a, b) => a > b);
  
  sortedNumbers = numbers.toString().replaceAll(',', ', ');

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>A ordem crescente será: ${sortedNumbers}</p>
  `

})
