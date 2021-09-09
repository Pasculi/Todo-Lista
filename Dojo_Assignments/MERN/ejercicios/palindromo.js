const ispalindrom = (palabra) => {
     
     let texto = palabra.toLowerCase();
     return texto.split("").reverse().join("") == texto;
}
console.log(ispalindrom("Reconocer"));
console.log(ispalindrom("Hola"));
console.log(ispalindrom("ola"));
console.log(ispalindrom("Soyyos"));
/**/

