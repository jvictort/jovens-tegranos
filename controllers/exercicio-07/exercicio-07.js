const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const distance = parseFloat(Number(form['distance'].value));
  const spentFuel = parseFloat(Number(form['spent-fuel'].value));

  let message = '';

  if(validNumericInputs([distance, spentFuel], false)) {
    let avarageCost = (distance / spentFuel);
    avarageCost = avarageCost.toLocaleString('pt-br', {minimumFractionDigits: 3, maximumFractionDigits: 3});

    message = `O consumo médio foi de ${avarageCost}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
