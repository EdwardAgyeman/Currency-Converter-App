const button = document.querySelector("button");
const input = document.querySelector("#home-currency-amount");
const output = document.querySelector(".foreign-currency-amount");

fetch(
  "http://data.fixer.io/api/latest?access_key=88600c0e4185a70a4036141ebbfa5eb8"
)
  .then((response) => response.json())
  // .then((data) => 
  // console.log(data.rates.USD))
  .then((data) => {
      button.addEventListener("click", () => {
          output.textContent = (input.value * data.rates.USD).toFixed(2)
      })
  }
      
  );

  button.addEventListener("click", (e) => {
    e.target.classList.toggle("rotate")
})