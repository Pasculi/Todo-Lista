//Destructuring o Destructuracion
/*
const user = {
    firstname:'Jorge',
    age:25,
    hobbies:'leer por horas'
}
const {firstname, age} = user;
const hob='hobbies';
console.log(`El usuario ${firstname} tiene ${age} anos y su hobbies es ${user[hob]}`);

const students = ['Pablo','Jorge','Rene','Mauricio'];

const [primerStudent,,tercerStudent]=students;

console.log(primerStudent,tercerStudent);
*/
const user = {
    firstname:'Jorge',
    age:25,
    hobbies:['leer por horas', 'salir a andar en bici', 'maraton de How I meet your mother']
}
const [, hob] = user.hobbies;

console.log(hob);