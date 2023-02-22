const datos = [
  {
    ciudad: "Bogotá",
    precio: 500,
  },
  {
    ciudad: "Lima",
    precio: 400,
  },
  {
    ciudad: "Santiago",
    precio: 380,
  },
  {
    ciudad: "Montevideo",
    precio: 200,
  },
];

let presupuestoDisponible = 600;

// while (i < datos.length && datos[i].precio > presupuestoDisponible) {
//     i++;
// }
// if(i == datos.length) {
//     console.log('No tenemos pasajes disponibles');
// } else {
//     console.log(`Puedes comprar pasaje a: ${datos[i].ciudad}`);
// }

let ciudadSeleccionada = "";
// for... valor inicial para un valor final
for (let i = 0; i < datos.length; i++) {
  if (datos[i].precio <= presupuestoDisponible) {
    ciudadSeleccionada = datos[i].ciudad;
    //break;
  }
}

if (ciudadSeleccionada == "") {
  console.log("No tenemos pasajes disponibles");
} else {
  console.log(`puedes comprar pasajes a: ${ciudadSeleccionada}`);
}
