const display = document.getElementById("display");
let num1 = 0; //answer
let num2 = "0"; //display
let sign = "=";

function operate(operator) {
  if (operator != "=" && sign === "=") {
    sign = operator;
    num1 = Number(display.innerHTML);
    num2 = "0";
    console.log("operate", num1, num2, sign);
  } else {
    switch (sign) {
      case "+":
        add();
        break;
      case "-":
        subtract();
        break;
      case "x":
        multiply();
        break;
      case "÷":
        divide();
        break;
    }
    num2 = "0";
    sign = operator;
  }
}

function add() {
  num1 += Number(num2);
  display.innerHTML = num1;
  console.log("add", num1, num2, sign);
}

function subtract() {
  num1 -= Number(num2);
  display.innerHTML = num1;
  console.log("subtract", num1, num2, sign);
}

function multiply() {
  num1 *= Number(num2);
  display.innerHTML = num1;
}

function divide() {
  console.log("divide1", num1, num2, sign);
  if (num1 == "0" && num2 == "0") {
    display.innerHTML = "Result is undefined";
  } else if (num2 == "0") {
    display.innerHTML = "Cannot divide by zero";
  } else {
    num1 /= Number(num2);
    display.innerHTML = num1;
    console.log("divide2", num1, num2, sign);
  }
}

function displayNum(x) {
  if (num2.toString().length > 8) return;
  if (x === "." && num2.indexOf(".") > -1) return;
  num2 = num2 + x.toString();
  display.innerHTML = num2.replace(/^0[0]+/g, "0");
  console.log("displayNum", num1, num2, sign);
}

function reset() {
  num1 = 0;
  num2 = "0";
  sign = "=";
  display.innerHTML = 0;
}
