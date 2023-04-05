const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const unitPrice = parseFloat(Number(form['unit-price'].value));
  const productQuantify = parseInt(Number(form['product-quantify'].value));
  const moneyAmount = parseFloat(Number(form['money-amount'].value));

  let message = '';

  if(validNumericInputs([unitPrice, productQuantify, moneyAmount], false)) {
    let totalPrice = (productQuantify * unitPrice);
    let changePrice = (moneyAmount - totalPrice);

    if(changePrice < 0) {
      message = 'O preço final da compra é maior do que o dinheiro recebido.';
    } else {
      message = `O troco será de ${changePrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.`;
    }

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
