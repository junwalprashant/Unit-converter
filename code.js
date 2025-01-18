
const conversionRates = {
  meters: { meters: 1, kilometers: 0.001, feet: 3.28084, miles: 0.000621371 },
  kilometers: { meters: 1000, kilometers: 1, feet: 3280.84, miles: 0.621371 },
  feet: { meters: 0.3048, kilometers: 0.0003048, feet: 1, miles: 0.000189394 },
  miles: { meters: 1609.34, kilometers: 1.60934, feet: 5280, miles: 1 },
};

document.getElementById('convertButton').addEventListener('click', () => {
  const inputValue = parseFloat(document.getElementById('inputValue').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if (isNaN(inputValue)) {
    alert('Please enter a valid number.');
    return;
  }

  const result = inputValue * conversionRates[fromUnit][toUnit];
  document.querySelector('#result span').textContent = result.toFixed(4);
});
