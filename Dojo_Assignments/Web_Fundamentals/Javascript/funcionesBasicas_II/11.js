/*Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5]. */
var arr = [1, -3, 5];

function nega(arr) {
    var arrnew = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= -1;

        }
        arrnew.push(arr[i]);
    }
    console.log(arrnew);
    return arrnew;

}
var y = nega(arr);
console.log(y);