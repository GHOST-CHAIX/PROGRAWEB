//Codificacion Imperativa

// Tabla del 8 usando un enfoque imperativo
const tablaDelOcho = [];

for (let i = 1; i <= 10; i++) {
    tablaDelOcho.push(`8 x ${i} = ${8 * i}`); // Agregar cada línea de la tabla al array
}

console.log(tablaDelOcho.join('\n')); // Imprimir la tabla