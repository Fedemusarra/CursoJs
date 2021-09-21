let edad = parseInt(prompt("ingrese su edad"))



if (edad >=0 && edad <15){
    alert ("No puede ingresar al sitio")
} else if( edad >=15 && edad < 18) {

    alert ("Debera tener aprobacion de un adulto")

}

else if( edad >=18 && edad < 120) {

    alert ("Bienvenido al sitio")

} else{
    alert ("invalido")
}
