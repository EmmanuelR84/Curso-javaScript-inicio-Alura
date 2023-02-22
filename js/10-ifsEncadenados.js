const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
let edadPasajero = 16;
let estaAcompaniado = true;

console.log(`Verificando pasajes a ${ciudadDestino}`);
//Verificamos que el pasajero cumpla las reglas
if(edadPasajero >= 18 || estaAcompaniado) {
  //Evaluamos si la ciudad esta disponible
  if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para venta");
  } else {
    console.log("Destino no disponible");
  }
} else {
  if(edadPasajero >= 16 && ciudadDestino == 'Lima') {
    console.log('Pasaje disponible para venta');
  } else {
    console.log('Pasajero no cumple las reglas');
  }
}