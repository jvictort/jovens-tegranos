const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const minutes  = parseInt(form['minutes'].value);
 
  let chargeAmount = 50;

  if(minutes > 100) {
    let addedMinutes = minutes - 100;

    chargeAmount += addedMinutes * 2; 
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>A quantidade a ser paga é de ${chargeAmount.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
  `
})
