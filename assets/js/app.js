let button = document.querySelector("button");
let input = document.querySelector("#home-currency-amount");
let foreignAmount = document.querySelector(".foreign-currency-amount");
let foreignCode = document.querySelector(".foreign-currency-code");
let homeCode = document.querySelector(".home-currency-code");
let foreignList = document.querySelector(".foreign-currency-name");
let homeList = document.querySelector(".home-currency-name");
const LATEST_RATE_ENDPOINT =
  "http://data.fixer.io/api/latest?access_key=88600c0e4185a70a4036141ebbfa5eb8";
const SYMBOLS_ENDPOINT =
  "http://data.fixer.io/api/symbols?access_key=88600c0e4185a70a4036141ebbfa5eb8";

// ====================== ROTATE BUTTON ============================0x
button.addEventListener("click", (e) => {
  e.target.classList.toggle("rotate");
});

// ====================== OUTPUT OF THE CONVERSION EUR -> USD or X ===============
fetch(LATEST_RATE_ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    button.addEventListener("click", () => {
      if (input.value > 0) {
        // foreignAmount.textContent = (input.value * data.rates.USD).toFixed(2);

        // data.rates.SELECTED CURRENCY instead of USD:
        foreignAmount.textContent = (input.value * data.rates[foreignCode.textContent]).toFixed(2);
      }
    });
  });

fetch(SYMBOLS_ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    // Populating Foreign Currency Select foreignList List
    let option;
    for (el in data.symbols) {
      option = document.createElement("option");
      option.textContent = data.symbols[el];

      foreignList.add(option);
      foreignList.addEventListener(
        "change",
        () =>
          // CHANGE FOREIGN CURRENCY CODE:
          foreignCode.textContent = Object.keys(data.symbols)[foreignList.selectedIndex]
      );
    }
    // DONT REPEAT YOURSELF / FIX THIS:
    for (el in data.symbols) {
      option = document.createElement("option");
      option.textContent = data.symbols[el];

      homeList.add(option);
      homeList.addEventListener(
        "change",
        () =>
          // CHANGE home CURRENCY CODE:
          homeCode.textContent = Object.keys(data.symbols)[homeList.selectedIndex]
      );
    }

    for (let el = 0; el < Object.keys(data.symbols).length; el++) {
      option.value = Object.keys(data.symbols)[el];
    }

    foreignCode.textContent = Object.keys(data.symbols)[foreignList.selectedIndex]
    homeCode.textContent = Object.keys(data.symbols)[homeList.selectedIndex]
  });
