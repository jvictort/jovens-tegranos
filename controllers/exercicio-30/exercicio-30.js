const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  /*
    - Tomei como padrão uma entrada de um número inteiro, já que o exercício não especificou
    o número de casas decimais para caso o número fosse decimal.
  */

  const unitsList = ['Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove'];
  const teenNumbers = ['Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'];
  const tensList = ['Dez', 'Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];

  let number = parseInt(form['number'].value);

  let message = '';

  if(number < 0) {
    message += 'Menos ';
    number = number * -1;
  }

  if(number <= 9) {
    message += unitsList[number];

  } else if(number == 10) {
    message += tensList[0];

  } else if(number <= 19) {
    let stringNumber = number.toString();
    message += teenNumbers[stringNumber[1] - 1];

  } else if(number <= 99) {
    let stringNumber = number.toString();

    if(stringNumber[1] == '0') {
      message += tensList[stringNumber[0] - 1];
    } else {
      message += tensList[stringNumber[0] - 1] + ' e ';
      message += unitsList[stringNumber[1]];
    }
  }

  message = message.charAt(0) + message.slice(1).toLowerCase();

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>${message}</p>
  `

});
