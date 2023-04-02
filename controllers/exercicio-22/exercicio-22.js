const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const initialNumber  = parseInt(form['initial-number'].value);

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>A tabuada de ${initialNumber} do 1 ao 10 é:</p>
  `

  for(let i = 1; i <= 10; i++) {
    contentResult.innerHTML += `
      <p>${initialNumber} x ${i} = ${initialNumber * i}</p>
    `
  }
})
