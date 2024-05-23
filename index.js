function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a === 0 | b === 0) return alert("Not so fast!")
        return a / b;
}

let operator;
let firstNumber;
let secondNumber;

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") return add(firstNumber, secondNumber);
    if (operator === "-") return subtract(firstNumber, secondNumber);
    if (operator === "x" || operator === "*") return multiply(firstNumber, secondNumber);
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
            document.querySelector(".decimal").disabled = false;
        } 
        if (e.target.className.includes("equals")) {
            secondNumber = Number(display.textContent);
            display.textContent = operate(operator, firstNumber, secondNumber);
        }
        if (e.target.className.includes("clear")) {
            document.querySelector(".decimal").disabled = false;
            display.textContent = "0";
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }
        if (display.textContent.includes(".")) {
            document.querySelector(".decimal").disabled = true;
        }
    });
});

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let operations = ["*", "-", "+", "/"];

document.querySelector("body").addEventListener("keyup", (e) => {
    console.log(e.key)
    if (display.textContent === "0") display.textContent = "";
    if (numbers.includes(e.key)) {
        display.textContent += e.key;
    }
    if (operations.includes(e.key)) {
        firstNumber = Number(display.textContent);
        operator = e.key;
        display.textContent = "0";
        document.querySelector(".decimal").disabled = false;
    }
    if (e.key === "Enter") {
        secondNumber = Number(display.textContent);
        display.textContent = operate(operator, firstNumber, secondNumber);
    }
    if (e.key === "Clear") {
        document.querySelector(".decimal").disabled = false;
        display.textContent = "0";
        firstNumber = "";
        secondNumber = "";
        operator = "";
    }
    if (e.key === ".") {
        document.querySelector(".decimal").disabled = true;
    }
});