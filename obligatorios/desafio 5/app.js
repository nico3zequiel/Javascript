/* SISTEMA DE CALCULO DE PROMEDIOS

alert("Calculo de promedio trimestral")

*/




// DATOS DE ALUMNO, DESAFIO OBJETOS


alert("Datos del alumno")


class Alumnos {
    constructor(nombre, apellido, edad){    
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const registrarAlumno = () => {

    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let edad = parseInt(prompt("Ingrese su edad"))

    const datos = new Alumnos (nombre, apellido, edad)
    console.log(datos);

}





/*


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

*/
