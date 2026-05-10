//Q1. write 5 functions
//1.
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 6));
//2.
function divide(a, b) {
    return a / b;
}
console.log(divide(10, 5));
//3.
function add(a, b) {
    return a + b;
}
console.log(add(10, 5));
//4.
function sub(a, b) {
    return a - b;
}
console.log(sub(10, 5));
//5.
function greet(name) {
    return "hello " + name;
}
console.log(greet("emmanuel"));

//Q2.Build a Simple Calculator
function calculator(num1, num2, operator) {

    if (operator == "+") {
        return num1 + num2;
    }

    else if (operator == "-") {
        return num1 - num2;
    }

    else if (operator == "*") {
        return num1 * num2;
    }

    else if (operator == "/") {
        return num1 / num2;
    }

    else {
        return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "/"));
console.log(calculator(10, 5, "%"));

//Q3.Solve Conditionals
//voting age
let age = 25;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}