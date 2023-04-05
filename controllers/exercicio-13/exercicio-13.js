const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const minutes  = parseInt(Number(form['minutes'].value));

  let message = '';

  if(validNumericInputs([minutes], false)) {
    let chargeAmount = 50;

    if(minutes > 100) {
      let addedMinutes = minutes - 100;

      chargeAmount += addedMinutes * 2;
    }

    chargeAmount = chargeAmount.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    message = `A quantidade a ser paga é de ${chargeAmount}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
