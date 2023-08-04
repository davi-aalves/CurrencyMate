const convertButton = document.querySelector(".convert-button");

function convertCurrency() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  console.log(inputCurrencyValue);
}

convertButton.addEventListener("click", convertCurrency);
