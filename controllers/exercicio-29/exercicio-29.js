const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Entrada: 97.544.324/0001-22
  const cnpjNumber = form['cnpj-number'].value;

  // Saída: 97544324000122
  let plainCnpj = cnpjNumber.replaceAll('.', '').replaceAll('/', '').replaceAll('-', '');
  let cnpjList = plainCnpj.substring(0, 12).split('');

  // Variáveis do primeiro e segundo dígito do CNPJ
  let firstDigit = 0;
  let secondDigit = 0;

  // Variáveis que controlam a somatória, o número da multiplicação dos termos do CNPJ e o resto da divisão
  let cnpjSum = 0;
  let cnpjTimes = 0;
  let remainderDivision = 0;

  // Calculando o primeiro dígito do CNPJ
  cnpjTimes = 6;

  cnpjList.forEach((number, index) => {
    cnpjTimes--;

    cnpjSum += number * (cnpjTimes);

    if(cnpjTimes <= 2) {
      cnpjTimes = 10;
    }
  });

  remainderDivision = cnpjSum % 11;
  firstDigit = remainderDivision < 2 ? firstDigit : 11 - remainderDivision;

  cnpjList.push(firstDigit);

  // Calculando o segundo dígito do CNPJ
  cnpjSum = 0;
  cnpjTimes = 7;

  cnpjList.forEach((number, index) => {
    cnpjTimes--;

    cnpjSum += number * (cnpjTimes);

    if(cnpjTimes <= 2) {
      cnpjTimes = 10;
    }
  });

  remainderDivision = cnpjSum % 11;
  secondDigit = remainderDivision < 2 ? secondDigit : 11 - remainderDivision;

  cnpjList.push(secondDigit);

  let validatedCnpj = cnpjList.toString().replaceAll(',', '');

  let message =  validatedCnpj == plainCnpj ? `O CNPJ ${cnpjNumber} é válido` : `O CNPJ ${cnpjNumber} é inválido`;

  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>${message}</p>
  `

});
