const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  const salary  = parseFloat(form['salary'].value);

  let newSalary;
  let increaseRate;
  let salaryIncrease;

  /*
    O exercício especifica da seguinte maneira:

    - Até R$ 999.00 -> 20%
    - Entre R$ 1000.00 e R$ 2999.00 -> 15%
    - Entre R$ 3000.00 e R$ 7999.00 -> 10%
    - Acima de R$ 8000.00 -> 05%

    No entanto não é dito o que fazer no caso de R$ 999.01 ... R$ 999.99. Portanto, tomei como
    iniciativa estender a taxa de 20% até R$ 999.99. O mesmo ocorre para os outros casos.
  */

  if(salary <= 999.99) {
    increaseRate = 0.20;
    salaryIncrease = salary * increaseRate;
    newSalary = salary + salaryIncrease;

  } else if(salary <= 2999.99) {
    increaseRate = 0.15;
    salaryIncrease = salary * increaseRate;
    newSalary = salary + salaryIncrease;

  } else if(salary <= 7999.99) {
    increaseRate = 0.10;
    salaryIncrease = salary * increaseRate;
    newSalary = salary + salaryIncrease;

  } else {
    increaseRate = 0.05;
    salaryIncrease = salary * increaseRate;
    newSalary = salary + salaryIncrease;
  }

  newSalary =  newSalary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  salaryIncrease = salaryIncrease.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  increaseRate = increaseRate.toLocaleString('pt-br', {style: 'percent'});

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>Novo salário: ${newSalary}</p>
    <p>Aumento: ${salaryIncrease}</p>
    <p>Porcentagem de aumento: ${increaseRate}</p>
  `
})
