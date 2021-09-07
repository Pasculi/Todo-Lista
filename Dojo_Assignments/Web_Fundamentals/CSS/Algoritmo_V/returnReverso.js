var x = [1, 2, 3];
var newArray = [];

function reverso(x) {
    for (var i = x.length - 1; i >= 0; i--) {
        newArray.push(x[i]);
    }
    return (newArray);
}

var y = reverso(x);
console.log(y);