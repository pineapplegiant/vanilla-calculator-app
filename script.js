// Global Variables
let buffer = "0";
let total = 0;
let operator = "";

// The calculator input div
let input = document.getElementById("input");

// Update the screen to the current value
function reRender() {
  input.innerText = buffer;
}

// Clear everything to starting position
function clearScreen() {
  buffer = "0";
  total = 0;
  operator = null;
}

// Add/subtract, etc
function doOperation() {
  let intBuffer = parseInt(buffer);
  switch (operator) {
    case "+":
      total += intBuffer;
      break;
    case "-":
      total -= intBuffer;
      break;
    case "*":
      total *= intBuffer;
      break;
    default:
      total /= intBuffer;
      break;
  }
  buffer = total.toString();
  reRender();
}

// Handle if Symbol pressed
function handleSymbol(symbol) {
  switch (symbol) {
    case "C": {
      clearScreen();
      break;
    }
    case "←": {
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.slice(0, -1);
      }
      break;
    }
    case "=": {
      doOperation(); // Render the thing
      break;
    }
    default: {
      operator = symbol;
      total = parseInt(buffer);
      buffer = "0";
    }
  }
  reRender();
}
// Handle if Number pressed -> Just append
function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number; // Append number to screen
  }
}

// Handle button click event -> 1) Symbol 2) Number
function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  reRender();
}

// Watch for clicks on calculator
function runCalculator() {
  document.querySelector(".main").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      buttonClick(event.target.innerText);
    }
  });
}
// Call the calculator funccion
runCalculator();
