// Operadores de comparación

const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array(
  "Bogotá",
  "Lima",
  "Santiago",
  "Montevideo"
);

//Palabra reservada if
//Evalua una condición
// console.log(`Verificando pasajes para ${ciudadDestino}`);
// if(ciudadesDisponibles.indexOf(ciudadDestino) >= 0) { // Aquí preguntamos si ciudad de destino esta dentro de ciudadesDisponibles
//     console.log('Pasaje disponible para venta');
// } else {
//     console.log('Destino no disponible');
// }

const valorPasaje = 1000;
if (valorPasaje === 1000) {
  // === es estricto, compara valor y tipo de dato. Mientras que == solo compara el valor
  console.log(`El valor del pasaje es ${valorPasaje}`);
}

// Operadores lógicos
// Y (and) - O (or) - NO (not)
// and  = &&  Se deben complir las dos condiciones
// or = ||    Se debe cumplir al menos una condición
// not = !    no se debe complir la condición
let edadPasajero = 19;
let estaAcompaniado = true;

if (edadPasajero >= 18 || estaAcompaniado) {
  if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para venta");
  } else {
    console.log("Destino no disponible");
  }
}

// Aplicando lógica negativa
edadPasajero = 17;
estaAcompaniado = false;

if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 18 || estaAcompaniado))) {
  console.log("Pasaje disponible para venta");
} else {
  console.log("Destino no disponible");
}
