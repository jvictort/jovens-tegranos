const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstGrade = parseFloat(Number(form['first-grade'].value));
  const secondGrade = parseFloat(Number(form['second-grade'].value));

  let message = '';

  if(validNumericInputs([firstGrade, secondGrade], false)) {
    let finalGrade = (firstGrade + secondGrade);
    finalGrade = finalGrade.toLocaleString('pt-br', {minimumFractionDigits: 1, maximumFractionDigits: 1});

    if(finalGrade < 60.0) {
      message = `O aluno obteve a nota final de ${finalGrade} e foi reprovado.`;
    } else {
      message = `O aluno obteve a nota final de ${finalGrade} e foi aprovado.`;
    }
  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números a partir de 0.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
