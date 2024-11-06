//Codificacion Declarativa

// Tabla del 8 usando un enfoque declarativo
const tablaDelOcho = Array.from({ length: 10 }, (_, i) => `8 x ${i + 1} = ${8 * (i + 1)}`);

console.log(tablaDelOcho.join('\n')); // Imprimir la tabla