// Keypad
const keypad = document.querySelector(".keypad");

keypad.addEventListener("click", e => {
  switch(e.target.value) {
    case "ac": clearAll();
      break;
    case "ce": clearPrev();
      break;
    case "/":
    case "*":
    case "-":
    case "+":
      operator(e.target.value);
      break;
    case "=": equals();
      break;
    case ".":
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      buildNumber(e.target.value);
      break;
  }
});

const answer = document.querySelector(".answer");
const calculation = document.querySelector(".calculation");

// Put numbers together
let num = "";
// Calculation string
let calc = "";
// Calculation array
let calcArr = [];
// The answer
let result = 0;

// Number button function
function buildNumber(digit) {
  if (digit === ".") {
    if (!num) {
      num += "0" + digit;
      calc += "0" + digit;
    } else if(num[num.length - 1] !== ".") {
      num += digit;
      calc += digit;
    }
  } else {
    num += digit;
    calc += digit;
  }
  
  answer.textContent = num;
  calculation.textContent = calc; 
}

// Operator function
function operator(op) {
  if (num) {
    // Add num to calc array 
    calcArr.push(Number(num));
    calcArr.push(op);
    // Add the first number to the result
    calc += op;
    calculation.textContent = calc;
    answer.textContent = op;
    num = "";
  }
  
  console.log(calc); // remove this line
  console.log(calcArr); // remove this line
}