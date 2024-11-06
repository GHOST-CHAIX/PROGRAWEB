// Seleccionamos el contenedor principal
const app = document.getElementById('app');

// Función para crear el formulario
const createForm = () => {
    const form = document.createElement('form');

    // Campo de nombre
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Nombre';
    nameInput.style.margin = '5px';
    
    // Campo de ocupación
    const occupationInput = document.createElement('input');
    occupationInput.type = 'text';
    occupationInput.placeholder = 'Ocupación';
    occupationInput.style.margin = '5px';

    // Selector de color
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.style.margin = '5px';

    // Botón de guardar
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    saveButton.type = 'button'; // Para evitar el submit del formulario
    saveButton.style.margin = '5px';

    // Agregar elementos al formulario
    form.appendChild(nameInput);
    form.appendChild(occupationInput);
    form.appendChild(colorInput);
    form.appendChild(saveButton);

    // Agregar evento al botón
    saveButton.addEventListener('click', () => {
        const name = nameInput.value;
        const occupation = occupationInput.value;
        const color = colorInput.value;

        if (name && occupation) {
            createProfileCard(name, occupation, color);
            nameInput.value = '';
            occupationInput.value = '';
            colorInput.value = '#ffffff';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Añadir el formulario al contenedor principal
    app.appendChild(form);
};

createForm();

// Función para crear una tarjeta de perfil
const createProfileCard = (name, occupation, color) => {
    const card = document.createElement('div');

    // Aplicar estilos de la tarjeta
    card.style.backgroundColor = color;
    card.style.padding = '20px';
    card.style.margin = '10px';
    card.style.borderRadius = '8px';
    card.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    card.style.color = '#333';
    card.style.position = 'relative';

    // Nombre
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    card.appendChild(nameElement);

    // Ocupación
    const occupationElement = document.createElement('p');
    occupationElement.textContent = occupation;
    card.appendChild(occupationElement);

    // Botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.style.position = 'absolute';
    deleteButton.style.bottom = '10px';
    deleteButton.style.right = '10px';
    deleteButton.style.backgroundColor = '#ff5e5e';
    deleteButton.style.border = 'none';
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.color = '#fff';
    deleteButton.style.cursor = 'pointer';

    // Agregar efecto hover al botón de eliminar
    deleteButton.addEventListener('mouseover', () => {
        deleteButton.style.backgroundColor = '#ff1e1e';
    });
    deleteButton.addEventListener('mouseout', () => {
        deleteButton.style.backgroundColor = '#ff5e5e';
    });

    // Agregar evento para eliminar la tarjeta
    deleteButton.addEventListener('click', () => {
        card.remove();
    });

    card.appendChild(deleteButton);

    // Agregar la tarjeta al contenedor principal
    app.appendChild(card);
};
