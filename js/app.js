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
  // If decimal button is pressed
  if (digit === ".") {
    // if there's no number, put a 0 in front of the decimal
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

  if (!digitLength(num)) {
    answer.textContent = num;
    calculation.textContent = calc; 
  } else {
    digitLimit();
  }
}

// Operator function
function operator(op) {
  // if there is a number and it's not just a "-"
  if (num && num !== "-" && num[num.length - 1] !== ".") {
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
    // If !num && operator is "-", build a negative number
    if (op === "-" && num[num.length - 1] !== ".") buildNumber(op);
  }
}

// Equals function
function equals() {
  if (num && num !== "-" && num[num.length - 1] !== ".") {
    calcArr.push(Number(num));
    // if calcArr ends with ["/", 0], then display "Error", "Division by Zero"
    if (calcArr[calcArr.length - 1] === 0 && calcArr[calcArr.length - 2] === "/") {
      zeroDivision();
      return;
    }
    calculate(calcArr);
    // If result has more than 12 digits
    if (digitLength(result)) {
      // If it's a decimal
      if (decimalCheck(result)) {
        result = decimalRound(result);
        console.log("result in decimalCheck: " + result); // remove this
        // Check digit count again
        if (digitLength(result)) {
          digitLimit();
        } else {
          calc += "=" + result;
          calculation.textContent = calc;
          if (calc.length > 25) calculation.style.overflow = "auto";
          answer.textContent = result;
          // If continuing calculation after getting an answer
          holdAnswer = result;
          clear();
        }
      } else {
        digitLimit();
      }
    // If result has less than 12 digits
    } else if (!digitLength(result)) {
      console.log("less than 12");
      calc += "=" + result;
      calculation.textContent = calc;
      if (calc.length > 25) calculation.style.overflow = "auto";
      answer.textContent = result;
      // If continuing calculation after getting an answer
      holdAnswer = result;
      clear();
    }
  } 
}

// Calculate the answer
function calculate(arr) {
  result = arr[0];
  // Loop through every 2nd element (operator) in the calc array
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
  }
  return result;
}

// Clears all vars but without affecting screen
function clear() {
  num = "";
  calc = "";
  calcArr = [];
  result = 0;
}

// AC button function
function clearAll() {
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
  if (num.length === 1 || (!num && !calc)) {
    clearAll();
  } else if (num.length >= 2) {
    num = num.substring(0, num.length - 1);
    calc = calc.substring(0, calc.length - 1);
    answer.textContent = num;
    calculation.textContent = calc;
  }
}

// Check if a number has more than 12 digits
function digitLength(n) {
  return (n.length > 12 || n.toString().length > 12) ? true : false;
}

// For use when digitLength returns true
function digitLimit() {
  clearAll();
  calculation.textContent = "Digit Limit Met";
}

// Check if a number is a decimal number
function decimalCheck(n) {
  return n % 1 > 0 && n % 1 < 1;
}

// Round a decimal down to 2 decimal points
function decimalRound(n) {
  return Number(n.toFixed(2));
}

// Division by zero error function
function zeroDivision() {
  clear();
  answer.textContent = "Error";
  calculation.textContent = "Division by Zero";
}