class prendas{
    constructor(tipo ,precio,stock){

        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;

    }

    PrecioFinal(){

        return this.precio + (this.precio * 0.21)
    }

    stockDisponible(){

        if( this.stock != 0 && this.stock > 0 ){

            return this.tipo +" cuenta con un stock de " + this.stock + " prendas disponibles" ;
        }
        else{
            return this.tipo +" no cuenta con stock disponible, vuelva a intentarlo mas adelante, gracias :) " ;
        }
      
    }

    actualizacionStock(){

        this.stock = this.stock - 1; 
    }


    }

let prendaUno = new prendas( "buzo" , 3100 , 15 );
let prendaDos = new prendas(  "jean" , 2500 , 5 );
let prendaTres = new prendas( "remera" , 1500 , 12 );

console.log( prendaUno.stockDisponible( ));
console.log ("el " + prendaUno.tipo + " Tiene un precio final de " + prendaUno.precio)


