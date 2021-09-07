/**Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3]. */
var arr = [-1, 1, 1, 1];
console.log("El arreglo inicial es : arr = [" + arr + "]");

function countPos(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count = +i;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}
var y = countPos(arr);
console.log("El arreglo final contar positivos, y reemplaza el ultimo con el valor es: arr = [" + y + "]");