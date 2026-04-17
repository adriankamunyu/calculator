// Load history from local storage
let calculationHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];

// Current display value
let displayValue = "";

// Append number
function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

// Append operator
function appendOperator(operator) {
  if (displayValue === "") return;
  const lastChar = displayValue[displayValue.length - 1];
  if ("+-×÷".includes(lastChar)) {
    displayValue = displayValue.slice(0, -1);
  }
  displayValue += operator;
  updateDisplay();
}

// Update display
function updateDisplay() {
  document.getElementById("display").value = displayValue || "0";
}

// Clear display
function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

// Calculate result
function calculate() {
  if (displayValue === "") return;
  
  let expression = displayValue.replace(/×/g, "*").replace(/÷/g, "/");
  let result;
  try {
    result = eval(expression);
    result = Math.round((result + Number.EPSILON) * 1000000) / 1000000;
  } catch {
    result = "Error";
  }

  // Save to history
  calculationHistory.push(displayValue + " = " + result);
  localStorage.setItem("calcHistory", JSON.stringify(calculationHistory));
  updateHistory();

  displayValue = result.toString();
  updateDisplay();
}

// Update history panel
function updateHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = calculationHistory.join("<br>");
}

// Toggle history visibility
function toggleHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.classList.toggle("hidden");
  updateHistory();
}

// Clear calculation history
function clearHistory() {
  if(confirm("Are you sure you want to clear history?")) {
    calculationHistory = [];
    localStorage.removeItem("calcHistory");
    updateHistory();
  }
}

// Initialize history on load
updateHistory();