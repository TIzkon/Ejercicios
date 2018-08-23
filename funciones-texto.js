'use strict'

//Transformacion de textos
/*Con el .toString convertimos el dato a un string
  con el .toUpperCase convertimos el texto en mayusculas
  con el .toLowerCase convertimos el texto en minusculas
*/
/*
Con .index me busca la coincidencia de esoq ue bsucas en ese dato
    .search un sinonimo del otro
    .lastindex es la ultima coincidencia de ese dato
    .match te da en un array todo la informacion sobre ese dato
    .substr te busca el dato entre esas 2 posiciones
    .charAt te busca la letra en esa posicion
    .startsWith busca al inicio del string ese dato,"AL INICIO"
    .endsWith lo mismo pero cuando acaba
    .includes busca la palabra(escrita exactamente) si existes true,sino false
*/
/*
    .replace reemplaza la parabra primera por la segunda que se le pone
    .slice corta el principio y te deja el numero x encima del que le pones(sirve para recorrtar un string)
    .split vale para meterte en un array todas las palabras y ordenarlas
    .trim quita los espacios que haya por delante y por detras de un string 
*/
var numero = 777;
var texto1 = "El peril me ama";
var texto2 = "El peri no esta gordo esta lleno de amor"

var busqueda =texto1.trim();

console.log (busqueda)

/*
var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLowerCase();

console.log (dato)

//Calcular la longitud de un texto
//el .length vale para contar letras o bloques en un array
var nombre = "You are so crazy"

console.log(nombre.length)

//Concatenar - unir textos

var textototal = texto1.concat(" "+texto2);

console.log(textototal)
*/