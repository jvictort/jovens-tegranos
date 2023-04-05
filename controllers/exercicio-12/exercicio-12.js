const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const aCoefficient  = parseInt(Number(form['a-coefficient'].value));
  const bCoefficient = parseInt(Number(form['b-coefficient'].value));
  const cCoefficient = parseInt(Number(form['c-coefficient'].value));

  let message = '';

  if(validNumericInputs([aCoefficient, bCoefficient, cCoefficient], true)) {
    let deltaValue = ((bCoefficient ** 2) - 4 * aCoefficient * cCoefficient);

    if(deltaValue >= 0) {
      let firstRoot = (((-bCoefficient) + Math.sqrt(deltaValue)) / (aCoefficient * 2));
      firstRoot = firstRoot.toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});

      let secondRoot = (((-bCoefficient) - Math.sqrt(deltaValue)) / (aCoefficient * 2));
      secondRoot = secondRoot.toLocaleString('pt-br', {minimumFractionDigits: 4, maximumFractionDigits: 4});

      message = `As raízes da equação são ${firstRoot} e ${secondRoot}.`;

    } else {
      message = 'A equação não possui raízes reais.';
    }

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
