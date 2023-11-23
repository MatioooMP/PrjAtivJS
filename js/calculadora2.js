const num1 = document.formCalculadora.num1.value;
const num2 = document.formCalculadora.num2.value;
const operacao = document.formCalculadora.oper.value;
let resultado;

if (operacao == '+') {
    resultado = num1 + num2;
}

else if (operacao == '-') {
    resultado = num1 - num2;
}

else if(operacao == 'x'){
    resultado = num1*num2;
}

else if(operacao == '/'){
    resultado = num1/num2;
}


alert('O resultado da operação é ', resultado);

document.log('O resultado da operação é ')