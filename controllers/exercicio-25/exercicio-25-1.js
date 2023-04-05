const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  /*
       Na primeira maneira que encontrei de fazer esse exercício decidi utilizar uma estrutura de dados para diminuir
      a quantidade de if's utilizados.

      - A estrutura de dados possui os campos initialDate e finalDate, ambos arrays que contêm, respectivamente, dia e mês.

       Dessa forma é possível iterar neste objeto e fazer apenas uma condicional, deixando o código mais limpo e
      além disso permite manutenção para caso se deseje mudar os nomes dos signos, as datas ou até mesmo adicionar
      um novo campo como "descrição"
  */

  const signsObject = {
    'Áries': { initialDate: [21, 3], finalDate: [20, 4] },
    'Touro': { initialDate: [21, 4], finalDate: [20, 5] },
    'Gêmeos': { initialDate: [21, 5], finalDate: [20, 6] },
    'Câncer': { initialDate: [21, 6], finalDate: [22, 7] },
    'Leão': { initialDate: [23, 7], finalDate: [22, 8] },
    'Virgem': { initialDate: [23, 8], finalDate: [22, 9] },
    'Libra': { initialDate: [23, 9], finalDate: [22, 10] },
    'Escorpião': { initialDate: [23, 10], finalDate: [21, 11] },
    'Sagitário': { initialDate: [22, 11], finalDate: [21, 12] },
    'Capricórnio': { initialDate: [22, 12], finalDate: [20, 1] },
    'Aquário': { initialDate: [21, 1], finalDate: [18, 2] },
    'Peixes': { initialDate: [19, 2], finalDate: [20, 3] }
  }

  const dayNumber = parseInt(Number(form['day-number'].value));
  const monthNumber = parseInt(Number(form['month-number'].value));

  let message = '';

  if(dayNumber >= 1 && dayNumber <= 31 && monthNumber >= 1 && monthNumber <= 12) {
    let userSign = '';

    for(let sign in signsObject) {
      let initialDate = signsObject[sign].initialDate;
      let finalDate = signsObject[sign].finalDate;

      if(dayNumber >= initialDate[0] && monthNumber == initialDate[1] || dayNumber <= finalDate[0] && monthNumber == finalDate[1]) {
        userSign = sign;
      }
    }

    message = `Seu signo é ${userSign}.`;

  } else {
    message = 'Ocorreu um erro. Os campos aceitam dias de 1 a 31 e meses de 1 a 12.';
  }


  contentTitle.textContent = 'Resultado';

  contentResult.innerHTML = `
    <p>${message}</p>
  `

})
