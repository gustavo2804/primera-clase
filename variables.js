const diccionario = [
    {"nombre":"gustavo","edad":25, "ciudad":"Santo Domingo"},
    {"nombre":"jahn","edad":22, "pais":"Italia"},
    {"nombre":"julio","edad":20, "ciudad":"pto Plata"},
    {"nombre":"juliana","edad":13, "ciudad":"la vega"},
    {"Apellido":"Santana","edad":11, "pais":"Rep Dom"},
    {"nombre":"juana","edad":14, "ciudad":"punta cana"},
    {"Apodo":"more","edad":17, "ciudad":"La Romana"},
    {"nombre":"valerio","edad":56, "ciudad":"Azua"},
    {"nombre":"alejandro","edad":44, "Provincia":"Sanchez Ramirez"},
    {"nombre":"juan","edad":19, "ciudad":"Bonao"},
    {"nombre":"maria","edad":7, "ciudad":"La Altagracia"},
    {"nombre":"marcos","edad":16, "ciudad":"Sosua"},
    {"nombre":"pedro","edad":67, "ciudad":"Cap cana"},

];

//toma la cantidad objetos en el arreglo
var arreglos = Object.keys(diccionario);

//pruebas antes del funcionamiento
// var arreglos2= Object.keys(diccionario[arreglos[0]]);
//console.log(diccionario);
// console.log(arreglos2);
// console.log(diccionario.length);
// console.log(arreglos2.length);


for (let i = 0; i<diccionario.length; i++){
        let resultado = []; 
       var arreglos2= Object.keys(diccionario[arreglos[i]]);   
    for( let j=0; j< arreglos2.length ; j++ )
        {
             
             resultado[j] = diccionario[i][arreglos2[j]];

        }

        console.log(
            arreglos2[0] + ": " + resultado[0] + ", ",
            arreglos2[1] + ": " + resultado[1] + ", ",
            arreglos2[2] + ": " + resultado[2]
        
        );
        
}
