/*Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.  */
var arr = [5, -2, 1, 8, 3];

function minMax(arr) {
    var mayor = 0;
    var menor = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }

    }
    console.log(menor);
    return mayor;
}
var y = minMax(arr);
console.log(y);