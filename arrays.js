'use strcit'

//Arrays,arreglos,matrices
//Es una coleccion de datos agrupados
//entre corchetes para sacar el dato en ese indice,estos empiezan por el 0

var nombre = "Tizkon"
var nombres = ["Tizkon", "Gomez" , "##" , 234 ,true ,false];
                    
var lenguajes = new Array("php", "JS" , "GO")

/*console.log(nombres[2])
console.log(lenguajes)
*/
/*
var elemento = parseInt(prompt("Que elemento quieres??", 0));
if (elemento >= nombres.lenght){
    alert("introduce el numero correcto menor que "+ nombres.length);
    
}else{
    alert(nombres[elemento]);
}
*/
/*
document.write("<h1>Lenguajes de programacion de 2018</h1>")
document.write("<ul>")
for(i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
    
}
document.write("</ul>");
*/
/*
//El .foreach te muestra todo el array y pones tu 3 "variables" que la primera es el elemento del array la 2 es el indice y la 3 es el array completo
document.write("<h1>Lenguajes de programacion de 2018</h1>")
document.write("<ul>")
lenguajes.forEach((elemento, index, data)=>{
    console.log(data);
    document.write("<li>"+index+" - "+elemento+"</li>");
    
})
document.write("</ul>");
*/
/*document.write ("<ul>")
lenguajes.forEach((elemento,indice)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
    
});
*/
//otra forma mas bonita de recorrer el array
for (let lenguaje in lenguajes){
    document.write("<li>"+lenguaje+"</li>");
}
     
document.write("</ul>");

//Busquedas

lenguajes.find(function((lengua)){
               return lenguaje == "PHP"
               }