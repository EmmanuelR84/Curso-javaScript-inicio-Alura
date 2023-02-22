// Definición de una lista con tipo de datos alfanuméricos
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago","Montevideo");

// Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina","Uruguay","Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

// Remover el primer elemento
ciudadesDisponibles.shift();

// Remover el último elemento
ciudadesDisponibles.pop();


// Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(`Los paises con mas de 6 letras: ${paisesFiltrados}`);

// Unificar los elementos en una cadena de caracteres
console.log(paisesDisponibles.join('-')); // Nos devolvera el listado con la separacion de un - entre cada elemento.

//Ordenar la lista de elementos
console.log(paisesDisponibles.sort()); // la ordena y queda ordenada

// Conociendo la posición
console.log(`Perú esta en la posicion: ${paisesDisponibles.indexOf('Perú')}`);

//Unificar dos listas
const listaPaisesYCIudades = paisesDisponibles.concat(ciudadesDisponibles); // .concat() no modifica la lista base

console.log(listaPaisesYCIudades);