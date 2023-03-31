const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = form['name'].value;
  const hourValue = parseFloat(form['hour-value'].value);
  const workedHours = parseInt(form['worked-hours'].value);

  let total = (hourValue * workedHours).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>O pagamento para ${name} será de ${total}</p>
  `
})
