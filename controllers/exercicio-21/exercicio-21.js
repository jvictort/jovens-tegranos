const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const initialNumber  = parseInt(Number(form['initial-number'].value));

  contentTitle.textContent = 'Resultado';

  if(validNumericInputs([initialNumber], false)) {
    contentResult.innerHTML = `
      <p>Os números pares de 1 à ${initialNumber} é:</p>
    `;

    for(let i = 1; i <= initialNumber; i++) {
      if(i % 2 == 0) {
        contentResult.innerHTML += `
          <p>${i}</p>
        `
      }
    }
  } else {
    contentResult.innerHTML = `
      <p>Ocorreu um erro</p>
      <p>Os campos aceitam apenas números a partir de 1.</p>
    `;
  }
})
