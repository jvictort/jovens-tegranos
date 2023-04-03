const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const circleRadius = parseFloat(form['circle-radius'].value);

  let circleArea = (Math.PI * (circleRadius ** 2));

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>A área da circunferência é de ${circleArea.toLocaleString('pt-br', {minimumFractionDigits: 3, maximumFractionDigits: 3})}</p>
  `
})
