/*1.	Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5]. */
var arr = [-1, 3, 5, -5];

function tamanoGrande(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
var y = tamanoGrande(arr);
console.log(tamanoGrande(arr));