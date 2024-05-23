function add(a, b) {
    return Math.round(((a + b) * 100000000) / 100000000);
}

function subtract(a, b) {
    return Math.round(((a - b) * 100000000) / 100000000);
}

function multiply(a, b) {
    return Math.round(((a * b) * 100000000) / 100000000);
}

function divide(a, b) {
    if (a === 0 | b === 0) return alert("Not so fast!")
        return Math.round(((a / b) * 100000000) / 100000000);
}

let operator;
let firstNumber;
let secondNumber;

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") return add(firstNumber, secondNumber);
    if (operator === "-") return subtract(firstNumber, secondNumber);
    if (operator === "*") return multiply(firstNumber, secondNumber);
    if (operator === "/") return divide(firstNumber, secondNumber);
}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (display.textContent === "0") display.textContent = "";
        if (e.target.className.includes("number")) {
            display.textContent += e.target.innerText;
        } 
        if (e.target.className.includes("operator")) {
            firstNumber = Number(display.textContent);
            operator = e.target.innerText;
            display.textContent = "0";
        } 
        if (e.target.className.includes("equals")) {
            secondNumber = Number(display.textContent);
            display.textContent = operate(operator, firstNumber, secondNumber);
        }
        if (e.target.className.includes("clear")) {
            display.textContent = "0";
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }
    });
});
