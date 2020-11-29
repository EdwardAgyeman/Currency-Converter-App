const button = document.querySelector("button");
const input = document.querySelector("#home-currency-amount");
const foreignAmount = document.querySelector(".foreign-currency-amount");
const foreignCode = document.querySelector(".foreign-currency-code")
const LATEST_RATE_ENDPOINT = "http://data.fixer.io/api/latest?access_key=88600c0e4185a70a4036141ebbfa5eb8"
const SYMBOLS_ENDPOINT = "http://data.fixer.io/api/symbols?access_key=88600c0e4185a70a4036141ebbfa5eb8"


// ====================== OUTPUT OF THE CONVERSION EUR -> X ======================
fetch(LATEST_RATE_ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    button.addEventListener("click", () => {
      // data.rates.SELECTED CURRENCY instead of USD
      if(input.value > 0) {
        foreignAmount.textContent = (input.value * data.rates.USD).toFixed(2);
      } 
    });
  });

 
// ====================== ROTATE BUTTON ======================

button.addEventListener("click", (e) => {
  e.target.classList.toggle("rotate");
});


fetch(LATEST_RATE_ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    
    console.log(data);
  });


// Populating Foreign Currency Select Dropdown List
const dropdown = document.querySelector(".foreign-currency-name");
dropdown.length = 0;


// dropdown.selectedIndex = 0;


fetch(SYMBOLS_ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
      for (let el in data.symbols) {
        let option = document.createElement("option");
        option.textContent = data.symbols[el];
        console.log(option.textContent)
        option.value = data.symbols[el];
        dropdown.add(option);
      }
    });

// foreignCode.textContent = dropdown.selectedIndex
// console.log(dropdown.selectedIndex)