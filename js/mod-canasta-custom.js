import indices_manuales from "./mod-indices.js";

// tabla equivalencias personas
const tabla_equivalentes = {
    0: { femenino: 0.35, masculino: 0.35 },
    1: { femenino: 0.37, masculino: 0.37 },
    2: { femenino: 0.46, masculino: 0.46 },
    3: { femenino: 0.51, masculino: 0.51 },
    4: { femenino: 0.55, masculino: 0.55 },
    5: { femenino: 0.6, masculino: 0.6 },
    6: { femenino: 0.64, masculino: 0.64 },
    7: { femenino: 0.66, masculino: 0.66 },
    8: { femenino: 0.68, masculino: 0.68 },
    9: { femenino: 0.69, masculino: 0.69 },

    10: { femenino: 0.7, masculino: 0.79 },
    11: { femenino: 0.72, masculino: 0.82 },
    12: { femenino: 0.74, masculino: 0.85 },
    13: { femenino: 0.76, masculino: 0.9 },
    14: { femenino: 0.76, masculino: 0.96 },
    15: { femenino: 0.77, masculino: 1.0 },
    16: { femenino: 0.77, masculino: 1.03 },
    17: { femenino: 0.77, masculino: 1.04 },

    18: { femenino: 0.76, masculino: 1.02 },
    29: { femenino: 0.76, masculino: 1.02 },

    30: { femenino: 0.77, masculino: 1.0 },
    45: { femenino: 0.77, masculino: 1.0 },

    46: { femenino: 0.76, masculino: 1.0 },
    60: { femenino: 0.76, masculino: 1.0 },

    61: { femenino: 0.67, masculino: 0.83 },
    75: { femenino: 0.67, masculino: 0.83 },

    76: { femenino: 0.63, masculino: 0.74 },
    99: { femenino: 0.63, masculino: 0.74 },
};

export default tabla_equivalentes;

// Embarazo +12%
// Lactancia +22%
