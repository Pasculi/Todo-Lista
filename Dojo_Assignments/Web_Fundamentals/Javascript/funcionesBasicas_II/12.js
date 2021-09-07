/**Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.  */
var arr = ([1, "comida", 6, 6, "comida", 4])

function hungry(arr) {
    arr.forEach((i, cont) => {
        if (i === "comida") {
            console.log("yummy");
            cont += 1;
        }
        if (cont === 0) {
            console.log("Tengo hambre!");
            return;
        }
    });

}
hungry(arr);