'use strict'

//parametros Rest y spread

function listado frutas(fruta1, fruta2, ...todas_las_frutas){
    console.log("fruta 1: ", fruta1);
    console.log("fruta 2: ", fruta2);
    
}
listadofrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

var frutas = ["Naranja", "Manzana"];
listadofrutas(...frutas, "Sandia", "Pera", "Melon" ,"coco")