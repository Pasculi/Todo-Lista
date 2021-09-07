/*Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).*/
/*var arr = [];

function factorial(num) {
    var sum = 1;
    for (var i = 1; i <= num; i++) {
        arr.push(i);
        sum *= (i);
    }
    console.log("factorial (" + num + ") = " + sum + " (" + arr.join("*") + ")");
}
factorial(5); */
var num = 3;

function fact(num) {
    if (num === 0) {
        return 1;

    }
    return num * fact(num - 1);
}
var y = fact(num);
console.log(y);