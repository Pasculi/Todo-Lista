// En Javascript las funciones cumplen 2 cosas, pueden ser una función
// y también tienen un contexto de this. y se puede implementar herencia, 
//mediante clases (class) basada en prototipos

function miFn(){
    this.prop = 'propiedad';
    this.name = 'Jorge';
    this.apellido = 'Sepúlveda';
    this.edad = 35;
    
}

const r = new miFn();
console.log(r);
