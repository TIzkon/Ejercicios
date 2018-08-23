'use strict'
// DOM - Document Object Model
function cambiacolor(color){
    caja.style.background = color;
}
//Conseguir elementos con un IDc concreto
var caja = document.getElementById("micaja");
//var caja = document.querySelector("#micaja")

/*caja.innerHTML = "¡Texto en la caja desde js!";
caja.stylebackground = "red" ;
caja.style.padding = "20px" ;
caja.style.color = "white";
caja.classname = "hola hola2"
*/
//conseguir elementos por su etiqueta
var todoslosdivs = document.getElementsByTagName('div')

var contenidoentexto =  todoslosdivs[2];
var valor 
//todoslosdivs.foreach((valor,indice)=>{
for(valor in todoslosdivs){var parrafo = document.createElement("p");
            var texto = document.createTextNode(valor);
            parrafo.appendChild(texto);
            document.querySelector("#miseccion").appendChild(parrafo)}
            
//                     });
/*contenidoentexto.innerHTML = "otro texto para el segundo elemento"
contenidoentexto.style.background = "red";
*/
//console.log(todoslosdivs);


//conseguir elementos por su clase css

var divsrojos = document.getElementsByClassName('rojo')
var divsamarillos = document.getElementsByClassName('amarillo')
(divsamarillos[0]).style.background = "yellow";
var div;
for(div in divsrojos){if (divsrojos[div].classname == "rojo"){
        divsrojos[0].style.background = "red"
        
    }  
                
                     

}
//query selector


var id = document.querySelector("#encabezado")

console.log (id);

var claserojo = document.querySelector(".rojo")
console.log(.rojo) 