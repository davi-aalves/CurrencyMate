const convertButton = document.querySelector(".convert-button");

function convertCurrency() {
	const inputCurrencyValue = document.querySelector(".input-currency").value;
	const currencyValueToBeConverted = document.querySelector(
		".currency-value-to-be-converted"
	);
	const currencyValueConverted = document.querySelector(".currency-value");

	const dolarToday = 4.9;

	const convertedValue = inputCurrencyValue / dolarToday;

	console.log(convertedValue);
}

convertButton.addEventListener("click", convertCurrency);
