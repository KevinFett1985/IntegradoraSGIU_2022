function num7() {
    document.calculadora.ans.value += '7';
}
function num8() {
    document.calculadora.ans.value += '8';
}
function num9() {
    document.calculadora.ans.value += '9';
}
function num1() {
    document.calculadora.ans.value += '1';
}
function num2() {
    document.calculadora.ans.value += '2';
}
function num3() {
    document.calculadora.ans.value += '3';
}
function num4() {
    document.calculadora.ans.value += '4';
}

function num5() {
    document.calculadora.ans.value += '5';
}

function num6() {
    document.calculadora.ans.value += '6';
}
function num0() {
    document.calculadora.ans.value += '0';
}
function punto(){
    document.calculadora.ans.value += '.';
}
function borrar(){
    document.calculadora.ans.value = '';
}
function igual(){
    document.calculadora.ans.value=eval(document.calculadora.ans.value);
}
function mult() {
    document.calculadora.ans.value += '*';
}
function div() {
    document.calculadora.ans.value += '/';
}
function sum() {
    document.calculadora.ans.value += '+';
}
function resta() {
    document.calculadora.ans.value += '-';
}
function porcentaje() {
    document.calculadora.ans.value =eval(document.calculadora.ans.value/100);
}