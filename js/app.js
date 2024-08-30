import indices_manuales from "./mod-indices.js";
import tabla_equivalentes from "./mod-canasta-custom.js";

//console.log("tabla_equivalentes[0].mujer", tabla_equivalentes[0].mujer);
// console.log("in", indices_manuales.cbt_manual);

const cba_equivalente = indices_manuales.cba_manual;
const cbt_equivalente = indices_manuales.cbt_manual;

const cba_unformat = Math.trunc(indices_manuales.cba_manual * 3.09);
const cbt_unformat = Math.trunc(indices_manuales.cbt_manual * 3.09);
const mes = indices_manuales.mes_cba_cbt_manual;
const cbt_alquiler_2amb_unformat = cbt_unformat + indices_manuales.alquilerProm2amb;
const cbt_alquiler_3amb_unformat = cbt_unformat + indices_manuales.alquilerProm3amb;

// Formatear el número con separador de miles+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const cba = cba_unformat.toLocaleString("es-AR", { minimumFractionDigits: 0 });
const cbt = cbt_unformat.toLocaleString("es-AR", { minimumFractionDigits: 0 });
const cbt_alquiler_2amb = cbt_alquiler_2amb_unformat.toLocaleString("es-AR", { minimumFractionDigits: 0 });
const cbt_alquiler_3amb = cbt_alquiler_3amb_unformat.toLocaleString("es-AR", { minimumFractionDigits: 0 });

//console.log("cba", cba);

// Calculos cba, cbt, cbt_alquiler_2amb, cbt_alquiler_3amb +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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

// Form Selects Custom +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function select_custom() {
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
}

select_custom();

/* TABLA CANASTA PERSONALIZADA ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
let count = 0;
let suma_Total_Personas = 0;
let suma_con_alquiler = 0;
let suma_Array_Personas = [];
let nuevaSuma = 0;
let sum_total_reload = document.getElementById("sum_total_reload");

const form = document.getElementById("person-form");
const tableBody = document.getElementById("person-list");
let personas_de_local = JSON.parse(localStorage.getItem("personas_de_local")) || [];

//console.log("personas_de_local", personas_de_local);

// Función para agregar persona a la tabla y al array de personas
function addPersonToTable(
    gender,
    age,
    age_mostrar_table,
    sum_partials,
    sumaTotal,
    total_alquiler_in,
    total_alquiler_out,
    suma_con_alquiler
) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${gender}</td><td>${age_mostrar_table}</td><td class="partial_sumable">${sum_partials}</td>`;
    tableBody.appendChild(row);
    document.getElementById("total-canasta").innerHTML = suma_con_alquiler;
    document.querySelector(
        ".view_cbt_personal"
    ).innerHTML = `<span class="card_cba_value">$ ${suma_con_alquiler}</span>`;
    document.getElementById("total_alquiler_in").value = total_alquiler_in;
    document.getElementById("total_alquiler_out").textContent = total_alquiler_out;
}

// Cargar personas desde localStorage al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    personas_de_local.forEach((person) => {
        addPersonToTable(
            person.gender,
            person.age,
            person.age_mostrar_table,
            person.sum_partials,
            person.sumaTotal,
            person.total_alquiler_in,
            person.total_alquiler_out,
            person.suma_con_alquiler
        );

        //console.log("person.total_alquiler_in", person.total_alquiler_in);
        //document.getElementById("total_alquiler_in").value === person.total_alquiler_in;
        // let sumaNuevaindex = document.querySelectorAll(".partial_sumable");

        // sumaNuevaindex.forEach((element) => {
        //     nuevaSuma = nuevaSuma + parseFloat(element.textContent);
        //     //console.log("element.textContent-", element.textContent);
        //     console.log("nuevaSuma-", nuevaSuma);
        // });
    });
    //console.log("personas_de_local2", personas_de_local.total_alquiler_in);
});

/* Agregar personas a la tabla +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function add_person_sum_canasta() {
    document.getElementById("person-form").addEventListener("submit", function (e) {
        e.preventDefault();

        count = count + 1;

        // Obtener AGE ++++++++++++++++++
        let age = document.getElementById("age").value;
        //console.log("age", age);

        if (parseInt(age) < 0) {
            age = document.getElementById("age").value = age * -1;
        }
        let age_mostrar_table = parseFloat(age);

        if (age < 18) {
            age = age;
        } else if (age >= 18 && age <= 29) {
            age = "18";
        } else if (age >= 30 && age <= 45) {
            age = "30";
        } else if (age >= 46 && age <= 60) {
            age = "46";
        } else if (age >= 61 && age <= 75) {
            age = "61";
        } else if (age >= 76 && age <= 99) {
            age = "76";
        } else if (age >= 100) {
            age = "99";
        }

        const age_toStr = age.toString();

        // Obtener GENDER ++++++++++++++++++++
        const gender = document.getElementById("gender").value;
        const gender_lowercase = gender.toLowerCase();

        // Obtener total_alquiler_in +++++++++++++++
        let total_alquiler_in = parseFloat(document.getElementById("total_alquiler_in").value);
        if (isNaN(total_alquiler_in) || total_alquiler_in < 0) {
            total_alquiler_in = 0;
        }

        // total_alquiler_out ++++++++++++++++++++++++++
        let total_alquiler_out = (document.getElementById("total_alquiler_out").textContent = total_alquiler_in);

        //console.log("total_alquiler_in", typeof total_alquiler_in);

        // partials +++++++++++++++++++++++++++++++
        let td_partial = document.createElement("td");

        //console.log("gender", gender);

        // if (age === "") {
        //     document.getElementById("message_error_age").style.display = "block";
        //     document.getElementById("message_error_age").innerHTML = "Debe ingresar una edad válida";
        // }

        //console.log("age1", typeof age);

        let sumando = tabla_equivalentes[`${age_toStr}`][`${gender_lowercase}`] * cbt_equivalente;
        suma_Array_Personas.push(sumando);

        suma_Total_Personas = 0;
        for (let index = 0; index < suma_Array_Personas.length; index++) {
            suma_Total_Personas = suma_Total_Personas + suma_Array_Personas[index];
        }
        suma_Total_Personas = suma_Total_Personas + total_alquiler_in;
        suma_con_alquiler = suma_Total_Personas;

        //console.log("cbt_unformat-", cbt_unformat);
        //console.log("sumando-", sumando);
        //console.log("suma_Array_Personas-", suma_Array_Personas);

        //console.log("suma_Array_Personas-", suma_Array_Personas);

        // document.getElementById("sum_total_reload").addEventListener("change", () => {
        total_alquiler_in = document.getElementById("total_alquiler_in");

        sum_total_reload = document.getElementById("sum_total_reload");

        sum_total_reload.addEventListener("click", () => {
            //document.getElementById("total_alquiler_in").textContent = total_alquiler_in;
            total_alquiler_out = document.getElementById("total_alquiler_in").value;
            document.getElementById("total_alquiler_out").textContent = parseFloat(total_alquiler_out);

            suma_Total_Personas = parseFloat(suma_Total_Personas) + parseFloat(total_alquiler_in);
            suma_con_alquiler = parseFloat(suma_Total_Personas);

            // suma_con_alquiler = suma_con_alquiler + parseFloat(total_alquiler_in);

            console.log("total_alquiler_in2", typeof total_alquiler_in);
            console.log("total_alquiler_out2", typeof total_alquiler_out);

            console.log("suma_Total_Personas 2-", suma_Total_Personas);
            console.log("suma_con_alquiler", suma_con_alquiler);

            return suma_con_alquiler, total_alquiler_in, total_alquiler_out;
        });
        // });

        console.log("suma_Total_Personas", suma_Total_Personas);
        console.log("suma_con_alquiler", suma_con_alquiler);

        let sum_partials = 0;
        sum_partials = suma_Array_Personas[count - 1].toLocaleString("es-AR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });

        console.log("total_alquiler_out3", total_alquiler_out);

        // LOCAL STORAGE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        const local_persona = {
            age,
            age_mostrar_table,
            gender,
            sumando,
            sum_partials,
            sumaTotal: suma_Total_Personas,
            total_alquiler_in,
            total_alquiler_out,
            suma_con_alquiler,
        };

        personas_de_local.push(local_persona);

        localStorage.setItem("personas_de_local", JSON.stringify(personas_de_local));

        // Agregar la persona a la tabla
        addPersonToTable(
            gender,
            age,
            age_mostrar_table,
            sum_partials,
            suma_Total_Personas,
            total_alquiler_in,
            total_alquiler_out,
            suma_con_alquiler
        );

        // Limpiar el formulario
        document.getElementById("person-form").reset();
    });
}

add_person_sum_canasta();

document.getElementById("btn-reset-person").addEventListener("click", () => {
    //localStorage.removeItem('personas_de_local');
    personas_de_local = [];
    localStorage.setItem("personas_de_local", JSON.stringify(personas_de_local));
    location.reload();
    document.getElementById("person-form").reset();
    document.getElementById("person-list").innerHTML = "";
});
