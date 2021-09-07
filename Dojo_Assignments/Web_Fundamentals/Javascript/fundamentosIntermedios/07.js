/*Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].*/

var arr = [4, "Ulysses", 42, false, ];

function doble(arr) {
    var len = arr.length;
    for (var i = len; i > 0; i--) {
        arr[2 * len - 1] = arr[len - 1];
        arr[2 * len - 2] = arr[len - 1];
        len--;
        // console.log(i);
    }
    console.log(arr);
}
doble(arr);