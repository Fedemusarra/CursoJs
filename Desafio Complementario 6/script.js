

alert("Bienvenidx a BlackOutfitters !")
confirm ("Queres ver nuestros productos seleccionados para vos? ❤️‍")
 const productos = [  ]

 class prendas {
    constructor(tipo, precio, stock) {

    this.tipo = tipo;
    this.precio = parseInt(precio)  ; 
    this.stock = parseInt(stock);
    }
 }

productos.push(new prendas("Campera", 7200 , 5));
productos.push(new prendas("Poleron", 4200, 12));
productos.push(new prendas("Jogging", 2200 , 24));
productos.push(new prendas("Basic", 6600 , 8));


 
function elejirfiltro ( ) {

     let orden = parseInt (prompt(" Filtra tu busqueda: Opcion  1 (precio) Opcion 2 (alfabeticamente) "))
     if ( orden == 1) {

        console.log("Elegiste por precio") 
        
        productos.sort(  function (precio1,precio2  ) {
            alert("Elegiste por precio")

            if (precio1.precio > precio2.precio) { 

              return 1;
            } else if (precio1.precio < precio2.precio) {
              return -1;
            } else {
                return 0;
            }

          }); console.log(productos);


    } else if ( orden == 2) {

        alert("Elegiste alfabeticamente")

        productos.sort(function (a, b) {
            if ( a.tipo > b.tipo ) //////////////////// compara 2 tipos 
              return 1;
            if ( a.tipo < b.tipo )
              return -1;
            return 0
        });  console.log(productos);

    } else {
        alert("error")
    }
}


 elejirfiltro( )
