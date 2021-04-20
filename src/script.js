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

let equipo = 0.2;

console.log(mi_masa - mi_masa * Tierra * equipo);

// Tipos de variables (string, number)
let intro = "Mi nombre es Marcos y en este planeta peso ";
console.log(intro);
console.log(typeof intro);

let data = mi_masa - mi_masa * Tierra * equipo;
console.log(typeof data);

console.log(intro, data);

// Errores
// let Tierra = 1.87;
let Tierra2 = 1.87;
console.log(mi_masa - mi_masa * Tierra2 * equipo);
// Uncaught SyntaxError: Identifier 'Tierra' has already been declared

//6.Operaciones &6 boleans & Condiciones if() {} else if() {} else {}
let oxigeno = true;

if (oxigeno) {
  console.log("Puedo respirar!");
} else {
  console.log("Ayudagghghghg!");
}

oxigeno = false;
if (oxigeno || equipo) {
  console.log("Puedo respirar y caminar!");
} else {
  console.log("Ayudagghghghg!");
}

if (equipo <= 0.2) {
  console.log("Todo controlado");
} else {
  console.log("No levanto cabeza!");
}

console.log(typeof equipo);
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

// 11.Ejercicio

// let listadoPlanetasCompleto = [
//   { Mercurio: 3.7 },
//   { Venus: 8.87 },
//   { Tierra: 1 },
//   { Marte: 3.71 },
//   { Jupiter: 23.12 },
//   { Saturno: 8.96 },
//   { Urano: 8.69 },
//   { Neptuno: 11 },
//   { Pluton: 0.81 },
// ];

// PARTE 1

//Capturamos elemento del HTML para insertar más HTML tras el mismo:
let root_element = document.getElementById("root");
console.log(root_element);

//añadimos html
let parrafo = document.createElement("p");
parrafo.innerHTML = "¿Cual es su masa por gravedad en la Tierra?";
root_element.append(parrafo);

//añadimos input
let entradaTexto = document.createElement("input");
root_element.append(entradaTexto);

//añadimos botón
let button = document.createElement("button");
button.innerHTML = "Calcular";
root_element.append(button);

//añadimos evento click y función
button.addEventListener("click", function () {
  // Value del campo input:
  let peso = entradaTexto.value;
  // Comprobamos si existe valor
  if (peso.length) {
    // Obtenemos el elemento sobre el que vamos a pintar
    let ul = document.getElementById("results");
    // limpiamos elementos para no acumular los resultados tras cada "click":
    ul.innerHTML = "";
    // Título de la sección:
    let innerP = document.createElement("p");
    innerP.innerHTML = "Resultados:";
    ul.append(innerP);
    // iniciamos un contador para que nos ayude a salir del bucle while llegado el caso:
    let num = 0;
    // bucle while:
    while (num < listadoPlanetas.length) {
      let li = document.createElement("li");
      // En cada vuelta del bucle extraemos el nombre del planeta correspondiente desde el archivo listadoPlanetasCompleto.js:
      let planeta = Object.keys(listadoPlanetasCompleto[num]);
      // Y extraemos el value del planeta:
      let gravedad = listadoPlanetasCompleto[num][planeta];
      li.appendChild(
        document.createTextNode(
          `Su peso en ${planeta} es de ${gravedad * peso} newtons`,
        ),
      );
      // Añadimos el elemento li generado al ul
      ul.appendChild(li);
      // incrementamos el contador num para, llegado el caso, poder salir del bucle:
      num++;
    }
  }
});

// PARTE 2

//añadimos html
parrafo = document.createElement("p");
parrafo.innerHTML =
  "¿Ha descubierto un nuevo planeta?¡Indique su nombre y la masa que registra!";
root_element.append(parrafo);

//añadimos input
let nuevo_planeta_name = document.createElement("input");
nuevo_planeta_name.placeholder = "Escriba el nombre";
root_element.append(nuevo_planeta_name);

//añadimos input
let nuevo_planeta_gravedad = document.createElement("input");
nuevo_planeta_gravedad.placeholder = "Indique la gravedad";
root_element.append(nuevo_planeta_gravedad);

//añadimos botón
let nuevo_planeta_button = document.createElement("button");
nuevo_planeta_button.innerHTML = "Añadir!";
root_element.append(nuevo_planeta_button);
nuevo_planeta_button.addEventListener("click", function () {
  // YOUR CODE GOES HERE
});

// PARTE 3

parrafo = document.createElement("p");
parrafo.innerHTML = "Documentación:";
document.getElementById("docs").append(parrafo);

for (let i = 0; i < doc.length; i++) {
  let key = Object.keys(doc[i]);
  let val = Object.values(doc[i]);
  let ul = document.getElementById("docs");
  let li = document.createElement("li");
  let a = document.createElement("a");
  let linkText = document.createTextNode(key);
  a.appendChild(linkText);
  a.setAttribute("href", val);
  a.setAttribute("target", "_blank");
  li.appendChild(a);
  ul.appendChild(li);
}
