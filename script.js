// Variables

let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let numHistory = false;

// Variable Query Selectors
const calcNum1 = document.querySelector(".calculator-num1");
const calcNum2 = document.querySelector(".calculator-num2");
const calcOperator = document.querySelector(".calculator-operator");
const calcResult = document.querySelector(".calculator-operation-result");

// Functions: Basic Math Operations

function addCalc(a,b) {return a+b;}
function subtractCalc(a,b) {return a-b;}
function multiplyCalc(a,b) {return a*b;}
function divideCalc(a,b) {return a/b;}
function modulusCalc(a,b) {return a%b;}

function operate(operator,num1,num2) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    if(operator=='add') {result = addCalc(a,b);} //add
    if(operator=='subtract') {result = subtractCalc(a,b);} //subtract
    if(operator=='multiply') {  result = multiplyCalc(a,b);} //multiply
    if(operator=='divide') {result = divideCalc(a,b);} //divide
    if(operator=='modulus') {result = modulusCalc(a,b);} //modulus
    result = parseFloat(result.toFixed(4));
    if(result!=='') {
        populateDisplay('result',result);
    }
    return result;
}

function populateDisplay(type,value) {
    if(type=='digit') {
        if(num2==''&&operator=='') {
            num1 += value;
            calcNum1.textContent += value;
        }
        else if(operator!='') {
            num2 += value;
            calcNum2.textContent += value;
        }
    }
    else if(type=='operator'){
        let symbol = convertToIcon(value);
        if(num1!=''&&num2==''){
            operator = value;
            calcOperator.textContent = symbol;
        }
        else if(num1!=''&&num2!=''&&operator!='') {
            console.log(num1,operator,num2);
            num1 = operate(operator,num1,num2);
            num2 = '';
            operator=value;
            calcOperator.textContent = symbol;
            calcNum2.textContent = ''
        }
    }
    else if(type=='result') {
        calcResult.textContent = result;
    }
}

function convertToIcon(value) {
    if(value=='add') {return '+'} //add
    if(value=='subtract') {return '-'} //subtract
    if(value=='multiply') {return '×'} //multiply
    if(value=='divide') {return '÷'} //divide
    if(value=='modulus') {return '%'} //modulus
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
            if(num1!=''&&num2!=''&&operator!='') {
                operate(operator,num1,num2);
            }
        }
        else if(type=='clear'){

        }
        else if(type=='all-clear'){

        }
    });
});
