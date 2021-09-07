/*/Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.*/
var arr = [42, 1, 4, 3.14, 7];

function mayor2(arr) {
    var mayor = 0;
    if (arr.length < 2) {
        return null;
    } else {
        let temp = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < (arr.length - 1 - i); j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }

    }
    return arr[arr.length - 2];
}
var y = mayor2(arr);
console.log(y);