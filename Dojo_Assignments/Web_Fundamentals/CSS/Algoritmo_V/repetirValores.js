var x = [4, "Ulysses", 42, false];
var newArray = [];

function repetirValores(x) {
    for (var i = 0; i < x.length; i++) {
        newArray.push(x[i], x[i]);
    }
    return (newArray);
}

var y = repetirValores(x);
console.log(newArray);