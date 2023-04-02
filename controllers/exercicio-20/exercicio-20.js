const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const initialNumber  = parseInt(form['initial-number'].value);
  const finalNumber  = parseInt(form['final-number'].value);

  let sumNumbers = 0;

  for(let i = initialNumber; i <= finalNumber; i++) {
    sumNumbers += i;
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>A somatória entre ${initialNumber} e ${finalNumber} é de ${sumNumbers}</p>
  `
})
