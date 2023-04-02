const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const initialNumber  = parseInt(form['initial-number'].value);

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>Os números pares de 1 à ${initialNumber} é:</p>
  `

  for(let i = 1; i <= initialNumber; i++) {
    if(i % 2 == 0) {
      contentResult.innerHTML += `
        <p>${i}</p>
      `
    }
  }
})
