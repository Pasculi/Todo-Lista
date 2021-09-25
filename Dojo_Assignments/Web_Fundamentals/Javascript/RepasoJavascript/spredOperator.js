const userTwo = {
    firstname:'Jorge',
    age:47,
    hobbies:['leer por horas', 'salir a andar en bici', 'maraton de How I meet your mother']
}

const copyUserTwo = {...userTwo, address:'Estocolmo 405', age:15 };

console.log(copyUserTwo);

const fruits = ['Manzanas', 'Platanos', 'Sandia'];
const moreFruits = ['Melon', 'Granada'];

const allFruits = [...fruits, ...moreFruits];

console.log(allFruits);

//Rest

const {age,...menos}=userTwo;

console.log(menos)
