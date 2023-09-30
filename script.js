let text = ""; // running text line from user's input
/* Show running text line on screen */
function showOnScreen(event) {
  text += event.target.innerHTML; // add innerHTML to running text line
  document.querySelector("h1").append(event.target.innerHTML); // append inner html to h1 element
}

/* Clear screen display */
function clearScreen() {
  text = ""; // reset running text line
  document.querySelector("h1").innerHTML = ""; // reset inner html of h1 element
}

/* Calculate result from running text line */
function calcResult() {
  let operators = []; // an array dedicated to operators from text
  for (let op of text) {
    if (op == "+" || op == "-" || op == "*" || op == "/") {
      // if any char in text equals operator
      operators.push(op); // push operator to array
    }
  }
  let numbers = text.split(/[-+*/]/); // separates text into numbers when operator is present

  let total = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (operators[i] == "-") {
      total -= numbers[i + 1];
    }
    if (operators[i] == "+") {
      total = parseInt(total) + parseInt(numbers[i + 1]); // need to parse b/c it appends rather than calc
    }
    if (operators[i] == "*") {
      total *= numbers[i + 1];
    }
    if (operators[i] == "/") {
      total /= numbers[i + 1];
    }
  }
  document.querySelector("h1").innerHTML = total; // show result on screen
}
