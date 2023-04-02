const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

const temperatureUnit = document.querySelector('#temperature-unit');

temperatureUnit.addEventListener('change', event => {
    const temperatureLabel = document.querySelector('#temperature-label');
    temperatureLabel.textContent = `°${event.target.value}`;
})

form.addEventListener('submit', event => {
  event.preventDefault();

  const temperatureMeasure  = parseFloat(form['temperature-measure'].value);
 
  let message = temperatureUnit.value == 'C' ? 
                `A temperatura equivalente em Fahrenheit é de °F ${((temperatureMeasure * 1.8) + 32).toLocaleString('pt-br', {maximumFractionDigits: 2})}` 
              : `A temperatura equivalente em Celsius é de °C ${((temperatureMeasure - 32) / 1.8).toLocaleString('pt-br', {maximumFractionDigits: 2})}`;

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
