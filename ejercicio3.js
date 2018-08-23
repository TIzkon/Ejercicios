'use strict'

/*
Hacer un  programa que muestre todos los numero entre 2 numero instroducidos por el usuario
*/

var numero1 = parseInt(prompt("introduce un  primer numero", 0))
var numero2 = parseInt(prompt("introduce un segundo numero",0))
document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros:</h1>")
for(var i = numero1; i<= numero2; i++){
   document.write(i+"<br/>");
    
}

