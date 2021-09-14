const carrito = [
    {nombre: 'camisa1', precio: 300},
    {nombre: 'camisa2', precio: 400},
    {nombre: 'camisa3', precio: 150},
    {nombre: 'camisa4', precio: 200},
    {nombre: 'camisa5', precio: 20},
    {nombre: 'camisa6', precio: 100},
]

//ForEach - Iterar.
carrito.forEach(producto => console.log(producto.nombre));

//Map - Crear un nuevo arreglo.
carrito.map(producto => console.log(producto.nombre));