const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  const underWeightMsg = document.querySelector("#under-weight").innerHTML;
  const normalRangeMsg = document.querySelector("#normal-range").innerHTML;
  const overweightMsg = document.querySelector("#Overweight").innerHTML;

  // Validation checks
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let category = "";

  if (bmi < 18.6) {
    category = underWeightMsg;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = normalRangeMsg;
  } else {
    category = overweightMsg;
  }

  // Display BMI result along with all messages
  results.innerHTML = `
    <strong> BMI: ${bmi}</strong><br>

    <h3>Category: ${category}</h3>
  `;
});
