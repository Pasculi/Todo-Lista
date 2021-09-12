const canales=[
     {
          nombre:"TVN",
          numero:"25",
          multicast:"239.255.2.79",
          satelite:"Intelsat21"

     },
     {
          nombre:"Mega",
          numero:"26",
          multicast:"239.255.2.76",
          satelite:"Intelsat9"

     },
     {
          nombre:"Chilevision",
          numero:"27",
          multicast:"239.255.2.77",
          satelite:"Intelsat21",

     },
     {
          nombre:"Canal13",
          numero:"28",
          multicast:"239.255.2.78",
          satelite:"FasatAlfa",

     }
]

const[TVN,Mega,Chilevision,Canal13]=canales;
const[nombre,numero,multicast,...rest]=canales;

console.log(canales);



console.log(TVN);
console.log(Mega);
console.log(Chilevision);
console.log(Canal13);

const myVar = 10 < 20
    ? 12< 10
        ? true
        : false
    : false
console.log(myVar)