const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

form.addEventListener('submit', event => {
  event.preventDefault();

  let seconds = parseInt(form['seconds'].value);

  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(((seconds / 3600) - hours) * 60);
  seconds = Math.round(((((seconds / 3600) - hours) * 60) - minutes) * 60)

  let time = `${hours}:${minutes}:${seconds}`;


  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>O tempo é de ${time}</p>
  `
})
