const user ={
     firstName: "Carolina",
     age: 38,
     hobbies:["leer por horas","Salir a andar en bici", "maratonear netflix viendo dramas"]
}
const [,,hobby] = user.hobbies;
console.log(hobby)

const person = {
     firstName: 'Bob',
     lastName: 'Marley',
     email: 'bob@marley.com',
     password: 'sekureP@ssw0rd9',
     username: 'barley',
     addresses: [
       {
         address: '1600 Pennsylvania Avenue',
         city: 'Washington, D.C.',
         zipcode: '20500',
       },
       {
         address: '221B Baker St.',
         city: 'London',
         zipcode: 'WC2N 5DU',
       }
     ],
     createdAt: 1543945177623
   };

   const { addresses: [whiteHouse, sherlock] } = person;
   const { addresses: [ , { city: london }] } = person;
console.log(london);
// => London


/*Destructuracion de un arreglo*/
const valdivia =["San Jose", "Los Lagos", "Paillaco", "Pelchuquin"];

const [a,b,c,d] = valdivia;
 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);

let cc, ba;

[cc, ba="Rio Bueno"] = ["Collico", "Paillao"]

console.log(cc);
console.log(ba);

//Destructuracion de Objeto
const user=
     {
          nombre:"Jorge",
          apellido:"Sepúlveda",
          edad:48,
          rut:"12443400-9",
          saldo:1000
}

/*
{
     nombre:"Andrea",
     edad:23,
     rut:"12555777-8",
     saldo:1000
},
{
     nombre:"Juan",
     edad:29,
     rut:"11224567-8",
     saldo:1000
}
]
*/

const {nombre, edad, rut}= user;
console.log(nombre);
console.log(edad);
console.log(rut);

//Destructuración de objetos(Asignando nuevos nombres de variables)

const {nombre: n, apellido: a} = user;

console.log(n +" "+ a);

//Tomamos del objeto el valor del nombre y del apellido
const {nombre, apellido} = user;
console.log(nombre +" "+ apellido);