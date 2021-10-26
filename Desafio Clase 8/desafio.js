let divClases = document.getElementById("random")

let parrafo = document.createElement("p")
parrafo.className = "genteHermosa"
parrafo.id = "genteHermosa"
parrafo.innerHTML = "Hola gente hermosa"

divClases.appendChild(parrafo)
divClases.removeChild(parrafo)

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")

nombre.value = "Federico"
apellido.value = "Musarra"

console.log(nombre.value)
console.log(apellido.value)

const persona1 = {
    nombre: "Federico",
    apellido: "Musarra",
    edad: "64",
    cargo: "Alumno"
}

let plantilla = "Nombre " + persona1.nombre + " Apellido " + 
persona1.apellido + " edad: " + persona1.edad + " cargo: " + persona1.cargo

let parrafo2 = document.createElement("p")
parrafo2.innerHTML = plantilla;
divClases.appendChild(parrafo2)