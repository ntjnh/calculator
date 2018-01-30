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
// Temporary answer variable
let holdAnswer = 0;

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
  } else if ((digit === "-" && num === "")) {
    num += digit;
    calc += digit;
  } else if (num === "-" && digit !== "-") {
    num += digit;
    calc += digit;
  } else if (num === "-" && digit === "-") {
    // don't do anything!!!
  } else {
    num += digit;
    calc += digit;
  }
  console.log(calcArr); // remove this line
  console.log(num); // remove this line
  answer.textContent = num;
  calculation.textContent = calc; 
}

// Operator function
function operator(op) {
  if (num && num !== "-") {
    // Add num to calc array 
    calcArr.push(Number(num));
    calcArr.push(op);
    // Add the first number to the result
    calc += op;
    calculation.textContent = calc;
    answer.textContent = op;
    num = "";
  } else if (holdAnswer) {
    num += holdAnswer;
    calc += holdAnswer;
    calcArr.push(holdAnswer);
    calcArr.push(op);
    calc += op;
    calculation.textContent = calc;
    answer.textContent = op;
    num = "";
    holdAnswer = 0;
  } else {
    if (op === "-") buildNumber(op);
  }
  
  console.log(calc); // remove this line
  console.log(calcArr); // remove this line
}

// Equals function
function equals() {
  console.log(`= pressed.`); // remove this line
  if (num && num !== "-") {
  calcArr.push(Number(num));
  calculate(calcArr);
  calc += "=" + result;
  calculation.textContent = calc;
  answer.textContent = result;
  console.log(calcArr); // remove this line
  // If continuing calculation after getting an answer
  holdAnswer = result;
  clear();
  } 
}

// Calculate the answer
function calculate(arr) {
  result = arr[0];
  for (let i = 1; i < arr.length; i += 2) {
    switch(arr[i]) {
      case "+": result += arr[i + 1];
        break;
      case "-": result -= arr[i + 1];
        break;
      case "/": result /= arr[i + 1];
        break;
      case "*": result *= arr[i + 1];
        break;
    }
    console.log(arr[i]);
  }
  console.log(`The answer is ${result}`); // remove this line
  return result;
}

// Clears all vars but without affecting screen
function clear() {
  console.clear(); // remove this line
  num = "";
  calc = "";
  calcArr = [];
  result = 0;
}

// AC button function
function clearAll() {
  console.clear(); // remove this line
  num = "";
  calc = "";
  calcArr = [];
  result = 0;
  holdAnswer = 0;
  answer.textContent = "0";
  calculation.textContent = "0";
}

// CE button function
function clearPrev() {
  if (num.length === 1) {
    num = "0";
    calc = "0";
  } else if (num.length > 1) {
    num = num.substring(0, num.length - 1);
    calc = calc.substring(0, calc.length - 1);
  }
  answer.textContent = num;
  calculation.textContent = calc;
}