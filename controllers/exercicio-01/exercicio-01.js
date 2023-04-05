const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const landWidth = parseFloat(Number(form['land-width'].value));
  const landLength = parseFloat(Number(form['land-length'].value));
  const meterPrice = parseFloat(Number(form['meter-price'].value));

  let message = '';

  if(validNumericInputs([landWidth, landLength, meterPrice], false)) {
    let landArea = (landWidth * landLength);
    let landPrice = (landArea * meterPrice);

    landArea = landArea.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    landPrice = landPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    message = `Área do terreno: ${landArea}m² <br>
               Preço do terreno: ${landPrice}`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
