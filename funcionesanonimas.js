'use strict'
//Funciones anonimas
//Es una funcion que no tiene nombre

/*var pelicula = function(nombre){
    return "la pelicula es: "+nombre;
    
}
*/

function sumame(numero1, numero2, sumaymuestra, sumapor2){
    var sumar = numero1 + numero2;
    
    sumaymuestra(sumar);
    sumapor2(sumar);
    return sumar;
    
}

sumame(35, 20, function(dato){
    console.log("La suma es", dato)
},
function(dato){
    console.log("La suma por 2 es:", (dato*2)) 
    
}
)
/*console.log(
    sumame(4, 5));
*/

/*las funciones de flecha es una forma de definir funciones de callback de una forma mas limpia y clara
/es sustituir la palabra function  por la flecha =>