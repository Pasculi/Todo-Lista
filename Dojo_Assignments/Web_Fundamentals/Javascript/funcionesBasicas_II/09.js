/*Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.*/

var arr = [1, 2, 3];


function addSiete(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i] + 7;
        newarr.push(temp);
    }
    return newarr;
}
var y = addSiete(arr);
console.log(arr);
console.log(y);