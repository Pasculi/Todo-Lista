/*Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/
var arr = [];

function sigma(num) {
    //var num = 3;
    var sum = 0;
    var cont = 0;
    for (var i = 1; i <= num; i++) {
        arr.push(i);
        sum += (i);
        cont += 1;
    }
    console.log("sigma (" + num + ") = " + sum + " (" + arr.join("+") + ")");
}
sigma(5);