const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  /*
    - A solução convencional seria chamar os três campos individualmente. Preferi,
    contudo, utilizar um array pois dessa maneira consigo reduzir a quantidade
    de parâmetros para a função Math.min() e caso o projeto seja alterado e necessite
    de mais números, o código irá se manter funcional.
  */

  const inputNumbers = document.querySelectorAll('input');

  let numbers = [];

  inputNumbers.forEach(input => {
    numbers.push(parseInt(input.value));
  });

  /*
    - A solução convencional seria com if's encadeados. Preferi, contudo, utilizar a função Math.min()
    pois ela permite um código limpo, de fácil manutenção e de fácil compreensão.
  */

  let message = `O menor número é ${Math.min(...numbers)}`;

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
