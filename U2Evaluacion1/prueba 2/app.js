const app = document.getElementById('app');
const selectedCards = new Set(); // Para almacenar las tarjetas seleccionadas

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
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    `;
    tableContainer.appendChild(table);
};

// Actualizar la tabla con cada registro nuevo
const updateTable = (name, occupation, age, color, cardId) => {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');
    row.dataset.cardId = cardId; // Identificador único de la tarjeta

    row.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td>${new Date().toLocaleTimeString()}</td>
        <td>${name}</td>
        <td>${occupation}</td>
        <td>${age}</td>
        <td style="background-color: ${color}">${color}</td>
        <td><button class="btn btn-danger btn-sm delete-row-btn">Eliminar</button></td>
    `;

    // Botón de eliminar fila
    row.querySelector('.delete-row-btn').addEventListener('click', () => {
        const card = document.getElementById(cardId);
        card && card.remove();
        row.remove();
    });

    tableBody.appendChild(row);
};

// Crear formulario
const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('p-4', 'border', 'rounded', 'bg-light', 'mb-4');

    // Campos del formulario
    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Nombre';
    const occupationInput = document.createElement('input');
    occupationInput.placeholder = 'Ocupación';
    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.placeholder = 'Edad (1-90)';
    const colorInput = document.createElement('input');
    colorInput.type = 'color';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    saveButton.type = 'button';

    form.append(nameInput, occupationInput, ageInput, colorInput, saveButton);
    saveButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const occupation = occupationInput.value.trim();
        const age = parseInt(ageInput.value);
        const color = colorInput.value;

        if (!name || !occupation || isNaN(age) || age <= 0 || age > 90) {
            Swal.fire('Error', 'Por favor, completa todos los campos correctamente.', 'error');
            return;
        }

        const cardId = `card-${Date.now()}`;
        createProfileCard(name, occupation, age, color, cardId);
        updateTable(name, occupation, age, color, cardId);
        Swal.fire('Tarjeta creada', 'Tu tarjeta ha sido creada exitosamente.', 'success');

        // Limpiar campos
        nameInput.value = '';
        occupationInput.value = '';
        ageInput.value = '';
        colorInput.value = '#ffffff';
    });

    app.parentElement.insertBefore(form, app);
};

// Crear tarjeta de perfil
const createProfileCard = (name, occupation, age, color, cardId) => {
    const card = document.createElement('div');
    card.id = cardId;
    card.classList.add('card', 'm-2', 'col-md-3', 'card-draggable');
    card.style.backgroundColor = color;
    card.draggable = true;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const nameEl = document.createElement('h5');
    nameEl.textContent = name;

    const occupationEl = document.createElement('p');
    occupationEl.textContent = `Ocupación: ${occupation}`;

    const ageEl = document.createElement('p');
    ageEl.textContent = `Edad: ${age}`;

    // Menú de opciones
    const optionsButton = document.createElement('button');
    optionsButton.innerHTML = '<i class="fas fa-cog"></i>';
    optionsButton.addEventListener('click', () => {
        Swal.fire({
            title: 'Opciones de tarjeta',
            html: `
                <button id="selectBtn" class="btn btn-secondary"><i class="fas fa-check"></i> Seleccionar</button>
                <button id="editBtn" class="btn btn-primary"><i class="fas fa-edit"></i> Editar</button>
                <button id="deleteBtn" class="btn btn-danger"><i class="fas fa-trash"></i> Eliminar</button>
            `,
            showConfirmButton: false,
            didOpen: () => {
                document.getElementById('selectBtn').onclick = () => selectedCards.has(cardId) ? selectedCards.delete(cardId) : selectedCards.add(cardId);
                document.getElementById('editBtn').onclick = () => editCard(card, nameEl, occupationEl, ageEl, cardId);
                document.getElementById('deleteBtn').onclick = () => card.remove();
            }
        });
    });

    cardBody.append(nameEl, occupationEl, ageEl, optionsButton);
    card.append(cardBody);
    app.append(card);
};

// Búsqueda de tarjetas
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(query) ? 'block' : 'none';
    });
});

// Inicializar Drag & Drop con Sortable.js
new Sortable(app, { animation: 150 });
createTable();
createForm();
