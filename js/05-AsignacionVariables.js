// Palabra const
// Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;
const nombrePasajero = 'Loenardo';
const apellidoPasajero = 'Lacruz';

console.log(nombrePasajero);
console.log(apellidoPasajero);

// Palabra let
// Espacio de memoria que puede cambiar durante la ejecucion del programa
// El alcance si la declaramos dentro de un bloque, su alcance va a ser solo dentro de ese bloque y no global
let nombreCompletoPasajero = nombrePasajero + ' ' + apellidoPasajero;

console.log(nombreCompletoPasajero);

// Palabra var
// Espacio de memoria que puede cambiar durante la ejecucion del programa
// El alcance es global y bloque
var nombreCompletoDelPasajero = nombrePasajero + ' ' + apellidoPasajero;

//Bloque
{
    const pruebaConst = 'funciono const';
    let pruebaLet = 'funciono let';
    var pruebaVar = 'funciono var';
}
console.log(pruebaVar); // este orden es necesario porque cuando de error no seguira ejecutando codigo
console.log(pruebaConst);
console.log(pruebaLet);