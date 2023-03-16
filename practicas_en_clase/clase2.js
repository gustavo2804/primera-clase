// crear una lista de 15 nombres 
// Revisar si en hijos esta Si o No

// Si es un No no hacer Nada 

// pero si es un Si agregar nombres dependiendo de la cantidad de hijos y estos se deben agregar de forma 
// aletorea de la lista creada 

// adicional imprimir el nombre de la perssona segun el sexo (agregarlo) y decir si es 
// "la mama o el papa de " nombresHijos" es tal" nombredelPadreMadre

var nuevoArregloClase = 
[{nombre:'Juan Pablo', "sexo":"M",edad:'15',pais:'Mexico',hijos:'No',cantidad:[0]},
{nombre:'Emmanueli', "sexo":"M", edad:'30',pais:'Republica Dominicana',hijos:'Si',cantidad:[2]},
{nombre:'Marie', "sexo":"F",edad:'25',pais:'Colombia',hijos:'Si',cantidad:[1]},
{nombre:'Liz',"sexo":"F",edad:'24',pais:'Chile',hijos:'No',cantidad:[0]},
{nombre:'Carlos', "sexo":"M", edad:'32',pais:'Estados Unidos',hijos:'Si',cantidad:[5]},
{nombre:'Dylan', "sexo":"M",edad:'40',pais:'Japon',hijos:'Si',cantidad:[2]},
{nombre:'Cesar', "sexo":"M",edad:'35',pais:'China',hijos:'Si',cantidad:[2]},
{nombre:'Gabriel', "sexo":"M",edad:'12',pais:'Nueva Zelanda',hijos:'Si',cantidad:[10]},
{nombre:'Gustavo', "sexo":"M",edad:'18',pais:'Argentina',hijos:'No',cantidad:[0]}];


var hijos = ["Sofia",
    "Mateo",
    "Valentina",
    "Juan",
    "Ana",
    "Santiago",
    "Maria",
    "Daniel",
    "Isabella",
    "Luis",
    "Camila",
    "David",
    "Catalina",
    "Carlos",
    "Alejandra"]

    // cantidad de objetos en el arreglo
var arreglos= Object.keys(nuevoArregloClase);

// listado de atributos en un objeto
var partes= Object.keys(nuevoArregloClase[0]);

    
    
    function hijoAleatorio (number){
        //variable que almacena los nombres de los hijos
        var cantidad = [];
        for(let i = 0; i<number ; i++){
        // Math.floor redondea a un numero entero 
        //Math.random da un numero random entre 0 y 1
            var aleatorio = hijos[Math.floor(Math.random() * hijos.length)];
        cantidad.push (aleatorio); 
            }
        return cantidad;
    }


    for(let i = 0; i< nuevoArregloClase.length ; i++){
            // variable que define si tiene hijos
            let tHijos = nuevoArregloClase[arreglos[i]][partes[4]];
            // variable con el sexo del padre
            let sexo = nuevoArregloClase[arreglos[i]][partes[1]];
            //variable con el nombre del padre
            let nombrePadre = nuevoArregloClase[arreglos[i]][partes[0]];

            
            
               if (tHijos == "Si"){
                    let cantidadHijos =nuevoArregloClase[arreglos[i]][partes[5]][0];
                    nombresHijos= hijoAleatorio(cantidadHijos);
                    if(sexo == 'M'){

                        console.log("El papa de " + nombresHijos.toString() + " es " + nombrePadre );
                        console.log("");
                        
                    }   
                    else {

                        console.log("La Mama de " + nombresHijos.toString() + " es " + nombrePadre );  
                        console.log("");
                        
                    }

               }
               else{

                console.log(nombrePadre +" no tiene hijos");
                console.log("");
               }
               

    }

            





