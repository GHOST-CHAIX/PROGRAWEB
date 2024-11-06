const ejercicio = [45,6,7,8,9,7]

let suma = (ejercicio[0]+ejercicio[1]+ejercicio[2]+ejercicio[3]+ejercicio[4]+ejercicio[5]);
let resta = (ejercicio[0]-ejercicio[1]-ejercicio[2]-ejercicio[3]-ejercicio[4]-ejercicio[5]);
let multiplicacion = 1;
let division = 0


for (let i = 0; i < ejercicio.length; i++) {

    multiplicacion *= ejercicio[1]

}


for (let i = 0; i < ejercicio.length; i++){

    division /= ejercicio[1]

}


//Resultados

console.log(suma);

console.log(resta);

console.log(multiplicacion);

console.log(division);