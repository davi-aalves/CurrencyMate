const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertCurrency() {
	const inputCurrencyValue = document.querySelector(".input-currency").value;
	const currencyValueToBeConverted = document.querySelector(
		".currency-value-to-be-converted"
	);
	const currencyValueConverted = document.querySelector(".currency-value");

	const dolarToday = 4.9;
	const euroToday = 5.9;

	if (currencySelect.value == "dolar") {
		currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(inputCurrencyValue / dolarToday);
	}
	if (currencySelect.value == "euro") {
		currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
			style: "currency",
			currency: "EUR",
		}).format(inputCurrencyValue / euroToday);
	}

	currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(inputCurrencyValue);
}

function changeCurrency() {
	const currencyName = document.getElementById("currency-name");
	const currencyImage = document.querySelector(".currency-img");

	if (currencySelect.value == "dolar") {
		currencyName.innerHTML = "Dólar americano";
		currencyImage.src = "./assets/images/dollar.png";
	}
	if (currencySelect.value == "euro") {
		currencyName.innerHTML = "Euro";
		currencyImage.src = "./assets/images/euro.png";
	}

	convertCurrency();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);
