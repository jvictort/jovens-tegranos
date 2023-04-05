const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const initialNumber  = parseInt(Number(form['initial-number'].value));
  const finalNumber  = parseInt(Number(form['final-number'].value));

  let message = '';

  if(validNumericInputs([initialNumber, finalNumber], true)) {
    if(!(initialNumber > finalNumber)) {
      let oddSum = 0;

      for(let i = initialNumber; i < finalNumber; i++) {
        if(i % 2 != 0) {
          oddSum += i;
        }
      }

      message = `A soma dos números ímpares entre ${initialNumber} e ${finalNumber} é de ${oddSum}.`;

    } else {
      message = `O número inicial é maior do que o número final. Inverta sua ordem ou tente outros números.`;
    }

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números.';
  }

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>${message}</p>
  `

})
