const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstTry  = parseFloat(form['first-try'].value);
  const secondTry  = parseFloat(form['second-try'].value);
  const thirdTry  = parseFloat(form['third-try'].value);
 
  /*
    - Assim como no exercício 10, a solução convencional seria com if's encadeados. 
    Preferi, contudo, utilizar a função Math.max() pois ela permite um código limpo, 
    de fácil manutenção e de fácil compreensão. 
  */

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>A maior distância foi de ${Math.max(firstTry, secondTry, thirdTry).toLocaleString('pt-br')}</p>
  `
})
