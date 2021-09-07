/*Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.  */
let arr = [1, 2, 3];

function dobleArr(arr) {
    let arrnew = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
        arrnew.push(arr[i]);
    }
    return arrnew;
}
let y = dobleArr(arr);
console.log(y);