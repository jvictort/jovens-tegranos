const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const circleRadius = parseFloat(Number(form['circle-radius'].value));

  let message = '';

  if(validNumericInputs([circleRadius], false)) {
    let circleArea = (Math.PI * (circleRadius ** 2));
    circleArea = circleArea.toLocaleString('pt-br', {minimumFractionDigits: 3, maximumFractionDigits: 3});

    message = `A área da circunferência é de ${circleArea}`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
