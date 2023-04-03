const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const landWidth = parseFloat(form['land-width'].value);
  const landLength = parseFloat(form['land-length'].value);
  const meterPrice = parseFloat(form['meter-price'].value);

  let landArea = (landWidth * landLength);
  let landPrice = (landArea * meterPrice);

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>Área do terreno: ${landArea.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}m²</p>
    <p>Preço do terreno: ${landPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
  `
})
