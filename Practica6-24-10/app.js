//?Solo trabajaremos con arreglos (Array)

//const Array = ['dATO1', 1, Boolean];



//console.log("Tamaño del array: "+Array.length);
//console.log(Array[3]);
//Array.push('5645');
//console.log("Nuevo tamaño del array: " + Array.length); 

//* Hacer un arreglo en el cual se de la tabla del 5 deteniendose en el apartado 6 del arreglo con estructuras de control  */

let x=5
let tabla = [x]

for (let i=0; i<10 ;i++){
    if (tabla.length == 7) {

    }else{
        console.log('5*'+ (i+1) + '=' + tabla[i]);
        x=5*(i+2);
         tabla.push(x);
   }

    
} 
console.log("Fin del arreglo el espacio 6 del arreglo es:" + tabla[6]);


let array = ['Dato1', 'dato2', 'dato3'];
array.push('dato4');
console.log(array[3]);

//eliminar 
array.splice(2,2);

console.log(array)





