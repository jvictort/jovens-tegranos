const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const rectangleBase = parseFloat(Number(form['rectangle-base'].value));
  const rectangleHeight = parseFloat(Number(form['rectangle-height'].value));

  let message = '';

  if(validNumericInputs([rectangleBase, rectangleHeight], false)) {
    let rectangleArea = (rectangleBase * rectangleHeight);
    let rectanglePerimeter = ((rectangleBase + rectangleHeight) * 2);
    let rectangleDiagonal = (Math.sqrt((rectangleBase ** 2) + (rectangleHeight ** 2)));

    rectangleArea = rectangleArea.toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});
    rectanglePerimeter = rectanglePerimeter.toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});
    rectangleDiagonal = rectangleDiagonal.toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});

    message = `Área do retângulo: ${rectangleArea}m² <br>
               Perímetro do retângulo ${rectanglePerimeter}m <br>
               Diagonal do retângulo ${rectangleDiagonal}m`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
