import indices_manuales from "./mod-indices.js";

console.log("in", indices_manuales.cbt_manual);

let cba = Math.trunc(indices_manuales.cba_manual * 3.09);
let cbt = Math.trunc(indices_manuales.cbt_manual * 3.09);
let mes = indices_manuales.mes_cba_cbt_manual;
let cbt_alquiler_2amb = cbt + indices_manuales.alquilerProm2amb;
let cbt_alquiler_3amb = cbt + indices_manuales.alquilerProm3amb;

function calcular_cba() {
    let view_cba = document.querySelector(".view_cba");
    view_cba.innerHTML = `<span class="card_cba_value">  $${cba} </span>`;
}

function calcular_cbt() {
    let view_cbt = document.querySelector(".view_cbt");
    view_cbt.innerHTML = `<span class="card_cba_value">  $${cbt} </span>`;
}

function calcular_cbt_y_alquiler(personas, edad) {
    let view_cbt_alquiler_3amb = document.querySelector(".view_cbt_alquiler_3amb");
    view_cbt_alquiler_3amb.innerHTML = `<span class="card_cba_value">  $${cbt_alquiler_3amb} </span>`;
    // let view_cbt_alquiler_2amb = document.querySelector(".view_cbt_alquiler_2amb");
    // view_cbt_alquiler_2amb.innerHTML = `<span class="card_cba_value">  $${cbt_alquiler_2amb} </span>`;
}

function linea_indigencia() {
    let linea_indigencia = document.querySelector(".linea_indigencia");
    linea_indigencia.innerHTML = `<span class="linea_vineta">»</span> Indigentes con Casa Propia, ingresos por mes menores a: $${cba}`;
}

function linea_pobreza() {
    let linea_pobreza = document.querySelector(".linea_pobreza");
    linea_pobreza.innerHTML = `» Pobres con Casa Propia, si ingreso por mes menor a: $${cbt}`;
}

function linea_pobreza_alquilando() {
    let linea_pobreza_alquilando = document.querySelector(".linea_pobreza_alquilando");
    linea_pobreza_alquilando.innerHTML = `» Pobres Sin Casa Propia, ALQUILANDO, si ingreso por mes menor a:   $${cbt_alquiler_3amb} `;
}

calcular_cba();
calcular_cbt();
calcular_cbt_y_alquiler();
linea_indigencia();
linea_pobreza();
linea_pobreza_alquilando();

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
    "edad_18-29": { mujer: 0.76, varon: 1.02 },
    "edad_30-45": { mujer: 0.76, varon: 1.0 },
    "edad_46-60": { mujer: 0.76, varon: 1.0 },
    "edad_61-75": { mujer: 0.67, varon: 0.83 },
    "edad_76-99": { mujer: 0.63, varon: 0.74 },
};

let count = 0;

/* Agregar personas a la tabla */
document.getElementById("person-form").addEventListener("submit", function (e) {
    e.preventDefault();
    count = count + 1;

    // Obtener los valores del formulario
    const age = document.getElementById("age").value;

    if (parseInt(age) < 0) {
        age = document.getElementById("age").value = age * -1;
    }

    // Obtener el valor seleccionado del select
    const selectElement = document.getElementById("person-type");
    const person_type = selectElement.value;

    // Crear un elemento de lista para mostrar la persona
    // const li = document.createElement("li");
    // li.textContent = `${person_type}  |  Edad: ${age}`;

    const tr_person = document.createElement("tr");
    tr_person.id = `person-list-row${count}`;

    const th_type = document.createElement("th");
    th_type.textContent = `${person_type}`;

    const td_age = document.createElement("td");
    td_age.textContent = `${age}`;

    // Agregar el elemento a la lista
    document.getElementById("person-list").appendChild(tr_person);
    document.getElementById(`person-list-row${count}`).appendChild(th_type);
    document.getElementById(`person-list-row${count}`).appendChild(td_age);

    // Limpiar el formulario
    document.getElementById("person-form").reset();
});






document.addEventListener('DOMContentLoaded', function() {
    const selectedAge = document.getElementById('selected-age');
    const ageOptions = document.getElementById('age-options');
    const ageInput = document.getElementById('age');

    // Mostrar/ocultar las opciones al hacer clic
    selectedAge.addEventListener('click', function() {
        ageOptions.classList.toggle('open');
    });

    // Manejar la selección de una opción
    document.querySelectorAll('.age-option').forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const text = this.textContent;

            selectedAge.textContent = text;
            ageInput.value = value;

            ageOptions.classList.remove('open');
        });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!selectedAge.contains(e.target) && !ageOptions.contains(e.target)) {
            ageOptions.classList.remove('open');
        }
    });
});

