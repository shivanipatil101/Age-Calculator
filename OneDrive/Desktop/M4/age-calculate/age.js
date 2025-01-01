const calculateButton = document.getElementById('calculateButton');
const birthDateInput = document.getElementById('birthDate');
const yearsElement = document.getElementById('years');
const monthsElement = document.getElementById('months');
const daysElement = document.getElementById('days');

calculateButton.addEventListener('click', () => {
  const birthDateValue = birthDateInput.value;

  if (!birthDateValue) {
    alert('Please select a valid birth date!');
    return;
  }

  const birthDate = new Date(birthDateValue);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  yearsElement.textContent = years;
  monthsElement.textContent = months;
  daysElement.textContent = days;
});
