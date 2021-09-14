// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

// console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Ulises", trabajo: "Desarrollador"}, [1, 2, 3]];

// Acceder a los valores de una arreglo
// console.log(numeros[4]);


// Agregar elementos
numeros.push(60, 70, 80); // Agrega elementos al final del arreglo.
numeros.unshift(-10, -20, -30); //Agrega al comienzo del arreglo.


// Eliminar elementos
meses.pop(); // Elimina el último elemento.
meses.shift(); // Elimina el primer elemento.
meses.splice(2, 1); // Elimina el un elemento en la posición 2. 

console.table(numeros);
console.table(meses);

const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//Rest Operator o Spread Operator
const nuevoArreglo = [...meses2, 'Junio'];

console.log(nuevoArreglo);