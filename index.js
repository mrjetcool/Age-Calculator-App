const form = document.querySelector('form');
const output = document.querySelector('.output');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const today = new Date();
  const birthDate = new Date(`${form.year.value}-${form.month.value}-${form.day.value}`);
  const ageInMilliseconds = today - birthDate;
  const ageInDays = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24);
  const ageInMonths = Math.floor(ageInDays / 30);
  const ageInYears = Math.floor(ageInDays / 365);

  output.querySelector('#YY').textContent = ageInYears;
  output.querySelector('#MM').textContent = ageInMonths;
  output.querySelector('#DD').textContent = ageInDays;
});
