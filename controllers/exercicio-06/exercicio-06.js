const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const workerName = form['worker-name'].value;
  const hourValue = parseFloat(form['hour-value'].value);
  const workedHours = parseInt(form['worked-hours'].value);

  let total = (hourValue * workedHours).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>O pagamento para ${workerName} será de ${total}</p>
  `
})
