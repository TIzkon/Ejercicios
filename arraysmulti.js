'use strict'
//Un array multi dimensional es un array que tiene dentro otros arrays y se accede mediante el index [numero de indice]
var categorias = ['accion','terror','comedia'];
var peliculas = ['La verdad duele','La vida es bella','Gran torino'];

//peliculas.sort();
//peliculas.reverse();
console.log(peliculas);

var cine = [categorias,peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]); 
/*
var elemento = prompt ("introduce tu pelicula: ");
do{
    elemento = prompt("inroduce tu pelicula: " );
    peliculas.push(elemento);
}
while(elemento != "Acabar")
   peliculas.pop();
*/
/*
// borrar un elemento de un array
var indice = peliculas.indexOf('Gran torino');
if(indice > -1)
    peliculas.splice(indice, 1)
*/
/*
//convertir un array ene un string
 var peliculasstring = peliculas.join()
console.log(peliculasstring);
*/
/*
var indice = peliculas.indexOf('Gran torino');
if(indice > -1)
    peliculas.splice(indice, 1)


var peliculasstring = peliculas.join()
var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(" , ");

console.log(peliculasstring);
*/
document.write ("<ul>")
lenguajes.forEach((elemento,indice)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
    
});
for (let lenguaje in lenguajes){
    document.write("<li>"+lenguaje+"</li>");
    

}
     
docuemnt.write("</ul>")