/**Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null.  */
var arr = [5, 2, 3, 6, 4, 9, 7];
var indice = 3;

function ultimo(arr, indice) {
    if (arr.length <= 2) {
        return null;
    } else {
        // for (var i = 0; i < arr.length; i++) {
        return arr[indice];
        //  }
    }
}
var y = ultimo(arr, indice);
console.log(y);