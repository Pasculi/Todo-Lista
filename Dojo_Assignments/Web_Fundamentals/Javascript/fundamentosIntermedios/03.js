/*Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad.*/
function fibonacci(num) {
    var num = num;
    var a = 0;
    var b = 1;
    var sum = 0;
    var ult = 0;
    var ant = 0;
    var arr = [];
    if (num < 2) {
        console.log("fibonacci(" + num + ") = " + (num) + " (dado)");
    } else {
        for (var i = 0; i < num; i++) {
            //console.log(a);
            sum = a + b;
            a = b;
            b = sum;
            arr.push(a);
            ant = arr[i - 2];
            ult = arr[i - 1];
            if (ant === undefined) {
                ant = 0;
            }
        }
        return console.log("fibonacci(" + num + ") = " + a + " (" + (ant + "+" + ult) + ")");
    }
}
var y = fibonacci(2);
console.log(y);

/*var num = 4;

function fact(num) {
    if (num === 0) {
        return 1;
    }
    return num + fact(num - 1);
}
var y = fact(num);
console.log(y);*/