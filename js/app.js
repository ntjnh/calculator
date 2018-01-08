const answer = document.querySelector(".answer");
const showCalc = document.querySelector(".calculation");

/* ========== Input collection Variables ========== */

// String that puts a number together between operator presses
let num = "";
// Calculation string to be displayed in showCalc
let calc = "";
// Result - the answer to whatever the calculation is
let result = 0;

/* ========== Buttons ========== */

// Number buttons
const numberButtons = document.getElementsByClassName("number"); 

// Add click event to each button
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {

  });
}

// Operator buttons
const operatorButtons = document.getElementsByClassName("operator");

// Add click event to each operator button
for (let j = 0; j < operatorButtons.length; j++) {
  operatorButtons[j].addEventListener("click", () => {

  });
}

// Equals
const equals = document.getElementById("equals");
equals.addEventListener("click", () => {

});

// AC button - clears calculations and sets the screen element values back to 0
const ac = document.getElementById("ac");
ac.addEventListener("click", () => {
  num = "";
  calc = "";
  result = 0;
  answer.textContent = 0;
  showCalc.textContent = result;
});

// CE button - clears last entry
const ce = document.getElementById("ce");
ce.addEventListener("click", () => {
  
});