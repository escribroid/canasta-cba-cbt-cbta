import indices_manuales from "./mod-indices.js";

console.log("in", indices_manuales.cbt_manual);

function calcular_cba() {
    let mes = indices_manuales.mes_cba_cbt_manual;
    let cba = Math.trunc(indices_manuales.cba_manual * 3.09);
    let view_cba = document.querySelector(".view_cba");
    view_cba.innerHTML = `Canasta Alimentaria: $${cba}`;
}

function calcular_cbt() {
    let mes = indices_manuales.mes_cba_cbt_manual;
    let cbt = Math.trunc(indices_manuales.cbt_manual * 3.09);
    let view_cbt = document.querySelector(".view_cbt");
    view_cbt.innerHTML = `Canasta Total: $${cbt}`;
}

function calcular_cbta(personas, edad) {
    let mes = indices_manuales.mes_cba_cbt_manual;
    let cbt = Math.trunc(indices_manuales.cbt_manual * 3.09);
    let cbta = cbt + indices_manuales.alquilerProm3amb;
    let view_cbta = document.querySelector(".view_cbta");
    view_cbta.innerHTML = `Canasta Total + Alquiler 3 ambientes: $${cbta}`;
}

calcular_cba();
calcular_cbt();
calcular_cbta();

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