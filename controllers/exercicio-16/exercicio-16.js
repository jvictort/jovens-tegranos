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

  inputNumbers.forEach(input => {
    numbers.push(parseFloat(input.value));
  });

  let higherTry = Math.max(...numbers).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>A maior distância foi de ${higherTry}</p>
  `
})
