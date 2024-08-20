import indices_manuales from "./mod-indices.js";

console.log("in", indices_manuales.cbt_manual);

let cba = Math.trunc(indices_manuales.cba_manual * 3.09);
let cbt = Math.trunc(indices_manuales.cbt_manual * 3.09);
let mes = indices_manuales.mes_cba_cbt_manual;
let cbt_alquiler_2amb = cbt + indices_manuales.alquilerProm2amb;
let cbt_alquiler_3amb = cbt + indices_manuales.alquilerProm3amb;


function calcular_cba() {
    let view_cba = document.querySelector(".view_cba");
    view_cba.innerHTML = `CBA:  <span class="card_cba_value">  $${cba} </span>`;
}

function calcular_cbt() {
    let view_cbt = document.querySelector(".view_cbt");
    view_cbt.innerHTML = `CBT: <span class="card_cba_value">  $${cbt} </span>`;
}

function calcular_cbt_y_alquiler(personas, edad) {
    let view_cbt_alquiler_3amb = document.querySelector(".view_cbt_alquiler_3amb");
    view_cbt_alquiler_3amb.innerHTML = `CBT + Alquiler 3 ambientes: <span class="card_cba_value">  $${cbt_alquiler_3amb} </span>`;
    let view_cbt_alquiler_2amb = document.querySelector(".view_cbt_alquiler_2amb");
    view_cbt_alquiler_2amb.innerHTML = `CBT + Alquiler 2 ambientes: <span class="card_cba_value">  $${cbt_alquiler_2amb} </span>`;
}

function linea_indigencia() {
    let linea_indigencia = document.querySelector(".linea_indigencia");
    linea_indigencia.innerHTML = `indigentes con Casa Propia, menos de: <span >  $${cba} </span>`;
}

function linea_pobreza() {
    let linea_pobreza = document.querySelector(".linea_pobreza");
    linea_pobreza.innerHTML = `pobres con Casa Propia, menos de: <span >  $${cbt} </span>`;
}

function linea_pobreza_alquilando() {
    let linea_pobreza_alquilando = document.querySelector(".linea_pobreza_alquilando");
    linea_pobreza_alquilando.innerHTML = `pobres Sin Casa Propia, ALQUILANDO, menos de: <span >  $${cbt_alquiler_3amb} </span>`;
}

calcular_cba();
calcular_cbt();
calcular_cbt_y_alquiler();
linea_indigencia();
linea_pobreza();
linea_pobreza_alquilando();

// tabla equivalencias personas
const tabla_equivalentes = {
    "edad_0": { mujer: 0.35, varon: 0.35 },
    "edad_1": { mujer: 0.37, varon: 0.37 },
    "edad_2": { mujer: 0.46, varon: 0.46 },
    "edad_3": { mujer: 0.51, varon: 0.51 },
    "edad_4": { mujer: 0.55, varon: 0.55 },
    "edad_5": { mujer: 0.6, varon: 0.6 },
    "edad_6": { mujer: 0.64, varon: 0.64 },
    "edad_7": { mujer: 0.66, varon: 0.66 },
    "edad_8": { mujer: 0.68, varon: 0.68 },
    "edad_9": { mujer: 0.69, varon: 0.69 },
    "edad_10": { mujer: 0.7, varon: 0.79 },
    "edad_11": { mujer: 0.72, varon: 0.82 },
    "edad_12": { mujer: 0.74, varon: 0.85 },
    "edad_13": { mujer: 0.76, varon: 0.9 },
    "edad_14": { mujer: 0.76, varon: 0.96 },
    "edad_15": { mujer: 0.77, varon: 1.0 },
    "edad_16": { mujer: 0.77, varon: 1.0 },
    "edad_17": { mujer: 0.77, varon: 1.04 },
    "edad_18-29": { mujer: 0.76, varon: 1.02 },
    "edad_30-45": { mujer: 0.76, varon: 1.0 },
    "edad_46-60": { mujer: 0.76, varon: 1.0 },
    "edad_61-75": { mujer: 0.67, varon: 0.83 },
    "edad_76-99": { mujer: 0.63, varon: 0.74 },
};