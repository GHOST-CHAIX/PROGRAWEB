alert('prueba');

document.title = 'Clase 3';
console.log(document.title);

//!<---------------
const h1 = document.createElement("h1");
h1.textContent = "Mi texto desde JS";
document.body.appendChild(h1);

//?<---------------
const parrafo = documet.createElement("parrafo");
parrafo.textContent = 'Prueba de texto';
document.body.appendChild(parrafo);
