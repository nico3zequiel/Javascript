let formulario = document.getElementById("formulario");
let tabla = document.getElementById('tablaContent');

const datos = {
    nombre: "",
    apellido: "",
    edad: ""
}

formulario.addEventListener("submit", (e)=>{
    console.log(e)
    e.preventDefault();
    datos.nombre = document.getElementById("nombre").value;
    datos.apellido = document.getElementById("apellido").value;
    datos.edad = document.getElementById("edad").value;
    console.log(datos);
    tabla.children[0].innerHTML += (`
        <tr>
        <td>${datos.nombre}</td>
        <td>${datos.apellido}</td>
        <td>${datos.edad}</td>
        </tr>
    `)
})

$("#show").on("click", () => {
    $(".listado").fadeIn()
})
$("#hide").on("click", () => {
    $(".listado").fadeOut()
})

