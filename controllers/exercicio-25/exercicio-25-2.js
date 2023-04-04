const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  /*
        Na segunda maneira que encontrei de fazer esse exercício decidi utilizar uma biblioteca chamada Signs.js, criada
       pelo João Victor Santana (https://github.com/VictorPubh/Signs-JS)

      - A função getSign() retorna o signo baseado em dois parâmetros sendo eles o dia e o mês de nascimento.
      Dessa maneira, o código fica bem mais limpo e toda lógica que envolve os Signos ficam separadas no arquivo signs.js

  */

  const dayNumber = form['day-number'].value;
  const monthNumber = form['month-number'].value;

  let userSign = getSign(dayNumber, monthNumber);

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>Seu signo é ${userSign}</p>
  `

})
