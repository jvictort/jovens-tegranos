const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const word = form['word'].value;

  let message = '';
  let reversedWord = '';

  let plainWord = word.toLowerCase().replaceAll(' ', '');

  let wordList = plainWord.split('').reverse();

  reversedWord = wordList.toString().replaceAll(',', '');

  message = reversedWord == plainWord ? `A palavra ${word} é palíndroma` : `A palavra ${word} não é palíndroma`;

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>${message}</p>
  `

})
