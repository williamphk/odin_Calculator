let mainDisplay = document.getElementById("mainDisplay");
let subDisplay = document.getElementById("subDisplay");

let num1 = 0; //answer
let num2 = ""; //display
let sign = "=";

function operate(operator) {
  if (operator != "=" && sign === "=") {
    console.log("operator1", num1, num2, sign);
    sign = operator;
    num1 = Number(mainDisplay.innerHTML);
    num2 = "";
    subDisplay.innerHTML += `${sign}`;
  } else if (operator == "=") {
    console.log("operator2", num1, num2, sign);
    switch (sign) {
      case "+":
        subDisplay.innerHTML = "";
        add();
        break;
      case "-":
        subDisplay.innerHTML = "";
        subtract();
        break;
      case "x":
        subDisplay.innerHTML = "";
        multiply();
        break;
      case "÷":
        subDisplay.innerHTML = "";
        divide();
        break;
    }
    num2 = "";
    sign = operator;
  } else {
    console.log("operator3", num1, num2, sign);
    switch (sign) {
      case "+":
        if (subDisplay.innerHTML.indexOf("+") > -1) {
          subDisplay.innerHTML += ``;
        } else {
          subDisplay.innerHTML += `${sign}`;
        }
        break;
      case "-":
        if (subDisplay.innerHTML.indexOf("-") > -1) {
          subDisplay.innerHTML += ``;
        } else {
          subDisplay.innerHTML += `${sign}`;
        }
        break;
      case "x":
        if (subDisplay.innerHTML.indexOf("x") > -1) {
          subDisplay.innerHTML += ``;
        } else {
          subDisplay.innerHTML += `${sign}`;
        }
        break;
      case "÷":
        if (subDisplay.innerHTML.indexOf("÷") > -1) {
          subDisplay.innerHTML += ``;
        } else {
          subDisplay.innerHTML += `${sign}`;
        }
        break;
    }
    num2 = "";
    sign = operator;
  }
}

function add() {
  num1 += Number(num2);
  if (String(num1).length > 10) {
    console.log("add1", num1, num2, sign);
    mainDisplay.innerHTML = Number(String(num1).substring(0, 11));
  } else {
    console.log("add2", num1, num2, sign);
    mainDisplay.innerHTML = num1;
    console.log("add2e", num1, num2, sign);
  }
}

function subtract() {
  num1 -= Number(num2);
  mainDisplay.innerHTML = num1;
}

function multiply() {
  num1 *= Number(num2);
  if (String(num1).length > 10) {
    console.log("multiplay1", num1, num2, sign);
    mainDisplay.innerHTML = String(num1).substring(0, 11);
  } else {
    console.log("multiplay2", num1, num2, sign);
    mainDisplay.innerHTML = num1;
    console.log("multiplay2e", num1, num2, sign);
  }
}

function divide() {
  if (num1 == "0" && num2 == "0") {
    mainDisplay.innerHTML = "Undefined";
  } else if (num2 == "0") {
    mainDisplay.innerHTML = "Cannot divide by 0";
  } else {
    num1 /= Number(num2);
    if (String(num1).length > 10) {
      console.log("divide1", num1, num2, sign);
      mainDisplay.innerHTML = String(num1).substring(0, 11);
    } else {
      console.log("divide2", num1, num2, sign);
      mainDisplay.innerHTML = num1;
    }
  }
}

function displayNum(x) {
  console.log("displayNum", num1, num2, sign);
  if (num2.length > 10) return;
  else {
    if (x === "." && num2.indexOf(".") > -1) return;
    if (x == 0 && num2 === "0.") {
      num2 = num2 + x;
      mainDisplay.innerHTML = num2;
    } else if (num2 === "0" && x == 0) return;
    else if (x === "." && num2 === "") {
      num2 = 0;
      subDisplay.innerHTML = num2;
      num2 = num2 + x;
      mainDisplay.innerHTML = num2;
    } else {
      num2 = num2 + x;
      mainDisplay.innerHTML = num2;
    }
    subDisplay.innerHTML += `${x}`;
  }
}

function reset() {
  console.log("reset", num1, num2, sign);
  num1 = 0;
  num2 = "";
  sign = "=";
  mainDisplay.innerHTML = 0;
  subDisplay.innerHTML = "";
}
