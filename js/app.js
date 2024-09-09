import indices_manuales from "./mod-indices.js";
import tabla_equivalentes from "./mod-canasta-custom.js";

//console.log("tabla_equivalentes[0].mujer", tabla_equivalentes[0].mujer);
// console.log("in", indices_manuales.cbt_manual);

const cba_equivalente = indices_manuales.cba_manual;
const cbt_equivalente = indices_manuales.cbt_manual;
console.log("cba_equivalente", cba_equivalente);
console.log("cbt_equivalente", cbt_equivalente);

const cba_unformat = Math.trunc(indices_manuales.cba_manual * 3.09);
const cbt_unformat = Math.trunc(indices_manuales.cbt_manual * 3.09);
const mes = indices_manuales.mes_cba_cbt_manual;
const cbt_alquiler_1amb_unformat = cbt_unformat + indices_manuales.alquilerProm1amb;
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
    linea_indigencia.innerHTML = `<div class="cards_nota"> <span class="cards_linea_vineta">»</span><span>Indigentes con Casa Propia o sin Casa: ingresos por mes menores a $${cba}</span></div>`;
}

function linea_pobreza() {
    const linea_pobreza = document.querySelector(".linea_pobreza");
    linea_pobreza.innerHTML = `<div class="cards_nota"> <span class="cards_linea_vineta">»</span><span>Pobres con Casa Propia: si ingreso por mes menor a $${cbt}</span></div>`;
}

function linea_pobreza_alquilando() {
    const linea_pobreza_alquilando = document.querySelector(".linea_pobreza_alquilando");
    linea_pobreza_alquilando.innerHTML = `<div class="cards_nota"> <span class="cards_linea_vineta">»</span><span>Pobres Sin Casa Propia, ALQUILANDO: ingreso por mes menor a $${cbt_alquiler_3amb}</span></div>`;
}

calcular_cba();
calcular_cbt();
calcular_cbt_y_alquiler();
linea_indigencia();
linea_pobreza();
linea_pobreza_alquilando();

/* TABLA CANASTA PERSONALIZADA ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
let count = 0;
let age;
let gender;
let age_toStr;
let age_mostrar_table;
let gender_lowercase;
let suma_CBA_Personas;
let suma_CBT_Personas;
let suma_con_alquiler = 0;
let suma_indigencia_alquilando = 0;
let suma_pobreza_alquilando = 0;
let suma_clase_baja_alquilando = 0;
let suma_clase_media_fragil_alquilando = 0;
let suma_clase_media_alquilando = 0;
let suma_clase_media_alta_alquilando = 0;
let Array_CBA_Personas = [];
let Array_CBT_Personas = [];
let alquiler_out = 0;
let alquiler_in = document.getElementById("alquiler_in");
let alquiler_in_value = alquiler_in;
let canasta_b_almentaria_persona;
let canasta_b_total_persona;
let add_partials;
let vivienda;
let show_indigencia_max = document.querySelector(".show_indigencia_max");

const form = document.getElementById("person-form");
const tableBody = document.getElementById("person-list");
let personas_de_local = JSON.parse(localStorage.getItem("personas_de_local")) || [];

// Función para agregar persona a la tabla y al array de personas +++++++++++++++++++++++++++++++
function addPersonToTable(gender, age_mostrar_table, canasta_b_alimentaria_persona, canasta_b_total_persona) {
    const row = document.createElement("tr");
    row.innerHTML = `<td class="p-1">${gender}</td><td class="p-1">${age_mostrar_table}</td><td class="add_Partials p-1">$${canasta_b_total_persona.toLocaleString(
        "es-AR",
        {
            maximumFractionDigits: 0,
        }
    )}</td><td class="p-1">Quit</td>`;
    tableBody.appendChild(row);
}

// SUMA DE CANASTA PERSONALIZADA +++++++++++++++++++++++
suma_con_alquiler = 0;
function suma_Total(suma_CBT_Personas, alquiler_in_value, suma_con_alquiler) {
    alquiler_in_value = parseInt(document.getElementById("alquiler_in").value);
    alquiler_out = document.getElementById("alquiler_out");
    if (isNaN(alquiler_in_value)) {
        alquiler_in_value = 0;
        alquiler_out.textContent = "0";
    } else if (alquiler_in_value < 0) {
        alquiler_in_value = alquiler_in_value * -1;
    }
    //suma_con_alquiler = 0;
    suma_con_alquiler = alquiler_in_value + suma_CBT_Personas;

    if (isNaN(suma_con_alquiler)) {
        suma_con_alquiler = alquiler_in_value;
    }

    console.log("suma_con_alquiler", suma_con_alquiler);

    document.getElementById("total-canasta").innerHTML =
        "$" +
        suma_con_alquiler.toLocaleString("es-AR", {
            maximumFractionDigits: 0,
        });
    // document.querySelector(
    //     ".view_cbt_personal"
    // ).innerHTML = `<span class="card_cba_value">$ ${suma_con_alquiler.toLocaleString("es-AR", {
    //     maximumFractionDigits: 0,
    // })}</span>`;
}

function suma_tabla_indigencia(suma_CBA_Personas, suma_CBT_Personas, alquiler_in_value, suma_con_alquiler) {
    alquiler_in_value = parseInt(document.getElementById("alquiler_in").value);
    //alquiler_out = document.getElementById("alquiler_out");
    if (isNaN(alquiler_in_value)) {
        alquiler_in_value = 0;
    } else if (alquiler_in_value < 0) {
        alquiler_in_value = alquiler_in_value * -1;
    }
    //suma_con_alquiler = 0;

    console.log("suma_CBA_Personas", suma_CBA_Personas);
    console.log("suma_CBT_Personas", suma_CBT_Personas);

    if (!suma_CBA_Personas || !suma_CBT_Personas) {
        suma_CBA_Personas = 0;
        suma_CBT_Personas = 0;
    }
    suma_indigencia_alquilando = alquiler_in_value + Math.trunc(suma_CBA_Personas);
    suma_pobreza_alquilando = alquiler_in_value + Math.trunc(suma_CBT_Personas);
    suma_clase_baja_alquilando = alquiler_in_value + Math.trunc(suma_CBT_Personas * 1.5);
    suma_clase_media_fragil_alquilando = alquiler_in_value + Math.trunc(suma_CBT_Personas * 2);
    suma_clase_media_alquilando = alquiler_in_value + Math.trunc(suma_CBT_Personas * 4);
    suma_clase_media_alta_alquilando = alquiler_in_value + Math.trunc(suma_CBT_Personas * 6);

    //suma_clase_media_alta_alquilando = alquiler_in_value + suma_CBT_Personas*8;

    // if (isNaN(suma_con_alquiler)) {
    //     suma_con_alquiler = alquiler_in_value;
    // }

    document.querySelector(".show_indigencia_min").textContent = 0;
    document.querySelector(".show_indigencia_max").textContent = suma_indigencia_alquilando;

    document.querySelector(".show_pobreza_min").textContent = suma_indigencia_alquilando;
    document.querySelector(".show_pobreza_max").textContent = suma_pobreza_alquilando;

    document.querySelector(".show_clase_baja_min").textContent = suma_pobreza_alquilando;
    document.querySelector(".show_clase_baja_max").textContent = suma_clase_baja_alquilando;

    document.querySelector(".suma_clase_media_fragil_min").textContent = suma_clase_baja_alquilando;
    document.querySelector(".suma_clase_media_fragil_max").textContent = suma_clase_media_fragil_alquilando;

    document.querySelector(".suma_clase_media_min").textContent = suma_clase_media_fragil_alquilando;
    document.querySelector(".suma_clase_media_max").textContent = suma_clase_media_alquilando;

    document.querySelector(".suma_clase_media_alta_min").textContent = suma_clase_media_alquilando;
    document.querySelector(".suma_clase_media_alta_max").textContent = suma_clase_media_alta_alquilando;

    document.querySelector(".suma_clase_alta_min").textContent = suma_clase_media_alta_alquilando;
}

// //Cargar personas desde localStorage al cargar la página
// document.addEventListener("DOMContentLoaded", () => {

//     console.log("age_toStr2", add_person_sum_canasta().age_toStr);

//     let alq1 = parseFloat(document.getElementById("alquiler_in").value);
//     let alq2 = parseFloat(document.getElementById("alquiler_out").value);

//     console.log("alq1", alq1);
//     console.log("alq2", alq2);

//     if (isNaN(parseFloat(document.getElementById("alquiler_out").value))) {
//         document.getElementById("alquiler_out").value = 0;
//     }
//     // personas_de_local.forEach((person) => {
//     //     addPersonToTable(
//     //         person.gender,
//     //         person.age,
//     //         person.age_mostrar_table,
//     //         person.add_partials,
//     //         person.sumaTotal,
//     //         person.alquiler_in,
//     //         person.alquiler_out,
//     //         person.suma_con_alquiler
//     //     );
//     // });
// });

vivienda = document.getElementById("select_canasta_alquiler");

// Agregar un evento al select para cambiar el estado del input
vivienda.addEventListener("input", function () {
    vivienda = document.getElementById("select_canasta_alquiler");

    alquiler_in = document.getElementById("alquiler_in");
    if (vivienda.value === "siAlquilo") {
        alquiler_in.value = "";

        alquiler_in.enabled = true; // Habilitar el input
        alquiler_in.removeAttribute("disabled"); // Deshabilitar el input
        alquiler_in.placeholder = "$ monto $"; // Mostrar texto en el input

        document.querySelector(".row_mostrar_alquiler").style.display = "table-row";
    } else if (vivienda.value === "noAlquilo") {
        alquiler_in.setAttribute("disabled", "true"); // Deshabilitar el input
        alquiler_in.value = ""; // Limpiar el input
        alquiler_in.placeholder = "No alquilo"; // Mostrar texto en el input
        document.getElementById("alquiler_out").textContent = "No";
        document.querySelector(".row_mostrar_alquiler").style.display = "none";
    } else if (vivienda.value === "AlquilerProm3amb") {
        alquiler_in.setAttribute("disabled", "true"); // Deshabilitar el input
        alquiler_in.value = `${indices_manuales.alquilerProm3amb}`;
        document.getElementById("alquiler_out").textContent = alquiler_in.value;
        document.querySelector(".row_mostrar_alquiler").style.display = "table-row";
    } else if (vivienda.value === "AlquilerProm2amb") {
        alquiler_in.setAttribute("disabled", "true"); // Deshabilitar el input
        alquiler_in.value = `${indices_manuales.alquilerProm2amb}`;
        parseInt(alquiler_in.value);

        document.getElementById("alquiler_out").textContent = alquiler_in.value;
        document.querySelector(".row_mostrar_alquiler").style.display = "table-row";
        suma_Total(suma_CBT_Personas, alquiler_in_value, suma_con_alquiler);
        suma_tabla_indigencia(suma_CBA_Personas, suma_CBT_Personas, alquiler_in_value, suma_con_alquiler);
    } else if (vivienda.value === "AlquilerProm1amb") {
        alquiler_in.setAttribute("disabled", "true"); // Deshabilitar el input
        alquiler_in.value = `${indices_manuales.alquilerProm1amb}`;
        parseInt(alquiler_in.value);

        document.getElementById("alquiler_out").textContent = alquiler_in.value;
        document.querySelector(".row_mostrar_alquiler").style.display = "table-row";
    }

    suma_con_alquiler = 0;
    alquiler_in_value = 0;
    alquiler_in_value = alquiler_in.value;
    suma_Total(suma_CBT_Personas, alquiler_in_value, suma_con_alquiler);
    suma_tabla_indigencia(suma_CBA_Personas, suma_CBT_Personas, alquiler_in_value, suma_con_alquiler);
});

/* Agregar personas a la tabla SUBMIT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
document.getElementById("person-form").addEventListener("submit", function (e) {
    e.preventDefault();
    count = count + 1;
    age = document.getElementById("selected-age").value;
    gender = document.getElementById("selected-gender").value;
    alquiler_in = document.getElementById("alquiler_in");
    alquiler_in_value = alquiler_in.value;

    // Evitar que se agreguen personas sin género
    if (!gender) {
        age = "";
    }

    // Obtener el valor de la edad seleccionada +
    age_mostrar_table = parseInt(age);

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

    age_toStr = age.toString();

    // Obtener GENDER ++++++++++++++++++++
    gender_lowercase = gender.toLowerCase();

    canasta_b_almentaria_persona = tabla_equivalentes[`${age_toStr}`][`${gender_lowercase}`] * cba_equivalente;
    console.log("canasta_b_almentaria_persona", canasta_b_almentaria_persona);

    Array_CBA_Personas.push(canasta_b_almentaria_persona);
    suma_CBA_Personas = 0;
    for (let i = 0; i < Array_CBA_Personas.length; i++) {
        suma_CBA_Personas = parseFloat(suma_CBA_Personas) + parseFloat(Array_CBA_Personas[i]);
    }

    console.log("Array_CBA_Personas", Array_CBA_Personas);
    console.log("suma_CBA_Personas", suma_CBA_Personas);

    canasta_b_total_persona = tabla_equivalentes[`${age_toStr}`][`${gender_lowercase}`] * cbt_equivalente;
    console.log("canasta_b_total_persona", canasta_b_total_persona);

    Array_CBT_Personas.push(canasta_b_total_persona);
    suma_CBT_Personas = 0;
    for (let i = 0; i < Array_CBT_Personas.length; i++) {
        suma_CBT_Personas = parseFloat(suma_CBT_Personas) + parseFloat(Array_CBT_Personas[i]);
    }

    //suma_con_alquiler = alquiler_in + suma_CBT_Personas;

    console.log("Array_CBT_Personas", Array_CBT_Personas);
    console.log("suma_CBT_Personas", suma_CBT_Personas);

    // Agregar la persona a la tabla +++++++++++++++++++
    addPersonToTable(gender, age_mostrar_table, canasta_b_almentaria_persona, canasta_b_total_persona);

    suma_Total(suma_CBT_Personas, alquiler_in_value, suma_con_alquiler);

    suma_tabla_indigencia(suma_CBA_Personas, suma_CBT_Personas, alquiler_in_value, suma_con_alquiler);

    // Limpiar el formulario
    document.getElementById("person-form").reset();

    //document.getElementById("person-form-submit").style.transform = "scale(1.2)";
    // document.getElementById("person-form-submit").style.transform = "scale(1)";

    // LOCAL STORAGE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const local_persona = {
        age,
        age_mostrar_table,
        gender,
        add_partials,
        suma_CBA_Personas,
        suma_CBT_Personas,
        alquiler_in_value,
        alquiler_out,
        suma_con_alquiler,
    };

    personas_de_local.push(local_persona);

    localStorage.setItem("personas_de_local", JSON.stringify(personas_de_local));

    return { suma_CBT_Personas, alquiler_in_value, suma_con_alquiler };
});

// Evento keypress para prevenir caracteres no numéricos
alquiler_in.addEventListener("keydown", function (e) {
    // // Permitir solo dígitos
    // const regex = /[0-9]/;
    // if (!regex.test(e.key)) {
    //     e.preventDefault(); // Evitar que el carácter no permitido sea ingresado
    // }

    // Permitir números (del 0 al 9) y la tecla Backspace
    if ((e.key >= "0" && e.key <= "9") || e.key === "Backspace") {
        // Permitir la entrada
        return true;
    } else {
        // Evitar que se ingrese cualquier otra tecla
        e.preventDefault();
    }
});

// event INPUT ++++++++++++++++++++++++++++++++++++++++++++++++++++
document.getElementById("alquiler_in").addEventListener("input", () => {
    age = document.getElementById("selected-age").value;
    gender = document.getElementById("selected-gender").value;
    alquiler_in_value = parseInt(document.getElementById("alquiler_in").value);
    alquiler_out = document.getElementById("alquiler_out").value;

    //suma_con_alquiler = suma_CBT_Personas;

    if (isNaN(alquiler_in_value)) {
        alquiler_in_value = 0;
    } else if (alquiler_in_value < 0) {
        alquiler_in_value = alquiler_in_value * -1;
    }

    if (isNaN(parseInt(document.getElementById("alquiler_out").value))) {
        document.getElementById("alquiler_out").textContent = alquiler_in_value;
    } else {
        //document.getElementById("alquiler_out").value = alquiler_in;
        document.getElementById("alquiler_out").textContent = alquiler_in_value;
    }

    suma_con_alquiler = 0;
    alquiler_in_value = 0;
    suma_Total(suma_CBT_Personas, alquiler_in_value, suma_con_alquiler);
    suma_tabla_indigencia(suma_CBA_Personas, suma_CBT_Personas, alquiler_in_value, suma_con_alquiler);

    // alquiler_out ++++++++++++++++++++++++++

    //alquiler_out = document.getElementById("alquiler_out").textContent = alquiler_in;
    //canasta_b_total_persona = tabla_equivalentes[`${age_toStr}`][`${gender_lowercase}`] * cbt_equivalente;
    // Array_CBT_Personas.push(canasta_b_total_persona);

    // suma_CBT_Personas = 0;
    // for (let index = 0; index < Array_CBT_Personas.length; index++) {
    //     suma_CBT_Personas = suma_CBT_Personas + Array_CBT_Personas[index];
    // }
    suma_CBT_Personas = suma_CBT_Personas + alquiler_in_value;
    suma_con_alquiler = suma_CBT_Personas;
    // addPersonToTable(
    //     gender,
    //     age,
    //     age_mostrar_table,
    //     add_partials,
    //     alquiler_in,
    //     alquiler_out,
    //     suma_con_alquiler
    // )

    //sumar_Personas();
});

// function sumar_Personas(suma_CBT_Personas, alquiler_in, alquiler_out) {
//     console.log("suma_CBT_Personas", suma_CBT_Personas);

//     age = document.getElementById("selected-age").value;
//     // alquiler_out ++++++++++++++++++++++++++
//     alquiler_in = parseFloat(document.getElementById("alquiler_in").value);
//     alquiler_out = document.getElementById("alquiler_out").value;
//     //Array_CBT_Personas.push(canasta_b_total_persona);

//     console.log("alquiler_in", alquiler_in);
//     console.log("alquiler_out", alquiler_out);

//     suma_CBT_Personas = 0;
//     for (let index = 0; index < Array_CBT_Personas.length; index++) {
//         suma_CBT_Personas = suma_CBT_Personas + Array_CBT_Personas[index];
//     }
//     suma_CBT_Personas = suma_CBT_Personas + alquiler_in;
//     suma_con_alquiler = suma_CBT_Personas;
// }
// sumar_Personas(suma_CBT_Personas, alquiler_in, alquiler_out);

document.getElementById("btn-reset-person").addEventListener("click", () => {
    //localStorage.removeItem('personas_de_local');
    personas_de_local = [];
    localStorage.setItem("personas_de_local", JSON.stringify(personas_de_local));
    location.reload();
    document.getElementById("person-form").reset();
    document.getElementById("person-list").innerHTML = "";
});
