import indices_manuales from "./mod-indices.js";

// tabla equivalencias personas
const tabla_equivalentes = {
    0: { femenina: 0.35, masculino: 0.35 },
    1: { femenina: 0.37, masculino: 0.37 },
    2: { femenina: 0.46, masculino: 0.46 },
    3: { femenina: 0.51, masculino: 0.51 },
    4: { femenina: 0.55, masculino: 0.55 },
    5: { femenina: 0.6, masculino: 0.6 },
    6: { femenina: 0.64, masculino: 0.64 },
    7: { femenina: 0.66, masculino: 0.66 },
    8: { femenina: 0.68, masculino: 0.68 },
    9: { femenina: 0.69, masculino: 0.69 },
    10: { femenina: 0.7, masculino: 0.79 },
    11: { femenina: 0.72, masculino: 0.82 },
    12: { femenina: 0.74, masculino: 0.85 },
    13: { femenina: 0.76, masculino: 0.9 },
    14: { femenina: 0.76, masculino: 0.96 },
    15: { femenina: 0.77, masculino: 1.0 },
    16: { femenina: 0.77, masculino: 1.03 },
    17: { femenina: 0.77, masculino: 1.04 },
    18: { femenina: 0.76, masculino: 1.02 },
    29: { femenina: 0.76, masculino: 1.02 },
    30: { femenina: 0.77, masculino: 1.0 },
    35: { femenina: 0.77, masculino: 1.0 },
    45: { femenina: 0.77, masculino: 1.0 },
    46: { femenina: 0.76, masculino: 1.0 },
    60: { femenina: 0.76, masculino: 1.0 },
    61: { femenina: 0.67, masculino: 0.83 },
    75: { femenina: 0.67, masculino: 0.83 },
    76: { femenina: 0.63, masculino: 0.74 },
    99: { femenina: 0.63, masculino: 0.74 },
};

export default tabla_equivalentes;

// tabla_equivalentes[61].femenina;
// tabla_equivalentes[61].masculino;

// console.log("edad_61_75.mujer", tabla_equivalentes[61].femenina);
// console.log("edad_61_75.varon", tabla_equivalentes[61].masculino);
