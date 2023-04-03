const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const vowelsList = ['a', 'e', 'i', 'o', 'u'];

  const word = form['word'].value;

  let vowelNumber = 0;
  let consonantNumber = 0;

  letters = word.toLowerCase().split('');

  letters.forEach(letter => {
    if(vowelsList.includes(letter)) {
      vowelNumber++;
    } else {
      consonantNumber++;
    }
  });

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>O número de vogais é: ${vowelNumber}</p>
    <p>O número de consoantes é: ${consonantNumber}</p>
  `

})
