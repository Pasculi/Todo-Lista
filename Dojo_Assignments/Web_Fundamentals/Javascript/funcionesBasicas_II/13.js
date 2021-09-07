/**Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, "Ada", 2, "pizza"]) cambia el array a ["pizza¨, 42, "Ada", 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.  */
var arr = ([true, 42, "Ada", 2, "pizza"]);

function cambiaHaciaElCentro(arr) {

    var temp = 0;
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    temp = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp;

    console.log(arr);
}
cambiaHaciaElCentro(arr);