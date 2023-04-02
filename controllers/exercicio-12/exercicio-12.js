const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const aCoefficient  = parseInt(form['a-coefficient'].value);
  const bCoefficient = parseInt(form['b-coefficient'].value);
  const cCoefficient = parseInt(form['c-coefficient'].value);
 
  let deltaValue = ((bCoefficient ** 2) - 4 * aCoefficient * cCoefficient);

  let message = '';

  if(deltaValue >= 0) {
    let firstRoot = (((-bCoefficient) + Math.sqrt(deltaValue)) / (aCoefficient * 2)).toLocaleString('pt-br', {minimumFractionDigits: 4});
    let secondRoot = (((-bCoefficient) - Math.sqrt(deltaValue)) / (aCoefficient * 2)).toLocaleString('pt-br', {minimumFractionDigits: 4});
    message = `As raízes da equação são ${firstRoot} e ${secondRoot}`;
  } else {
    message = 'A equação não possui raízes reais';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
