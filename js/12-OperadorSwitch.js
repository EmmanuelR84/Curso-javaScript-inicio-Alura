const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

let valorPasaje = 0;

console.log(`Verificando pasajes para ${ciudadDestino}`);

//Condición con if
// if(ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
//     if(ciudadDestino == 'Bogotá') {
//         valorPasaje = 500;
//     } else if(ciudadDestino == 'Lima') {
//         valorPasaje = 400;
//     } else if(ciudadDestino == 'Santiago') {
//         valorPasaje = 380;
//     } else if(ciudadDestino == 'Montevideo') {
//         valorPasaje = 200;
//     }
//     console.log(`El valor del pasaje es ${valorPasaje}`);
// } else {
//     console.log('Ciudad no disponible para viajar');
// }

// Con switch
switch (ciudadDestino) {
    case 'Bogotá':
        valorPasaje = 500;        
        break;
    case 'Lima':
        valorPasaje = 400;
        break;
    case 'Santiago':
        valorPasaje = 380;
        break;
    case 'Montevideo':
        valorPasaje = 200;
        break;
    default:
        console.log('Destino no disponible para viajar')
        break;
}
if(valorPasaje > 0) {
    console.log(`El valor del pasaje es: ${valorPasaje}`);
}