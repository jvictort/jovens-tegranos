const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const unitPrice = parseFloat(form['unit-price'].value);
  const productQuantify = parseInt(form['product-quantify'].value);
  const moneyAmount = parseFloat(form['money-amount'].value);

  let totalPrice = productQuantify * unitPrice;
  let changePrice = (moneyAmount - totalPrice);

  let message = '';

  if(changePrice < 0) {
    message = `Dinheiro insuficiente. Faltam ${(changePrice * -1).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
  } else {
    message = `O troco será de ${changePrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
