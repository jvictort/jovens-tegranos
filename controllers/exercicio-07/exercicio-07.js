const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const distance = parseFloat(form['distance'].value);
  const spentFuel = parseFloat(form['spent-fuel'].value);

  let avarageCost = (distance / spentFuel).toLocaleString('pt-br', {minimumFractionDigits: 3, maximumFractionDigits: 3});

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>O consumo médio foi de ${avarageCost}</p>
  `
})
