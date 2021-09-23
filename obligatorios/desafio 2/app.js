
/*Desafio 2 js */

alert("¿Que menú desea pedir?")
alert("¿PARRILLA, HAMBURGUESAS, PIZZA O PASTAS?")

let menuUno = "parrilla";
let menuDos = "hamburguesas";
let menuTres = "pizza";
let menuCuatro = "pastas";

let pedidoCliente = prompt ("¿Que menú  desea pedir?")
pedidoCliente = pedidoCliente.toLowerCase()


if (pedidoCliente === menuUno || pedidoCliente === menuDos || pedidoCliente === menuTres || pedidoCliente === menuCuatro)
console.log("Muchas gracias, su pedido saldrá pronto");
else {console.log ("Lo sentimos, no tenemos esa opción en el menú")}

