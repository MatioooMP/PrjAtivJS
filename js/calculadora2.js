/*console.log(document.querySelector('#numero1').value);

console.log(document.getElementById('numero1').value);

console.log(document.getElementsByTagName('input')[0].value);

console.log(document.getElementsByClassName('form-input')[0].value);*/

function Calcular(){
const primeironumero = parseFloat(document.formCalculadora.num1.value);
const segundonumero = parseFloat(document.formCalculadora.num2.value);
const operacao = document.formCalculadora.oper.value;
let resultado;

if (operacao == '+') {
    resultado = primeironumero + segundonumero;
}

else if (operacao == '-') {
    resultado = primeironumero - segundonumero;
}

else if(operacao == 'x'){
    resultado = primeironumero*segundonumero;
}

else if(operacao == '/'){
    resultado = primeironumero/segundonumero;
}


alert('O resultado da operação é: '+resultado);

document.log('O resultado da operação é: ', resultado);

document.write('O resultado da operação é:', resultado);
}