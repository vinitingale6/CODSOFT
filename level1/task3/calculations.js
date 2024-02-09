let currentInput = '';
let isCalculating = false;

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculate() {
  if (!isCalculating) {
    isCalculating = true;
    try {
      if (currentInput.trim() !== '') {
        currentInput = eval(currentInput).toString();
      } else {
        currentInput = 'Error';
      }
    } catch (error) {
      currentInput = 'Error';
    }
    updateDisplay(); 
    setTimeout(() => {
      isCalculating = false;
    }, 500); // Disable for 500 milliseconds
  }
}

function updateDisplay() {
  document.getElementById('result').value = currentInput || '0';
}
