const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

// Definición de una lista con tipo de datos alfanuméricos
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");

// Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];

paisesDisponibles.push("Uruguay"); // .push() agrega al final de la lista
ciudadesDisponibles.push("Montevideo");

paisesDisponibles.unshift("Ecuador"); // .unshift() agrega al comienzo de la lista
ciudadesDisponibles.unshift("Quito");

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

// Mostrando el primer elemento de la lista
console.log(ciudadesDisponibles[0]);
console.log(paisesDisponibles[0]);

// Quitar-cantidad-agregar
paisesDisponibles.splice(1,2,'Venezuela', 'Paraguay'); //posicion - cant. a eliminar (elimina la posicion 1 y la siguiente[1y2]) - agregar
console.log(paisesDisponibles);