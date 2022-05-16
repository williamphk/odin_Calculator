let mainDisplay = document.getElementById("mainDisplay");
let subDisplay = document.getElementById("subDisplay");

let num1_DEFAULT = 0;
let num2_DEFAULT = "";
let sign_DEFAULT = "=";

let num1 = num1_DEFAULT; //answer
let num2 = num2_DEFAULT; //display
let sign = sign_DEFAULT;

function operate(operator) {
  if (operator != "=" && sign === "=") {
    console.log("operator1", num1, num2, sign);
    sign = operator;
    num1 = Number(mainDisplay.innerHTML);
    num2 = num2_DEFAULT;
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
    num2 = num2_DEFAULT;
    sign = operator;
  } else {
    sign = operator;
    console.log("operator3", num1, num2, sign);
    switch (sign) {
      case "+":
        if (subDisplay.innerHTML.slice(-1) === "+") {
          subDisplay.innerHTML += ``;
        } else if (
          subDisplay.innerHTML.slice(-1) === "-" ||
          subDisplay.innerHTML.slice(-1) === "x" ||
          subDisplay.innerHTML.slice(-1) === "÷"
        ) {
          subDisplay.innerHTML = subDisplay.innerHTML.slice(0, -1);
          subDisplay.innerHTML += `${sign}`;
        } else {
          subDisplay.innerHTML += `${sign}`;
        }
        add();
        break;
      case "-":
        if (subDisplay.innerHTML.slice(-1) === "-") {
          subDisplay.innerHTML += ``;
        } else if (
          subDisplay.innerHTML.slice(-1) === "+" ||
          subDisplay.innerHTML.slice(-1) === "x" ||
          subDisplay.innerHTML.slice(-1) === "÷"
        ) {
          subDisplay.innerHTML = subDisplay.innerHTML.slice(0, -1);
          subDisplay.innerHTML += `${sign}`;
        } else {
          subDisplay.innerHTML += `${sign}`;
        }
        subtract();
        break;
      case "x":
        if (subDisplay.innerHTML.slice(-1) === "x") {
          subDisplay.innerHTML += ``;
          console.log("operator3x", num1, num2, sign);
        } else if (
          subDisplay.innerHTML.slice(-1) === "+" ||
          subDisplay.innerHTML.slice(-1) === "-" ||
          subDisplay.innerHTML.slice(-1) === "÷"
        ) {
          subDisplay.innerHTML = subDisplay.innerHTML.slice(0, -1);
          subDisplay.innerHTML += `${sign}`;
          console.log("operator3xx", num1, num2, sign);
        } else {
          subDisplay.innerHTML += `${sign}`;
          console.log("operator3xxx", num1, num2, sign);
          multiply();
        }
        break;
      case "÷":
        if (subDisplay.innerHTML.slice(-1) === "÷") {
          subDisplay.innerHTML += ``;
        } else if (
          subDisplay.innerHTML.slice(-1) === "+" ||
          subDisplay.innerHTML.slice(-1) === "-" ||
          subDisplay.innerHTML.slice(-1) === "x"
        ) {
          subDisplay.innerHTML = subDisplay.innerHTML.slice(0, -1);
          subDisplay.innerHTML += `${sign}`;
        } else {
          subDisplay.innerHTML += `${sign}`;
          divide();
        }
        break;
    }
    num2 = num2_DEFAULT;
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
  if (String(num1).length > 10) {
    console.log("multiplay1", num1, num2, sign);
    num1 *= Number(num2);
    mainDisplay.innerHTML = String(num1).substring(0, 11);
  } else if (num2 == "") {
    console.log("multiplay2", num1, num2, sign);
    num1 *= Number(num1);
    mainDisplay.innerHTML = num1;
  } else {
    console.log("multiplay3", num1, num2, sign);
    num1 *= Number(num2);
    mainDisplay.innerHTML = num1;
    console.log("multiplay3e", num1, num2, sign);
  }
}

function divide() {
  if ((num1 == "0" && num2 == "0") || (num1 == "0" && num2 == "")) {
    mainDisplay.innerHTML = "<font size='5'>Result is Undefined</font>";
  } else if (num2 == "0") {
    mainDisplay.innerHTML = "<font size='6'>Cannot divide by 0</font>";
  } else if (num2 == "") {
    num1 /= Number(num1);
    mainDisplay.innerHTML = num1;
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
  num1 = num1_DEFAULT;
  num2 = num2_DEFAULT;
  sign = sign_DEFAULT;
  mainDisplay.innerHTML = 0;
  subDisplay.innerHTML = "";
}

function deleteNum() {
  if (
    subDisplay.innerHTML.slice(-1) == "+" ||
    subDisplay.innerHTML.slice(-1) == "-" ||
    subDisplay.innerHTML.slice(-1) == "x" ||
    subDisplay.innerHTML.slice(-1) == "÷"
  ) {
    subDisplay.innerHTML = subDisplay.innerHTML.slice(0, -1);
    sign = sign_DEFAULT;
    console.log("delete1", num1, num2, sign);
  } else if (mainDisplay.innerHTML.length > 1) {
    mainDisplay.innerHTML = mainDisplay.innerHTML.slice(0, -1);
    subDisplay.innerHTML = subDisplay.innerHTML.slice(0, -1);
    num2 = num2.slice(0, -1);
    console.log("delete1", num1, num2, sign);
  } else {
    mainDisplay.innerHTML = 0;
    subDisplay.innerHTML = "";
    num2 = num2_DEFAULT;
    console.log("delete2", num1, num2, sign);
  }
}
