const form = document.querySelector('form');

const contentTitle = document.querySelector('#content-title');
const contentResult = document.querySelector('#content-result');

const temperatureUnit = document.querySelector('#temperature-unit');

temperatureUnit.addEventListener('change', event => {
    const temperatureLabel = document.querySelector('#temperature-label');
    temperatureLabel.textContent = `°${event.target.value}`;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const temperatureMeasure  = parseFloat(Number(form['temperature-measure'].value));

  let message = '';

  if(validNumericInputs([temperatureMeasure], true)) {
    let convertedTemperature = '';

    if(temperatureUnit.value == 'C') {
      convertedTemperature = ((temperatureMeasure * 1.8) + 32);
      convertedTemperature = convertedTemperature.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});

      message = `A temperatura equivalente em Fahrenheit é de ${convertedTemperature} °F.`;
    } else {
      convertedTemperature = ((temperatureMeasure - 32) / 1.8);
      convertedTemperature = convertedTemperature.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});

      message = `A temperatura equivalente em Celsius é de ${convertedTemperature} °C.`;
    }

  } else {
    message = 'Ocorreu um erro. Os campos aceitam apenas números.';
  }

  contentTitle.textContent = 'Resultado';
  contentResult.innerHTML = `
    <p>${message}</p>
  `
})
