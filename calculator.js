// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  // Check if dividing by zero
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

// Function to calculate based on operator
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

// Example usage
const num1 = 10;
const num2 = 5;
const operator = '+';

const result = calculate(num1, num2, operator);
console.log(`Result: ${result}`);