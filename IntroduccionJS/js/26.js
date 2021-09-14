// This

const reservacion = {
    nombre: 'Juan',
    apellido: 'De La Torre',
    total: 5000,
    pagado: false,
    informacion: () => console.log(`El cliente ${this.nombre} reservó`), //Función de arrow hace referencia a la ventana e imprimira "undefined"
}

const reservacion2 = {
    nombre: 'Alan',
    apellido: 'De La Torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó`); //Hace referencia al nombre del objeto en este caso Alan.
    }
}

reservacion.informacion();
reservacion2.informacion();