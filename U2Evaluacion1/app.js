const app = document.getElementById('app');

// Crear la tabla para el registro
const createTable = () => {
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-bordered');
    table.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th>Hora</th>
                <th>Nombre</th>
                <th>Ocupación</th>
                <th>Edad</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    `;
    tableContainer.appendChild(table);
};

const updateTable = (name, occupation, age, color) => {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td>${new Date().toLocaleTimeString()}</td>
        <td>${name}</td>
        <td>${occupation}</td>
        <td>${age}</td>
        <td style="background-color: ${color}">${color}</td>
    `;

    tableBody.appendChild(row);
};

// Crear el formulario
const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('p-4', 'border', 'rounded', 'bg-light', 'mb-4');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Nombre';
    nameInput.classList.add('form-control', 'mb-2');

    const occupationInput = document.createElement('input');
    occupationInput.type = 'text';
    occupationInput.placeholder = 'Ocupación';
    occupationInput.classList.add('form-control', 'mb-2');

    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.placeholder = 'Edad (entre 1 y 90)';
    ageInput.classList.add('form-control', 'mb-2');

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.classList.add('form-control', 'mb-2');

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    saveButton.classList.add('btn', 'btn-primary', 'mt-2');
    saveButton.type = 'button';

    form.appendChild(nameInput);
    form.appendChild(occupationInput);
    form.appendChild(ageInput);
    form.appendChild(colorInput);
    form.appendChild(saveButton);

    saveButton.addEventListener('click', () => {
        const name = nameInput.value;
        const occupation = occupationInput.value;
        const age = parseInt(ageInput.value);
        const color = colorInput.value;

        if (!name || !occupation || isNaN(age) || age <= 0 || age > 90) {
            Swal.fire('Error', 'Por favor, completa todos los campos correctamente.', 'error');
            return;
        }

        createProfileCard(name, occupation, age, color);
        updateTable(name, occupation, age, color);

        Swal.fire('Éxito', 'Tarjeta de perfil creada exitosamente.', 'success');

        nameInput.value = '';
        occupationInput.value = '';
        ageInput.value = '';
        colorInput.value = '#ffffff';
    });

    app.appendChild(form);
};

createForm();
createTable();

const createProfileCard = (name, occupation, age, color) => {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.backgroundColor = color;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-white');

    const nameElement = document.createElement('h5');
    nameElement.textContent = name;
    nameElement.classList.add('card-title');

    const occupationElement = document.createElement('p');
    occupationElement.textContent = `Ocupación: ${occupation}`;
    occupationElement.classList.add('card-text');

    const ageElement = document.createElement('p');
    ageElement.textContent = `Edad: ${age}`;
    ageElement.classList.add('card-text');

    const menuButton = document.createElement('button');
    menuButton.classList.add('btn', 'btn-secondary', 'mr-2');
    menuButton.innerHTML = '<i class="fas fa-cog"></i>';

    menuButton.addEventListener('click', () => {
        Swal.fire({
            title: 'Opciones',
            html: `
                <button id="editButton" class="btn btn-primary"><i class="fas fa-edit"></i> Editar</button>
                <button id="colorButton" class="btn btn-info"><i class="fas fa-palette"></i> Cambiar Color</button>
                <button id="deleteButton" class="btn btn-danger"><i class="fas fa-trash"></i> Eliminar</button>
            `,
            showConfirmButton: false,
            didOpen: () => {
                document.getElementById('editButton').addEventListener('click', () => {
                    Swal.fire({
                        title: 'Editar Información',
                        html: `
                            <input id="newName" class="swal2-input" placeholder="Nuevo Nombre" value="${name}">
                            <input id="newOccupation" class="swal2-input" placeholder="Nueva Ocupación" value="${occupation}">
                            <input id="newAge" type="number" class="swal2-input" placeholder="Nueva Edad (entre 1 y 90)" value="${age}">
                        `,
                        confirmButtonText: 'Guardar Cambios',
                        preConfirm: () => {
                            const newName = document.getElementById('newName').value;
                            const newOccupation = document.getElementById('newOccupation').value;
                            const newAge = parseInt(document.getElementById('newAge').value);

                            if (newName && newOccupation && !isNaN(newAge) && newAge > 0 && newAge <= 90) {
                                nameElement.textContent = newName;
                                occupationElement.textContent = `Ocupación: ${newOccupation}`;
                                ageElement.textContent = `Edad: ${newAge}`;
                            } else {
                                Swal.showValidationMessage('Por favor, introduce valores válidos.');
                                return false;
                            }
                        }
                    });
                });

                document.getElementById('colorButton').addEventListener('click', () => {
                    Swal.fire({
                        title: 'Selecciona un color',
                        input: 'color',
                        inputValue: color,
                        showCancelButton: true,
                        confirmButtonText: 'Cambiar',
                        preConfirm: (newColor) => {
                            card.style.backgroundColor = newColor;
                        }
                    });
                });

                document.getElementById('deleteButton').addEventListener('click', () => {
                    card.remove();
                    Swal.fire('Eliminado', 'La tarjeta ha sido eliminada', 'info');
                });
            }
        });
    });

    cardBody.appendChild(nameElement);
    cardBody.appendChild(occupationElement);
    cardBody.appendChild(ageElement);
    cardBody.appendChild(menuButton);
    card.appendChild(cardBody);

    app.appendChild(card);
};
