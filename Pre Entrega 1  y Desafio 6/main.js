

/* class Producto{
    constructor(nombre, precio ,stock){
            this.nombre = nombre;
            this.precio = precio;
            
            this.stock = stock;
        }
    }
    
    
    let producto1 = new Producto("Campera", 7200 , 5);
    let producto2 = new Producto("Poleron", 4200, 12);
    let producto3 = new Producto("Jogging", 2200 , 24);
    let producto4 = new Producto("Basic", 6600 , 8);
    
    let Catalogo = [producto1 , producto2 , producto3 , producto4];
    
    console.log(Catalogo)
    
    let Carrito = [];
    let suma = 0;
    
    function total(){
        let opcion = mostrarProductos();
    
        while(opcion != 0){
            switch(opcion){
                case 1:
                    alert("Agregaste una " + Catalogo[0].nombre)
                    agregarProducto(Catalogo[0]);
                    suma = suma + Catalogo[0].precio;
                    break;
    
                case 2:
                    alert("Agregaste una "+ Catalogo[1].nombre)
                    agregarProducto(Catalogo[1]);
                    suma = suma + Catalogo[1].precio;
                    break;
                case 3:
                        alert("Agregaste una " + Catalogo[2].nombre)
                        agregarProducto(Catalogo[2]);
                        suma = suma + Catalogo[2].precio;
                        break;
        
                case 4:
                        alert("Agregaste una "+ Catalogo[3].nombre)
                        agregarProducto(Catalogo[3]);
                        suma = suma + Catalogo[3].precio;
                        break;
                default:
                    alert("Ingreso incorrecto");
                    break;
            }
    
            opcion = mostrarProductos();
        }
         console.log(" El total es $"+ suma);
    }
    
    function mostrarProductos(){
        let opcion = parseInt(prompt("SELECCIONE PRODUCTO, presione 0 para finalizar la compra:\n\n 1- Campera, presione 1\n\n 2- Poleron, presione 2, \n\n 3- Jogging, presione 3\n\n 4- Basic, presione 4 "));
        return opcion;
    }
    
    function agregarProducto(producto){
        Carrito.push(producto);
    }
    
    
    total();
    */