const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstMeasure = parseFloat(form['first-measure'].value);
  const secondMeasure = parseFloat(form['second-measure'].value);
  const thirdMeasure = parseFloat(form['third-measure'].value);

  let squareArea = (firstMeasure ** 2).toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});
  let triangleArea = ((firstMeasure * secondMeasure) / 2).toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});
  let trapezeArea = (((firstMeasure + secondMeasure) * thirdMeasure) / 2).toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4})

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>A área do quadrado é de ${squareArea}m²</p>
    <p>A área do triângulo é de ${triangleArea}m²</p>
    <p>A área do trapézio é de ${trapezeArea}m²</p>
  `
})
