let textoEnParrafo = "Hola gente!!"

let divTextos = document.getElementById("divTextos")
let etiquetaP = document.getElementById("texto")
let botoncito = document.getElementById("botoncito")
let divTextitos = document.getElementById("divTextitos")
let botonEliminar = document.getElementById("eliminarTexto")
console.log(etiquetaP.firstChild)

let texto2 = document.createElement("p")
texto2.id = "texto2"
texto2.innerText = "Aqui Vera todos los articulos disponibles"

divTextos.appendChild(texto2)

divTextos.innerHTML += "<h1 id=tituloUno class=titulos>Textos</h1>"

botoncito.addEventListener("click", function() {
    divTextitos.innerHTML = `
        <p> ${textoEnParrafo} </p><br>
        <p> Pagina en </p> <br>
        <p> proceso </p>
    `
})

botonEliminar.addEventListener("click", function() {
    divTextitos.innerHTML = ""
})