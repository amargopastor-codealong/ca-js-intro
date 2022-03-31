// PARTE 1

//Capturamos elemento del HTML para insertar más HTML tras el mismo:
let root_element = document.getElementById("root");
console.log(root_element);

//añadimos question1 div
let q1Div = document.createElement("div");
root_element.append(q1Div);

//añadimos div lista de resultados
let resultsList = document.createElement("ul");
root_element.append(resultsList);

//añadimos question2 div
let q2Div = document.createElement("div");
root_element.append(q2Div);

//añadimos div lista de resultados
let resultsList_2 = document.createElement("ul");
root_element.append(resultsList_2);

let question1 = document.createElement("p");
question1.innerHTML = "¿Cuál es mi masa por gravedad en la Tierra?";
q1Div.append(question1);

//añadimos input
let entradaTexto = document.createElement("input");
q1Div.append(entradaTexto);

//añadimos botón
let button = document.createElement("button");
button.innerHTML = "Calcular";
q1Div.append(button);

//añadimos html
let question2 = document.createElement("p");
question2.innerHTML =
  "¿Has descubierto un nuevo planeta?Indica su nombre y la masa que registra!";
q2Div.append(question2);

//añadimos input
let nuevo_planeta_name = document.createElement("input");
nuevo_planeta_name.placeholder = "Escriba el nombre";
q2Div.append(nuevo_planeta_name);

//añadimos input
let nuevo_planeta_gravedad = document.createElement("input");
nuevo_planeta_gravedad.placeholder = "Indique la gravedad";
q2Div.append(nuevo_planeta_gravedad);

//añadimos botón
let nuevo_planeta_button = document.createElement("button");
nuevo_planeta_button.innerHTML = "Añadir!";
q2Div.append(nuevo_planeta_button);

//añadimos evento click y función
button.addEventListener("click", function () {
  // Value del campo input:
  let peso = entradaTexto.value;
  // Comprobamos si existe valor
  if (peso.length) {
    // limpiamos elementos para no acumular los resultados tras cada "click":
    resultsList.innerHTML = "";
    // iniciamos un contador para que nos ayude a salir del bucle while llegado el caso:
    let num = 0;
    // bucle while:
    while (num < listadoPlanetasCompleto.length) {
      let li = document.createElement("li");
      // En cada vuelta del bucle extraemos el nombre del planeta correspondiente desde el archivo listadoPlanetasCompleto.js:
      let planeta = Object.keys(listadoPlanetasCompleto[num]);
      // Y extraemos el value del planeta:
      let gravedad = listadoPlanetasCompleto[num][planeta];
      let calc_round = Math.round((gravedad * peso) * 100) / 100
      li.appendChild(
        document.createTextNode(
          `Tu peso en ${planeta} es de ${calc_round} newtons`,
        ),
      );
      // Añadimos el elemento li generado al ul
      resultsList.appendChild(li);
      // incrementamos el contador num para, llegado el caso, poder salir del bucle:
      num++;
    }
  }
});

// PARTE 2: Discovering a new planet

nuevo_planeta_button.addEventListener("click", function () {
  let nombre = nuevo_planeta_name.value;
  let gravedad = nuevo_planeta_gravedad.value;
  let peso = entradaTexto.value;
  if (nombre.length && gravedad.length && peso.length) {
    resultsList_2.innerHTML = "";
    let li = document.createElement("li");
    let calc_round = Math.round((gravedad * peso) * 100) / 100
    li.appendChild(
      document.createTextNode(
        `Tu peso en ${nombre} es de ${calc_round} newtons`,
      ),
    );
    resultsList_2.appendChild(li);
  }
});

// PARTE 3: Links to documentation

let docDiv = document.createElement("div");
root_element.append(docDiv);

let parrafo = document.createElement("p");
parrafo.innerHTML = "Documentación:";
docDiv.append(parrafo);

let docList = document.createElement("ul");
docDiv.append(docList);

for (let i = 0; i < doc.length; i++) {
  let key = Object.keys(doc[i]);
  let val = Object.values(doc[i]);
  let li = document.createElement("li");
  let a = document.createElement("a");
  let linkText = document.createTextNode(key);
  a.appendChild(linkText);
  a.setAttribute("href", val);
  a.setAttribute("target", "_blank");
  li.appendChild(a);
  docList.appendChild(li);
}
