'use strict'

/*
1.Pida 6 numeros por pantalla y los meta en un array
2.Mostar el array (todos sus elementos) en el cuerpo de la pagina y consola
3.Ordenarlo y mostrarlo 
4.Invertir su orden y mostrarlo 
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario,que nos diga si lo encuentra y su indice.(se valorara el uso de funciones)
el ejercicio k hize
k no me acordaba de todo
*/

var numeros = new Array(6);

for (var i = 0; i <= 5 ; i++){
   numeros[i]= parseInt(prompt("Introduce un numero "))

}
console.log(numeros);

numeros.forEach((numeros,indice) =>{
    document.write("<strong>"+numeros+"</strong><br/>")  
})

numeros.sort(numeros);
console.log (numeros)