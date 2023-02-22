const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

let edadPasajero = 18;
let estaAcompaniado = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

// A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && edadPasajero >= 18 && tienePasaporte && !estaCasado) {
  console.log("Paquete para solteros disponible para venta");
} else {
  console.log("Destino no disponible o el pasajero no cumple con las reglas");
}