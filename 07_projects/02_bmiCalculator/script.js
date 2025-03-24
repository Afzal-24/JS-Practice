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
    results.innerHTML = `⚠️ Please enter a valid height.`;
    results.classList.add("show-results");
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `⚠️ Please enter a valid weight.`;
    results.classList.add("show-results");
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let category = "";

  if (bmi < 18.6) {
    category = `<span style="color: #f39c12;">${underWeightMsg}</span>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = `<span style="color: #2ecc71;">${normalRangeMsg}</span>`;
  } else {
    category = `<span style="color: #e74c3c;">${overweightMsg}</span>`;
  }

  // Display BMI result
  results.innerHTML = `
    <h2>Your BMI: ${bmi}</h2>
    <h3>Category: ${category}</h3>
  `;
  results.classList.add("show-results");
});
