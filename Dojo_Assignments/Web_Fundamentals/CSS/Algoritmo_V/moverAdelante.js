var x = [1, 2, 3]
var temp = 0;

function moverAdelante() {
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i + 1];
    }
    x[x.length - 1] = temp;
}
moverAdelante(x);
console.log(x);