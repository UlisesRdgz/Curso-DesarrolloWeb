"use strict"; // Correr JavaScript en modo estricto.
//Objetos 

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio :          300,
    disponible :      true,
};

Object.freeze(producto); // .freeze no te permite agregar nuevos elementos, tampoco eliminarlos o modificarlos.
Object.seal(); // .seal no te permite agregar o borrar, pero si te permite modificar.

// producto.imagen = 'imagen.jpg';

console.log(Object.isExtensible(producto));

console.log(producto);