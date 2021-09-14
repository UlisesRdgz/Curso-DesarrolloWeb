// Array methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'camisa1', precio: 300},
    {nombre: 'camisa2', precio: 400},
    {nombre: 'camisa3', precio: 150},
    {nombre: 'camisa4', precio: 200},
    {nombre: 'camisa5', precio: 20},
    {nombre: 'camisa6', precio: 100},
]

// forEach
meses.forEach(function(mes) {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
let resultado = meses.includes('Marzo');

// Some ideal para arrelgos de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'camisa1'
});

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);

// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio < 100    
});

console.log(resultado);
