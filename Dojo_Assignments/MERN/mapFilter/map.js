// function filter
const perros = [
     { nombre: "Mateo", color: "blanco" }, //perro
     { nombre: "Snoopy", color: "blanco" }, //perro
     { nombre: "Perkins", color: "café" }, //perro
     { nombre: "Charlie", color: "blanco" }, //perro
     { nombre: "Simba", color: "dorado" }, //perro
     { nombre: "Dexter", color: "rubio" }, //perro
     { nombre: "Policarpo", color: "violeta" }, //perro
   ];
   
   perros.map((perro) => console.log(perro.color));
   const gatos = [
     "Pomela",
     "Felix",
     "Martin",
     "Tom",
     "Morocho",
     "Mozart",
     "Sonic",
   ];
   
   perros.map((perro, index) => console.log(index, perro, gatos[index]));
   
   /*duplas(perros, gatos);
   for (const ele of array) {
     console.log(`Un hueso para ${ele}`);
   }
   
   console.log(array.map((ele) => `Un hueso para ${ele}`));
   array.map((ele) => console.log(`Un hueso para ${ele}`));*/
   
   const array1 = [1, 3, 6];
   array1.map((ele) => console.log(ele * 2));
   console.log(array1.map((ele) => ele * 2));
   