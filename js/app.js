import indices_manuales from "./mod-indices.js";
import tabla_equivalentes from './mod-canasta-custom.js';

console.log("tabla_equivalentes[0].mujer", tabla_equivalentes[0].mujer);

// console.log("in", indices_manuales.cbt_manual);

const cba_unformat = Math.trunc(indices_manuales.cba_manual * 3.09);
const cbt_unformat = Math.trunc(indices_manuales.cbt_manual * 3.09);
const mes = indices_manuales.mes_cba_cbt_manual;
const cbt_alquiler_2amb_unformat = cbt_unformat + indices_manuales.alquilerProm2amb;
const cbt_alquiler_3amb_unformat = cbt_unformat + indices_manuales.alquilerProm3amb;

// Formatear el número con separador de miles
const cba = cba_unformat.toLocaleString("es-AR", { minimumFractionDigits: 0 });
console.log("cba", cba);
const cbt = cbt_unformat.toLocaleString("es-AR", { minimumFractionDigits: 0 });
const cbt_alquiler_2amb = cbt_alquiler_2amb_unformat.toLocaleString("es-AR", { minimumFractionDigits: 0 });
const cbt_alquiler_3amb = cbt_alquiler_3amb_unformat.toLocaleString("es-AR", { minimumFractionDigits: 0 });

// Calculos cba, cbt, cbt_alquiler_2amb, cbt_alquiler_3amb
function calcular_cba() {
    const view_cba = document.querySelector(".view_cba");
    view_cba.innerHTML = `<span class="card_cba_value">  $${cba} </span>`;
}

function calcular_cbt() {
    const view_cbt = document.querySelector(".view_cbt");
    view_cbt.innerHTML = `<span class="card_cba_value">  $${cbt} </span>`;
}

function calcular_cbt_y_alquiler(personas, edad) {
    const view_cbt_alquiler_3amb = document.querySelector(".view_cbt_alquiler_3amb");
    view_cbt_alquiler_3amb.innerHTML = `<span class="card_cba_value">  $${cbt_alquiler_3amb} </span>`;
    // let view_cbt_alquiler_2amb = document.querySelector(".view_cbt_alquiler_2amb");
    // view_cbt_alquiler_2amb.innerHTML = `<span class="card_cba_value">  $${cbt_alquiler_2amb} </span>`;
}

function linea_indigencia() {
    const linea_indigencia = document.querySelector(".linea_indigencia");
    linea_indigencia.innerHTML = `<span class="linea_vineta">»</span> Indigentes con Casa Propia, ingresos por mes menores a: $${cba}`;
}

function linea_pobreza() {
    const linea_pobreza = document.querySelector(".linea_pobreza");
    linea_pobreza.innerHTML = `» Pobres con Casa Propia, si ingreso por mes menor a: $${cbt}`;
}

function linea_pobreza_alquilando() {
    const linea_pobreza_alquilando = document.querySelector(".linea_pobreza_alquilando");
    linea_pobreza_alquilando.innerHTML = `» Pobres Sin Casa Propia, ALQUILANDO, si ingreso por mes menor a:   $${cbt_alquiler_3amb} `;
}

calcular_cba();
calcular_cbt();
calcular_cbt_y_alquiler();
linea_indigencia();
linea_pobreza();
linea_pobreza_alquilando();



// Form Selects Custom ++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.addEventListener("DOMContentLoaded", function () {
    const selectedAge = document.getElementById("selected-age");
    const ageOptions = document.getElementById("age-options");
    const ageInput = document.getElementById("age");

    const overlayAge = document.getElementById("overlay-age");
    const overlayGender = document.getElementById("overlay-gender");

    const selectedGender = document.getElementById("selected-gender");
    const genderOptions = document.getElementById("gender-options");
    const genderInput = document.getElementById("gender");

    // Mostrar/ocultar las opciones al hacer clic
    selectedAge.addEventListener("click", function () {
        ageOptions.classList.toggle("open");
        overlayAge.style.display = ageOptions.classList.contains("open") ? "block" : "none";
    });

    selectedGender.addEventListener("click", function () {
        genderOptions.classList.toggle("open");
        overlayGender.style.display = genderOptions.classList.contains("open") ? "block" : "none";
    });

    // Manejar la selección opción AGE
    document.querySelectorAll(".age-option").forEach((option) => {
        option.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            const text = this.textContent;

            // Eliminar la clase 'selected' de todas las opciones
            document.querySelectorAll(".age-option").forEach((option) => {
                option.classList.remove("selected");
            });

            // Añadir la clase 'selected' a la opción actual
            this.classList.add("selected");

            selectedAge.textContent = text;
            ageInput.value = value;

            ageOptions.classList.remove("open");
            overlayAge.style.display = "none";
        });
    });

    // Manejar la selección opción GENDER
    document.querySelectorAll(".gender-option").forEach((option) => {
        option.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            const text = this.textContent;

            selectedGender.textContent = text;
            genderInput.value = value;

            genderOptions.classList.remove("open");
            overlayGender.style.display = "none";
        });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (e) {
        if (!selectedAge.contains(e.target) && !ageOptions.contains(e.target)) {
            ageOptions.classList.remove("open");
            overlayAge.style.display = "none";
        }

        if (!selectedGender.contains(e.target) && !genderOptions.contains(e.target)) {
            genderOptions.classList.remove("open");
            overlayGender.style.display = "none";
        }
    });

    // Cerrar el menú si se hace clic en el overlay
    overlayAge.addEventListener("click", function () {
        ageOptions.classList.remove("open");
        overlayAge.style.display = "none";
    });

    overlayGender.addEventListener("click", function () {
        genderOptions.classList.remove("open");
        overlayGender.style.display = "none";
    });
});



/* TABLA CANASTA PERSONALIZADA +++++++++++++++++++++++++++++++++++++++++++ */
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

    console.log('age', age);
    

    // Obtener el valor seleccionado del select
    const selectElement = document.getElementById("gender");
    const person_type = selectElement.value;

    console.log('person_type', person_type);
    

    // Crear un elemento de lista para mostrar la persona
    // const li = document.createElement("li");
    // li.textContent = `${person_type}  |  Edad: ${age}`;

    const tr_person = document.createElement("tr");
    tr_person.id = `person-list-row${count}`;

    const th_type = document.createElement("th");
    th_type.textContent = `${person_type}`;

    const td_age = document.createElement("td");
    td_age.textContent = `${age}`;

    console.log("td_age,", age);

    if (age === "") {
        document.getElementById("message_error_age").style.display = "block";
        document.getElementById("message_error_age").innerHTML = "Debe ingresar una edad válida";
    }

    // Agregar el elemento a la lista
    document.getElementById("person-list").appendChild(tr_person);
    document.getElementById(`person-list-row${count}`).appendChild(th_type);
    document.getElementById(`person-list-row${count}`).appendChild(td_age);

    // Limpiar el formulario
    document.getElementById("person-form").reset();

    const age_lowercase = age.toLowerCase();
    const person_type_lowercase = person_type.toLowerCase();

    console.log("age_lowercase", age_lowercase); 
    console.log("person_type_lowercase", person_type_lowercase); 






});




