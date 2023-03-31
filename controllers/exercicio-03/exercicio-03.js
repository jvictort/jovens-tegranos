const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstName = form['first-name'].value;
  const secondName = form['second-name'].value;

  const firstAge = parseInt(form['first-age'].value);
  const secondAge = parseInt(form['second-age'].value);

  let avarageAge = ((firstAge + secondAge) / 2).toLocaleString('pt-br', {minimumFractionDigits: 1});

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>A idade média de ${firstName} e ${secondName} é de ${avarageAge} anos</p>
  `
})
