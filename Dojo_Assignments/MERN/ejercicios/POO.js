class Usuarios {
  constructor(nombre, edad, rut, saldo) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.saldo = saldo;
  }
  abono() {
    this.saldo += 100;
    console.log(`Su saldo es de: ${this.saldo}`);
  }
  descontar() {
    this.saldo -= 100;
    console.log(`Su saldo es de: ${this.saldo}`);
  }
}

const user1 = new Usuarios("Claudio", 30, "12.339.247-k", 25000);
const user2 = new Usuarios("Andrés", 25, "11.111.111-8", 36890);
const user3 = new Usuarios("Claudio", 30, "12.222.242-3", 18250);

user1.abono();
user1.descontar();
user2.abono();
user2.descontar();
user3.abono();
user3.descontar();

const users = [user1, user2, user3];

console.log(users);

const sinEdad = (Usuarios) =>
  users.map((user) => {
    const { edad, ...rest } = user;
    return rest;
  });

console.log(sinEdad(users));


const filtrar = (Usuarios) => users.filter((user) =>{
  const {}
})