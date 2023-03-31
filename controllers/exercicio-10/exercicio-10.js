const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstNumber = parseInt(form['first-number'].value);
  const secondNumber = parseInt(form['second-number'].value);
  const thirdNumber = parseInt(form['third-number'].value);

  /*
    - A solução convencional seria com if's encadeados. Preferi, contudo, utilizar a função Math.min()
    pois ela permite um código limpo, de fácil manutenção e de fácil compreensão. 
  */

  let message = `O menor número é ${Math.min(firstNumber, secondNumber, thirdNumber)}`;

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
