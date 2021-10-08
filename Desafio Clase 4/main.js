let prendas = prompt (" Elige una de las siguientes prendas disponibles: JEAN, BUZO, REMERA").toLocaleUpperCase();

const resta = (a , b) => a - b;
const suma = (a , b) => a + b;
const iva = x => x * 0.21;


function eleccion(descuento , iva , precioJean , precioBuzo , PrecioRemera){

    if (prendas == "JEAN"){
        let precioFinal = resta (suma(precioJean , iva(precioJean)), descuento);
        alert("el precio final de la prenda elegida es " + precioFinal);

    } else if (prendas == "BUZO"){
        let precioFinal = resta (suma(precioBuzo , iva(precioBuzo)), descuento);
        alert("el precio final de la prenda elegida es " + precioFinal);
    } else if (prendas == "REMERA"){
        let precioFinal = resta (suma(PrecioRemera , iva(PrecioRemera)), descuento);
        alert("el precio final de la prenda elegida es " + precioFinal);
    } else{
        alert ("Comando invalido, vuelva a intentar")

    }
}




let descuento = 500;
let precioJean = 2500;
let precioBuzo = 3100;
let PrecioRemera = 1500;
eleccion ( descuento , iva , precioJean , precioBuzo , PrecioRemera);