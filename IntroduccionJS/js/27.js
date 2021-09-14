

// Object Contructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

// Crear funciones quie solo se utilizan en un objeto especifico.
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`
}

const cliente = new Cliente('Ulises', 'Rodríguez');


console.log(cliente);
console.log(cliente.formatearCliente());