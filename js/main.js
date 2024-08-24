// main.js
import { year } from './mod-date.js';
import { version } from './mod-version.js';
import indices_manuales from "./mod-indices.js";

// yearUpdated
const yearUpdated = document.querySelector(".copyleftYear").innerHTML = year;
// version
const versionUpdated = document.querySelector(".version").innerHTML = version;


// /* TABLA CANASTA PERSONALIZADA +++++++++++++++++++++++++++++++++++++++++++ */
// let count = 0;
// /* Agregar personas a la tabla */
// document.getElementById("person-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     count = count + 1;

//     // Obtener los valores del formulario
//     const age = document.getElementById("age").value;

//     if (parseInt(age) < 0) {
//         age = document.getElementById("age").value = age * -1;
//     }

//     console.log('age', age);
    

//     // Obtener el valor seleccionado del select
//     const selectElement = document.getElementById("gender");
//     const person_type = selectElement.value;

//     console.log('person_type', person_type);
    

//     // Crear un elemento de lista para mostrar la persona
//     // const li = document.createElement("li");
//     // li.textContent = `${person_type}  |  Edad: ${age}`;

//     const tr_person = document.createElement("tr");
//     tr_person.id = `person-list-row${count}`;

//     const th_type = document.createElement("th");
//     th_type.textContent = `${person_type}`;

//     const td_age = document.createElement("td");
//     td_age.textContent = `${age}`;

//     console.log("td_age,", age);

//     if (age === "") {
//         document.getElementById("message_error_age").style.display = "block";
//         document.getElementById("message_error_age").innerHTML = "Debe ingresar una edad válida";
//     }

//     // Agregar el elemento a la lista
//     document.getElementById("person-list").appendChild(tr_person);
//     document.getElementById(`person-list-row${count}`).appendChild(th_type);
//     document.getElementById(`person-list-row${count}`).appendChild(td_age);

//     // Limpiar el formulario
//     document.getElementById("person-form").reset();


// });





// tabla equivalencias personas
const tabla_equivalentes = {
  edad_0: { mujer: 0.35, varon: 0.35 },
  edad_1: { mujer: 0.37, varon: 0.37 },
  edad_2: { mujer: 0.46, varon: 0.46 },
  edad_3: { mujer: 0.51, varon: 0.51 },
  edad_4: { mujer: 0.55, varon: 0.55 },
  edad_5: { mujer: 0.6, varon: 0.6 },
  edad_6: { mujer: 0.64, varon: 0.64 },
  edad_7: { mujer: 0.66, varon: 0.66 },
  edad_8: { mujer: 0.68, varon: 0.68 },
  edad_9: { mujer: 0.69, varon: 0.69 },
  edad_10: { mujer: 0.7, varon: 0.79 },
  edad_11: { mujer: 0.72, varon: 0.82 },
  edad_12: { mujer: 0.74, varon: 0.85 },
  edad_13: { mujer: 0.76, varon: 0.9 },
  edad_14: { mujer: 0.76, varon: 0.96 },
  edad_15: { mujer: 0.77, varon: 1.0 },
  edad_16: { mujer: 0.77, varon: 1.0 },
  edad_17: { mujer: 0.77, varon: 1.04 },
  edad_18_29: { mujer: 0.76, varon: 1.02 },
  edad_30_45: { mujer: 0.76, varon: 1.0 },
  edad_46_60: { mujer: 0.76, varon: 1.0 },
  edad_61_75: { mujer: 0.67, varon: 0.83 },
  edad_76_99: { mujer: 0.63, varon: 0.74 },
};

// tabla_equivalentes.edad_61_75.mujer;
// tabla_equivalentes.edad_61_75.varon;

// console.log("edad_61_75.mujer", tabla_equivalentes.edad_61_75.mujer);
// console.log("edad_61_75.varon", tabla_equivalentes.edad_61_75.varon);











