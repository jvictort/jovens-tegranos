const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const glucoseMeasure = parseFloat(form['glucose-measure'].value);

  let message = '';

  if(glucoseMeasure < 100) {
    message = 'O nível de glicose está normal';
  } else if(glucoseMeasure <= 140) {
    message = 'O nível de glicose está elevado';
  } else {
    message = 'O nível de glicose está muito elevado, o que significa que você está com diabetes.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
