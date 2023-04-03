const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const rectangleBase = parseFloat(form['rectangle-base'].value);
  const rectangleHeight = parseFloat(form['rectangle-height'].value);

  let rectangleArea = (rectangleBase * rectangleHeight).toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});
  let rectanglePerimeter = ((rectangleBase + rectangleHeight) * 2).toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});
  let rectangleDiagonal = (Math.sqrt((rectangleBase ** 2) + (rectangleHeight ** 2))).toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>Área do retângulo: ${rectangleArea}m²</p>
    <p>Perímetro do retângulo: ${rectanglePerimeter}m</p>
    <p>Diagonal do retângulo: ${rectangleDiagonal}m</p>
  `
})
