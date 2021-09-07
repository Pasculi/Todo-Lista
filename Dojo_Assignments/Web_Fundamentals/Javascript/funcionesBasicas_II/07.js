/*Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr.  */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function incSeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0)
            arr[i] += 1;
    }
    return arr;
}
var y = incSeg(arr);
console.log("El arreglo queda arr = [" + y + "]");