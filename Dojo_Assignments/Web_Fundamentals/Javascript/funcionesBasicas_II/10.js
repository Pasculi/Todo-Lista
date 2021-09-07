/**Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores). */

var arr = [3, 1, 6, 4, 2];

console.log("Arreglo inicial arr = [" + arr + "]");

function arrInverso() {
    var temp = 0;
    var largo = arr.length;
    for (var i = 0; i < largo / 2; i++) {
        temp = arr[i];
        arr[i] = arr[largo - 1];
        arr[largo - 1] = temp;
        largo--;
    }
    return arr;
}
var y = arrInverso(arr);
console.log("Arreglo final arr = [" + y + "]");