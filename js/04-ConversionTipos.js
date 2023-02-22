//Tipo de datos
// Alfanumerico
let nombrePasajero = 'Pedro Silva';
console.log(nombrePasajero);

// Numerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

// Logico
let boletoActivo = true;
console.log(boletoActivo);

// Operaciones aritmeticas
// Suma
let totalBoletos = valorBoleto + porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);

// Orden de presedencia
// ()
// * y /
// + y -
let totalBoletos2 = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos2);


// Concatenacion de textos
let nombrePasajero2 = 'Leonardo';
let apellidoPasajero2 = 'Lacruz';

let nombreCompleto = nombrePasajero2 + ' ' + apellidoPasajero2;
let pasaporte = '1000' + '12'; // string - js concatena
let multiplicacion = '1000' * '10'; // string - js reconoce el operador / yu los convierte a number
let division = parseInt('1000') / parseFloat('10'); // string - obligamos a js a convertir en number (Int=entero / Float=decimal)

console.log('Pasajero: ' + nombreCompleto);
console.log('Pasaporte N°: ' + pasaporte);
console.log('Resultado: ' + multiplicacion);
console.log('Resultado: ' + division);

let noEsUnNumero = parseInt('asderhglm');
console.log(noEsUnNumero); // Devolvera NaN (not a number);