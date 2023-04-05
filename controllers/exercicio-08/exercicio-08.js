const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstMeasure = parseFloat(Number(form['first-measure'].value));
  const secondMeasure = parseFloat(Number(form['second-measure'].value));
  const thirdMeasure = parseFloat(Number(form['third-measure'].value));

  let message = '';

  if(validNumericInputs([firstMeasure, secondMeasure, thirdMeasure], false)) {
    let squareArea = (firstMeasure ** 2);
    let triangleArea = ((firstMeasure * secondMeasure) / 2);
    let trapezeArea = (((firstMeasure + secondMeasure) * thirdMeasure) / 2);

    squareArea = squareArea.toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});
    triangleArea = triangleArea.toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});
    trapezeArea = trapezeArea.toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});

    message = `A área do quadrado é de ${squareArea}m² <br>
               A área do triângulo é de ${triangleArea}m² <br>
               A área do trapézio é de ${trapezeArea}m²`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
