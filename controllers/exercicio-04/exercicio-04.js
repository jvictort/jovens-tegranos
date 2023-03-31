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

  let finalMessage = changePrice < 0 ? 'O preço final da compra é maior do que o dinheiro recebido' :
                                  `O troco será de ${changePrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${finalMessage}</p>
  `
})
