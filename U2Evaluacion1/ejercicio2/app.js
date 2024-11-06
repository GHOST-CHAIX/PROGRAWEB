// Selecciona el contenedor principal donde agregaremos los elementos
const app = document.getElementById('app');

// Crea el campo de selección de color
const inputColor = document.createElement('input');
inputColor.type = 'color';
inputColor.value = '#ff5733'; // Valor inicial del color
inputColor.style.marginRight = '10px';

// Crea el botón que generará el contenedor con el color seleccionado
const botonCrearConColor = document.createElement('button');
botonCrearConColor.innerText = 'Crear Contenedor con Color';
botonCrearConColor.style.padding = '10px 15px';
botonCrearConColor.style.backgroundColor = '#4CAF50';
botonCrearConColor.style.color = 'white';
botonCrearConColor.style.border = 'none';
botonCrearConColor.style.borderRadius = '5px';
botonCrearConColor.style.cursor = 'pointer';

// Función para crear el contenedor con el color seleccionado
const crearContenedorConColor = () => {
    // Verifica si el contenedor ya existe para evitar múltiples creaciones
    if (document.getElementById('contenedor-dinamico')) {
        alert('El contenedor ya ha sido creado.');
        return;
    }

    // Crea el contenedor y aplica el color seleccionado como fondo
    const contenedorDinamico = document.createElement('div');
    contenedorDinamico.id = 'contenedor-dinamico';
    contenedorDinamico.style.width = '300px';
    contenedorDinamico.style.height = '200px';
    contenedorDinamico.style.backgroundColor = inputColor.value;
    contenedorDinamico.style.border = '2px solid #ddd';
    contenedorDinamico.style.borderRadius = '10px';
    contenedorDinamico.style.display = 'flex';
    contenedorDinamico.style.alignItems = 'center';
    contenedorDinamico.style.justifyContent = 'center';
    contenedorDinamico.style.marginTop = '20px';

    // Texto dentro del contenedor
    const textoContenedor = document.createElement('p');
    textoContenedor.innerText = 'Contenedor con color personalizado';
    textoContenedor.style.color = '#333';

    // Añadir el texto al contenedor y el contenedor al DOM
    contenedorDinamico.appendChild(textoContenedor);
    app.appendChild(contenedorDinamico);
};

// Crea el botón que al hacer clic generará el contenedor
const botonCrearContenedor = document.createElement('button');
botonCrearContenedor.innerText = 'Crear Contenedor con Color';
botonCrearContenedor.style.padding = '10px 15px';
botonCrearContenedor.style.backgroundColor = '#4CAF50';
botonCrearContenedor.style.color = 'white';
botonCrearContenedor.style.border = 'none';
botonCrearContenedor.style.borderRadius = '5px';
botonCrearContenedor.style.cursor = 'pointer';

// Crea el botón que al hacer clic eliminará el contenedor
const botonEliminarContenedor = document.createElement('button');
botonEliminarContenedor.innerText = 'Eliminar Contenedor';
botonEliminarContenedor.style.padding = '10px 15px';
botonEliminarContenedor.style.backgroundColor = '#f44336';
botonEliminarContenedor.style.color = 'white';
botonEliminarContenedor.style.border = 'none';
botonEliminarContenedor.style.borderRadius = '5px';
botonEliminarContenedor.style.cursor = 'pointer';
botonEliminarContenedor.style.marginLeft = '10px';
botonEliminarContenedor.style.display = 'none'; // Oculto inicialmente

// Función para eliminar el contenedor
const eliminarContenedor = () => {
    const contenedorDinamico = document.getElementById('contenedor-dinamico');
    if (contenedorDinamico) {
        app.removeChild(contenedorDinamico);
        botonEliminarContenedor.style.display = 'none'; // Oculta el botón de eliminar
    } else {
        alert('No hay contenedor para eliminar.');
    }
};

// Asigna las funciones a los eventos de clic de los botones
botonCrearContenedor.onclick = crearContenedorConColor;
botonEliminarContenedor.onclick = eliminarContenedor;

// Agrega los botones al DOM
app.appendChild(inputColor);
app.appendChild(botonCrearContenedor);
app.appendChild(botonEliminarContenedor);