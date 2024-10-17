document.title = 'Iniciar Sesion';
//-------------------------------

//Crear el contenedor del formulario
const container = document.createElement('div');
container.style.margin = "20px";


//*Crear el titulo

const title = document.createElement('h2');
title.textContent = ('Iniciar Sesion');
container.appendChild(title);

//!Crear el formulario
const form = document.createElement('form');

//?Crear el campo de nombre de usuario

const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre de Usuario';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);

//!Crear el campo de contraseña del usuario

const password = document.createElement('label');
password.textContent = 'Contraseña';
const passwordInput = document.createElement('input');
passwordInput.type = 'text';
usernameInput.required = true;

form.appendChild(password);
form.appendChild(passwordInput);

/ Crear el boton de envio*/

const submitBotton = document.createElement('button');
submitBotton.textContent = 'Iniciar Sesion';
form.appendChild(submitBotton);

//!Mensaje de respuesta

const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

//*Crear cuerpo del body

document.body.appendChild(container);


//?Datos de sesion predefinida 

const validarUser = 'Valentina';
const validarPassword = '789466523fssdfs';

//!Validar el use y el pass

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    //?Validar el envio de los datos

    if(usernameInput.value === validarUser && passwordInput.value === validarPassword ) {
        message.textContent = 'Bienvenido';
        message.style.color = 'green';
        alert('Esta validado')
    }else{
        message.textContent = 'Nombre de usuario o Contraseña incorrecta'
        message.style.color = 'red';
    }

    //*Limpiar los inputs
    usernameInput.value = '';
    passwordInput.value = '';


    


});

