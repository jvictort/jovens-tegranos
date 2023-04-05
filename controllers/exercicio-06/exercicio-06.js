const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const workerName = form['worker-name'].value;
  const hourValue = parseFloat(Number(form['hour-value'].value));
  const workedHours = parseInt(Number(form['worked-hours'].value));

  let message = '';

  if(validNumericInputs([hourValue, workedHours], false)) {
    let total = (hourValue * workedHours);
    total = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    message = `O pagamento para ${workerName} será de ${total}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
