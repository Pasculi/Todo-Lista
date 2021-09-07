/**Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.   */
var arr = [42, true, 4, "Liam", 7];

function penul(arr) {
    if (arr.length <= 2) {
        return null;
    } else {
        /*  for (var i = 0; i < arr.length; i++) {
            //console.log(arr[i]);
        }*/
    }
    console.log("El arreglo es: " + arr.join(" - "))
    return arr[arr.length - 2];
}
var y = penul(arr);
console.log("El penúltimo valor del arreglo es: " + y);