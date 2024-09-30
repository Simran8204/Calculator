// Get references to the display and all buttons
const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

// Function to handle the AC (All Clear) button
document.getElementById('ac').addEventListener('click', () => {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '';
});

// Function to handle number button clicks
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.innerText;
        display.value = currentInput;
    });
});

// Function to handle decimal button
document.getElementById('decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
});

// Function to handle operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        }
        operator = button.getAttribute('data-op');
        currentInput = '';
    });
});

// Function to handle the modulo button
document.getElementById('modulo').addEventListener('click', () => {
    if (firstOperand === null) firstOperand = parseFloat(currentInput);
    operator = '%';
    currentInput = '';
});

// Function to handle the square button
document.getElementById('square').addEventListener('click', () => {
    if (currentInput !== '') {
        display.value = Math.pow(parseFloat(currentInput), 2);
        currentInput = display.value;
    }
});

// Function to calculate the result
document.getElementById('equals').addEventListener('click', () => {
    if (operator !== null && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    result = 'Error';
                } else {
                    result = firstOperand / secondOperand;
                }
                break;
            case '%':
                result = firstOperand % secondOperand;
                break;
        }

        display.value = result;
        firstOperand = result;
        currentInput = '';
        operator = null;
    }
});
document.getElementById('log').addEventListener('click', () => {
    if (currentInput !== '') {
        display.value = Math.log10(parseFloat(currentInput)); // log base 10
        currentInput = display.value;
    }
});

document.getElementById('ln').addEventListener('click', () => {
    if (currentInput !== '') {
        display.value = Math.log(parseFloat(currentInput)); // natural log (ln)
        currentInput = display.value;
    }
});

document.getElementById('sin').addEventListener('click', () => {
    if (currentInput !== '') {
        display.value = Math.sin(toRadians(parseFloat(currentInput)));
        currentInput = display.value;
    }
});

document.getElementById('cos').addEventListener('click', () => {
    if (currentInput !== '') {
        display.value = Math.cos(toRadians(parseFloat(currentInput)));
        currentInput = display.value;
    }
});

document.getElementById('tan').addEventListener('click', () => {
    if (currentInput !== '') {
        display.value = Math.tan(toRadians(parseFloat(currentInput)));
        currentInput = display.value;
    }
});

// Helper function to convert degrees to radians (since Math.sin, Math.cos, Math.tan work with radians)
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}