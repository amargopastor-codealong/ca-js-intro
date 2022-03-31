// 3.console.log
console.log("Hello world");

// 5.Variables
console.log(70);
let mi_masa = 70;
console.log(mi_masa);

// Peso (N) = Masa (kg) x Gravedad
// Esta masa es constante en todos los planetas.

// Gravedad:
// Mercurio: 3,70 m/s(2)
// Venus: 8,87 m/s(2)
// Marte: 3,71 m/s(2)
// Júpiter: 23,12 m/s(2)
// Saturno: 8,96 m/s(2)
// Urano: 8,69 m/s(2)
// Neptuno: 11 m/s(2)
// Plutón: 0,81 m/s(2)

let Tierra = 1;
let Marte = 3.71;
let Jupiter = 23.12;

console.log(mi_masa * Tierra);
console.log(mi_masa * Marte);
console.log(mi_masa * Jupiter);

let space_suit = 0.2;

console.log(mi_masa - mi_masa * Tierra * space_suit);

// Tipos de variables (string, number)
let intro = "Mi nombre es Marcos y en este planeta peso ";
console.log(intro);
console.log(typeof intro);

let data = mi_masa - mi_masa * Tierra * space_suit;
console.log(typeof data);

console.log(intro, data);

// Errores
// let Tierra = 1.87;
let Tierra2 = 1.87;
console.log(mi_masa - mi_masa * Tierra2 * space_suit);
// Uncaught SyntaxError: Identifier 'Tierra' has already been declared

//6.Operaciones &6 boleans & Condiciones if() {} else if() {} else {}
let oxigeno = true;

if (oxigeno) {
  console.log("Puedo respirar!");
} else {
  console.log("Ayudagghghghg!");
}

oxigeno = false;
if (oxigeno || space_suit) {
  console.log("Puedo respirar y caminar!");
} else {
  console.log("Ayudagghghghg!");
}

if (space_suit <= 0.2) {
  console.log("Todo controlado");
} else {
  console.log("No levanto cabeza!");
}

console.log(typeof space_suit);
console.log(typeof data);
console.log(typeof intro);
console.log(typeof oxigeno);

// 7. array + push() + pop()

let listado = [];
let listado2 = new Array();

let listadoPlanetas = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Jupiter",
  "Saturno",
  "Urano",
  "Neptuno",
  "Pluton",
];

console.log(listadoPlanetas.length);
console.log(listadoPlanetas);
console.log(listadoPlanetas[0]);
console.log(listadoPlanetas[2]);

// 8.comentarios

// 9.funciones
console.log(
  "Mi nombre es Marcos y estoy de visita en el planeta",
  listadoPlanetas[0],
);
console.log(
  "Mi nombre es Marcos y estoy de visita en el planeta",
  listadoPlanetas[1],
);
console.log(
  "Mi nombre es Marcos y estoy de visita en el planeta",
  listadoPlanetas[2],
);

function reporte(i) {
  console.log(
    "Mi nombre es Marcos y estoy de visita en el planeta",
    listadoPlanetas[i],
  );
}

reporte(8);

// 10.bucle for

for (let i = 0; i < 9; i++) {
  //   console.log(i);
  //   reporte(i);
}

function reporte2(i) {
  if (i >= 0 && i < 9) {
    console.log(
      "Mi nombre es Marcos y estoy de visita en el planeta",
      listadoPlanetas[i],
    );
  } else {
    console.log("Usted ha abandonado el Sitema Solar");
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i);
  reporte2(i);
}