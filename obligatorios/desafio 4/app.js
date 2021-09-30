// SISTEMA DE CALCULO DE PROMEDIOS

alert("Calculo de promedio trimestral")

// DATOS DE ALUMNO

function almuno (nombre, apellido) {
    let datoNombre = prompt("Ingrese el nombre del alumno")
    let datoApellido = prompt("Ingrese el apellido del alumno")
    
}
almuno()


// NOTAS OBTENIDAS

    let examen1 = Number(prompt("Ingrese la nota del 1º examen"))
    let examen2 = Number(prompt("Ingrese la nota del 2º examen"))
    let examen3 = Number(prompt("Ingrese la nota del 3º examen"))
    let examen4 = Number(prompt("Ingrese la nota del 4º examen"))

    if( examen1 > 10 || examen2 > 10 || examen3 > 10 || examen4 > 10) {
        console.log("Alguna nota esta mal, vuelva a ingresar sus calificaciones")
    }

//SUMA DE NOTAS

console.log("Total")
function suma () {console.log(examen1 + examen2 + examen3 + examen4)}

suma()

//CALCULO PROMEDIO
console.log("Promedio")
function promedio()


