let btns = document.querySelectorAll(".btn");
let para = document.querySelector("p");
let num1 = "", num2 = "", operator, result;

btns.forEach(btn => {
    btn.addEventListener("click", clickFunction);
});

function clickFunction() {
    const btnId = this.id;

    if (btnId === "C") {
        num1 = "";
        num2 = "";
        operator = undefined;
        para.innerHTML = "Calculated ans";
    } 
    else if (btnId === "=") {
        calculate();
    } 
    else if (["+","-","*","/","^","%","√"].includes(btnId)) {
        if (btnId === "√") {
            operator = btnId; 
            para.innerHTML = `${operator}`; 
        } else if (num1 !== "") {
            operator = btnId; 
            para.innerHTML = `${num1} ${operator}`; 
        }
    } 
    else {
        if (operator === "√") {
            num1 += btnId;  
            para.innerHTML = `${operator} ${num1}`; 
        } else if (operator === undefined) {
            num1 += btnId;  
            para.innerHTML = num1; 
        } else {
            num2 += btnId;
            para.innerHTML = `${num1} ${operator} ${num2}`; 
        }
    }
}

function calculate() {
    if (operator) {
        if (operator === "√" && num1 !== "") {
            num1 = parseFloat(num1);
            result = Math.sqrt(num1);
            para.innerHTML = `√ ${num1} = ${result}`; 
            resetCalculator();
            return;
        } 
        if (num2 !== "") {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        para.innerHTML = "Error: division by 0";
                        resetCalculator(); 
                        return;
                    }
                    result = num1 / num2;
                    break;
                case "^":
                    result = Math.pow(num1, num2);
                    break;
                case "%":
                let rem = num1 % num2;
                result=`Remainder is ${rem}`;
                    break;
            }
            para.innerHTML = `${num1} ${operator} ${num2} = ${result}`; 
            resetCalculator();
        }
    }
}

function resetCalculator() {
    num1 = result.toString(); 
    num2 = "";
    operator = undefined;
}