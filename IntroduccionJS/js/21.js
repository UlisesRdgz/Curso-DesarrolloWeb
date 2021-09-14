// Arrow functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiedo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);;

aprendiedo('JavaScript');


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
meses.forEach(mes => {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
let resultado = meses.includes('Marzo');

// Some ideal para arrelgos de objetos
resultado = carrito.some(producto => producto.nombre === 'camisa1');

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter
resultado = carrito.filter(producto => producto.precio < 100);

console.log(resultado);

