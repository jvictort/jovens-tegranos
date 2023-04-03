const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstGrade = parseFloat(form['first-grade'].value);
  const secondGrade = parseFloat(form['second-grade'].value);

  let finalGrade = (firstGrade + secondGrade);

  let message = '';

  if(finalGrade < 60.0) {
    message = `O aluno obteve a nota final de ${finalGrade.toLocaleString('pt-br', {minimumFractionDigits: 1, maximumFractionDigits: 1})} e foi reprovado`
  } else {
    message = `O aluno obteve a nota final de ${finalGrade.toLocaleString('pt-br', {minimumFractionDigits: 1, maximumFractionDigits: 1})} e foi aprovado`
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
