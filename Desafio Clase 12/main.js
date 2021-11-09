const productos = [{ id: 1,  nombre: "Jean", precio: 125 },{  id: 2,  nombre: "Polera", precio: 70 },{  id: 3,  nombre: "Jogging"  , precio: 50},{  id: 4,  nombre: "Campera" , precio: 100}];

document.getElementById("botoncito").addEventListener("click", function() {
    console.log("Me pulsaste")
})

class Usuario {
    constructor(username, email, number, password) {
        this.username = username;
        this.email = email; 
        this.number = number;
        this.password = password;
    }
}

let usuarios = []

$(() => {
    $("body").prepend('<button id="btn1">BUTTON</button>');
    $("body").prepend('<input  id="ipt1" type="text">');

    $("#botoncito").click(() => {
        console.log("Me pulsaste")
        $("#ipt1").trigger("change");
    })

    $("#ipt1").change((e) => { 
        alert("El valor es " + e.target.value);
    });
  
    $("#inputId").change((e) => {
        console.log(e.target.value)
    })

    
    for (const producto of productos) {
        $("#app").append(`<div>
                            <h4>  Producto: ${producto.nombre}</h4>
                            <b> $ ${producto.precio}</b>
                            <button id="btn${producto.id}">Comprar</button>
                            </div>`);
        //Asociamos el evento a botón recién creado.
        $(`#btn${producto.id}`).on('click', function () {
            console.log(`Compraste ${producto.nombre}`);
        });
    }
    

    $("#registro").submit((e) => {
        e.preventDefault()
        let datosRegistro = new FormData(e.target)
        let usuario = new Usuario(datosRegistro.get("username"), datosRegistro.get("emailid"), datosRegistro.get("mobilenumber"), datosRegistro.get("password"))
        usuarios.push(usuario)
        localStorage.setItem("Usuarios", JSON.stringify(usuarios))
        $("#idForm").trigger("reset");
    })
   
    
    $("#btn1").click(() => { 
        $("#ipt1").trigger("change");
    });
    

})
