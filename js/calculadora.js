let resultado;

let mensagem = 'O resultado da operação é';

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parsefloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação: [+] para adição | [-] para subtração | [x] para multiplicação | [/] para divisão")

if (isNaN(num1) == true || isNaN(num2) == true){
    alert('Operação inválida')
    resultado = 'Tu é burro? É só ler e digitar corretamente!';
}
