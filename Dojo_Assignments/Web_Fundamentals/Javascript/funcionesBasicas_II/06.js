/*Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.*/
var arr = [1, 6, 1, 2, 5];

function parOdd(arr) {
    var par = 0;
    var imp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            par = par + 1;
            if (par === 3) {
                console.log(par);
                console.log("¡Es para bien!");
            }
        }

        if (arr[i] % 2 !== 0) {
            imp = imp + 1;
            if (imp === 3) {
                console.log(imp);
                console.log("¡Qué imparcial!");
            }
        }
    }
}
var y = parOdd(arr);
console.log(y);