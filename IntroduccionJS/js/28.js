// Classes

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
}

const producto = new Producto('Monitor Curvo', 800);
const producto1 = new Producto('Laptop', 300);

// Herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su SIBN es ${this.isbn} `;
    }
}

const libro = new Libro('JavaScript', 120, 21098342);

console.log(libro);
console.log(libro.formatearProducto());
console.log(producto1.formatearProducto());