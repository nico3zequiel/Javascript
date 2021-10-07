
// SISTEMA PARA REGISTAR ALUMNOS

alert("Sistema de alta de alumnos")


let pass = 1234
let dato = Number(prompt("Ingrese su contraseña"))


while (dato != pass) {
    alert("Contraseña incorrecta");    
    dato = Number(prompt("Ingrese su contraseña"));
    
}



function Alumnos(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
    }

const registrarAlumno = () => {

    let nombre = prompt("Ingrese nombre del alumno")
    let apellido = prompt("Ingrese apellido del alumno")
    let edad = parseInt(prompt("Ingrese edad del alumno"))

    const datos = new Alumnos (nombre, apellido, edad)
    console.log(datos);    

}


alert("Elija la opcion que desea ejecutar")

let opcionUno = "alta"
let opcionDos = "baja"
let opcionTres = "consulta"
let opcionCuatro = "modificacion"

let comando = prompt("ALTA, BAJA, CONSULTA o MODIFICACION")

comando = comando.toLowerCase()

if (comando === "alta")
registrarAlumno();
else { if (comando === "baja" || comando === "consulta" || comando === "modificacion")
    alert("Lo sentimos, la pagina se encuentra en mantenimiento");
    }













