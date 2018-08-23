'use strict'

//Platillas de texto
/*
Con las comillas invertidas podemos concatenas el texto y dividirlo y asi hacer platillas como he hehco abajo y pra introducirle las variables usamos el $ y lo metemos entre {} para la plantilal usamos <h1></h1>,<h2></h2>,<h3></h3>,...
y para mostrarlo en la pantalla usamos el document.write

*/

var nombre = prompt("Pon tu nombre aki");
var apellidos = prompt("Pon tus apellidos");

var texto = `
    <h1>Hola que tal</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mis apellidos son ${apellidos}</h3>

`
//"Mi nombre es: "+nombre+"Mis apellidos son "+apellidos
document.write (texto)