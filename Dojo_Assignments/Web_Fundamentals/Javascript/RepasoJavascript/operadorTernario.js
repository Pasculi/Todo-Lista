const restriction = (age) =>{
    if(age > 18){
        return 'Eres mayor de edad'
    }else{
        return 'Eres meneor de edad'
    }

}


const restriccion2 = (age) => age > 18 ? 'Eres mayor de edad': 'Erse menor de edad';

const restriccion = (age) => age > 18 && 'Eres mayor de edad';
console.log(restriccion(15));