// Declaración de Función

sumar();
function sumar() {
    console.log(10+10);
}

// Expresión de la función
sumar2();
const sumar2 = function() {
    console.log(3+3);
}

// IIFE
(function() {
    console.log('Esto es una función');
})();

// HOISTING - Declaraciones de variables y funciones son físicamente movidas al comienzo del código.
