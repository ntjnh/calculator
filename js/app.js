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

// Operator buttons
const operatorButtons = document.getElementsByClassName("operator");

// Equals
const equals = document.getElementById("equals");

// AC button - clears calculations and sets the screen element values back to 0
const ac = document.getElementById("ac");

// CE button - clears last entry
const ce = document.getElementById("ce");