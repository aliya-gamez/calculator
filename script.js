// Variables

let num1 = '';
let num2 = '';
let operator = '';
let numHistory = false;
let operatorSelected = false;

// Variable Query Selectors
const calcNum1 = document.querySelector(".calculator-num1");
const calcNum2 = document.querySelector(".calculator-num2");
const calcOperator = document.querySelector(".calculator-operator");

// Functions: Basic Math Operations

function addCalc(a,b) {
    return a+b;
}

function subtractCalc(a,b) {
    return a-b;
}

function multiplyCalc(a,b) {
    return a*b;
}

function divideCalc(a,b) {
    return a/b;
}

function modulusCalc(a,b) {
    return a%b;
}

function operate(operator,a,b) {
    if(operator=='add') {addCalc(a,b);}
    else if(operator=='subtract') {subtractCalc(a,b);}
    else if(operator=='multiply') {multiplyCalc(a,b);}
    else if(operator=='divide') {divideCalc(a,b);}
}

function populateDisplay(type,value) {
    if(type=="digit") {
        if(!numHistory && !operatorSelected){
            num1 += value;
            calcNum1.textContent += value;
        }
        else if(!operatorSelected){
            
        }
    }
}

// Event Listeners: Buttons on Calculator
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const target = e.target;
        const type = target.dataset.type;
        const value = target.value;

        // Conditionals to point where each button goes into
        if(type=='digit'){
            populateDisplay(type,value);
        }
        else if(type=='operator'){
            populateDisplay(type,value);
        }
        else if(type=='calculate'){

        }
        else if(type=='clear'){

        }
        else if(type=='all-clear'){

        }
    });
});
