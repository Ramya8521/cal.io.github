let display = document.getElementById('display');
let clearButtonPressed = false;

function appendToDisplay(value) {
    if (clearButtonPressed) {
        display.value = '';
        clearButtonPressed = false;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
        clearButtonPressed = true;
    } catch (error) {
        display.value = 'Error';
    }
}
