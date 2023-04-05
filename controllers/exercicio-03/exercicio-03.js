const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstName = form['first-name'].value;
  const secondName = form['second-name'].value;

  const firstAge = parseInt(Number(form['first-age'].value));
  const secondAge = parseInt(Number(form['second-age'].value));

  let message = '';

  if(validNumericInputs([firstAge, secondAge], false)) {
    let avarageAge = ((firstAge + secondAge) / 2);
    avarageAge = avarageAge.toLocaleString('pt-br', {minimumFractionDigits: 1, maximumFractionDigits: 1});

    message = `A média das idades de ${firstName} e ${secondName} é de ${avarageAge} anos.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
