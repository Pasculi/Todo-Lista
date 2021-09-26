const senales = [
    {
        name:'TVN',
        proveedor: 'Nacional',
        multicast: '239.255.2.78',
        satelite: 'Intelsat 9',
        origen:'Santiago'

},
{
    name:'Canal 13',
    proveedor: 'Nacional',
    multicast: '239.255.2.79',
    satelite: 'Intelsat 9',
    origen:'Santiago'

},
{
    name:'Mega',
    proveedor: 'Nacional',
    multicast: '239.255.2.76',
    satelite: 'Intelsat 19',
    origen:'Valdivia'

},
{
    name:'HBO Este',
    proveedor: 'HBO',
    multicast: '239.255.2.88',
    satelite: 'Amazonas',
    origen:'Valdivia'

},
{
    name:'HBO Plus',
    proveedor: 'HBO',
    multicast: '239.255.2.78',
    satelite: 'Amazonas',
    origen:'Valdivia'

},
]

//MAP itera cada uno de los elementos de un arrary y retorna otro array

//const getName = senales.map((canal, i) => canal.origen);

const getName = () => senales.map((canal, i) => {
    console.log(canal.name);
    console.log(canal.multicast);
    console.log(i);
    return canal.proveedor
})

console.log(getName());

const provee = new Set(senales.proveedor);
const unicos = [...provee];

console.log(unicos);

const getSenales = (country) => senales.map((canal, index) => ({index: index, ...canal, country: country}));

console.log(getSenales('Australia'))
/*#####################################################################################################*/
let frutas = ["plátano", "plátano", "fresa", "naranja", "uva", "uva", "fresa", "plátano"];

let conteo = frutas.reduce((conteoActual, fruta)=>{
  conteoActual[fruta] = (conteoActual[fruta] || 0) + 1;
  return conteoActual;
}, {});
 
console.log(conteo);
