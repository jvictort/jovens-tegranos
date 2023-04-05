const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const glucoseMeasure = parseFloat(Number(form['glucose-measure'].value));

  let message = '';

  if(validNumericInputs([glucoseMeasure], false)) {
    if(glucoseMeasure <= 100) {
      message = 'O nível de glicose está normal.';
    } else if(glucoseMeasure <= 140) {
      message = 'O nível de glicose está elevado.';
    } else {
      message = 'O nível de glicose está muito elevado, o que significa que você está com diabetes.';
    }

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
