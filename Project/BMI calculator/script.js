const form = document.querySelector('form');

// this will give empty values

// const height = parseInt(document.querySelector('#height').value);
// console.log(height);

form.addEventListener('submit', function (e) {
  // cancel default actions
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  console.log(height);
  const weight = parseInt(document.querySelector('#weight').value);
  console.log(weight);

  const results = document.getElementById('results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results
    // results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML = `You are Under Weight, your BMI is ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `You are in Normal Range, your BMI is ${bmi}`;
    } else if (bmi > 24.9) {
      results.innerHTML = `You are Overweight, your BMI is ${bmi}`;
    }
  }
});
