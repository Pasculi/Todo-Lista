/*Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias(["programar”,"dojo”, "genial”]) debería devolver ["programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante? */

var arr = [23, 405, 6];

function longPrevia(arr) {
    var count = 0;
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    console.log(arr);
    return arr;
}
var y = longPrevia(arr);
console.log(y);