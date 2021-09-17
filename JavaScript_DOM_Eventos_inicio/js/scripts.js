// querySelector
const heading = document.querySelector('.header__texto h2'); // 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading); 


// querySelectorAll
const enlaces  = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = 'Nuevo Texto para Enlace'
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');


// Generar nuevo enlace
const nuevoEnlace = document.createElement('A');

//Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Tienda';

//Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


/** Eventos */ 
// console.log(1);

// window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML estén listos.
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3);
// };

// document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes.
//     console.log(4);
// });

// console.log(5);


// window.onscroll = function(evento) {
//     console.log(evento);
// }


/** Seleccionar elementos y asociarles un evento */ 
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e) {
//     console.log(e);
//     e.preventDefault(); //Validar un formulario y evitar que se recarge la página

//     console.log('Enviando formulario');

// });


// Evento de los Inputs y Textarea

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento submit 
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    eliminarMensaje('.error'); 
    eliminarMensaje('.correcto');

    //Validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // Corta la ejecución del código
    }

    // Crear la alerta de Enviar Correctamente
    mostrarAlerta('Mensaje enviado correctamente');
});


function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // console.log(datos);s
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparezca depues de 2 segundos
    setTimeout(() => {
        alerta.remove();
    }, 2000);
}


function eliminarMensaje(clase){
    const mensaje = document.querySelector(clase);
    if(!mensaje){
        console.log('El elemento no exixte');
    }
    else{
        removeChild(mensaje);
    }
}