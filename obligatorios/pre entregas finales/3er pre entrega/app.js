

 // SISTEMA DE CALCULO DE PROMEDIOS DE ALUMNOS //


 //      JQUERY EN INPUTS

function promediarNotas(){

    let nom=$("#nombre").val();
    let not1=$("#nota1").val();
    let not2=$("#nota2").val();
    let not3=$("#nota3").val();
    
    //VALIDAR NOMBRE
    if(nom===""){
        
        alert("Ingrese el nombre del alumno");return false;
    }
    // VALIDAR NOTAS
    if(not1==="" || not2==="" || not3===""){
        
        alert("Ingrese las notas para continuar");return false;        
    }
    //NOTAS NO MAYORES A 10 
    if(not1 >= 11 || not2 >= 11  || not3 >= 11){
        alert("La nota no puede ser mayor a 10")
        return false;
    }
    // NOTAS MENORES A 1
    if(not1 <= 0 || not2 <= 0  || not3 <= 0){
        alert("La nota no puede ser menor a 1")
        return false;
    }
    
    //CALCULAR PROMEDIO
    let prom = (parseFloat(not1)+ parseFloat(not2)+ parseFloat(not3)) /3;  
    
    let  obs =0;


    //MANIPULACION CSS

    $("#show").on("click", () => {
        $(".animacion").css("display", "flex")
        })
        
    //CONDICIONAL PARA APROBAR O DESAPROBAR
    if(prom >=7){
        obs =value="Aprobado";
        
    }else{
    obs =value="Desaprobado";    
    }   
    
    const tabla=document.getElementById('addtabla');
    
    const fila=document.createElement('tr');            
    
    
    fila.innerHTML=`<td> ${nom} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${prom.toFixed(1)} </td><td> ${obs} </td>`;
    
    


    
    tabla.appendChild(fila);

    if(prom>6.99){
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#B3DEBA";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#FFCABA";
    }
    if(not1>6.99){
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "red";
    }
    if(not2>6.99){
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "red";
    }
    if(not3>6.99){
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "blue";
    }else{
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "red";
    }
    
    
    
    document.getElementById('nombre').value='';
    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('nota3').value='';
    

}

(function () {
    'use strict'  
    let forms = document.querySelectorAll('.needs-validation')  
    Array.prototype.slice.call(forms)
    .forEach(function (form) {

        //METODO SUBMIT
        
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)
    })
})()


//DECLARACION DE URL
const urlJson = "./data.json"


//BOTON JQUERY
$("body").prepend('<button id="btn1">JSON</button>');


//EVENTO CLICK
$("#show").click(() => {
$.getJSON(urlJson, function (respuesta, estado) {
if(estado === "success"){
let misDatos = respuesta;
for (const dato of misDatos) {
$("body").prepend(`<div>
<h3>${dato.name}</h3>
<p> ${dato.email}</p>
</div>`)
}
}
});
});