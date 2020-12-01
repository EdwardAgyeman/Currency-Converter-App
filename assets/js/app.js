let button = document.querySelector("button");
let input = document.querySelector("#home-currency-amount");
let foreignAmount = document.querySelector(".foreign-currency-amount");
let foreignCode = document.querySelector(".foreign-currency-code");
let foreignList = document.querySelector(".foreign-currency-name");
const LATEST_RATE_ENDPOINT =
  "http://data.fixer.io/api/latest?access_key=88600c0e4185a70a4036141ebbfa5eb8";
const SYMBOLS_ENDPOINT =
  "http://data.fixer.io/api/symbols?access_key=88600c0e4185a70a4036141ebbfa5eb8";

// ====================== ROTATE BUTTON ======================
button.addEventListener("click", (e) => {
  e.target.classList.toggle("rotate");
});

// ====================== OUTPUT OF THE CONVERSION EUR -> USD or X ===============
fetch(LATEST_RATE_ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    button.addEventListener("click", () => {
      // data.rates.SELECTED CURRENCY instead of USD
      if (input.value > 0) {
        foreignAmount.textContent = (input.value * data.rates.USD).toFixed(2);
      }
      foreignList.selectedIndex = 3
    });
  });

fetch(SYMBOLS_ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    // Populating Foreign Currency Select foreignList List
    console.log(data);
    console.log(Object.keys(data.symbols).length);
    // for(let el = 0; el < Object.keys(data.symbols).length; el++) {
    for (el in data.symbols) {

      let option = document.createElement("option");
      option.textContent = data.symbols[el];
      console.log(data.symbols[el])
      // Working Solution:
      option.value = data.symbols[el];
      // option.value = Object.keys(data.symbols)[el];
      // console.log(Object.keys(data.symbols[el]))
      option.classList.add("test");
      foreignList.add(option);
      foreignList.addEventListener("change", () => 
      // FIND A WAY TO CHANGE THE INDEX:
      // foreignCode.textContent = Object.keys(data.symbols)[el]
      // Working Solution:
      foreignCode.textContent = foreignList.value
      )
    }



    
  });

  
