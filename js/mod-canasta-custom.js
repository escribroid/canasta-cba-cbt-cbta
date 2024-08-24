import indices_manuales from "./mod-indices.js";




// tabla equivalencias personas
const tabla_equivalentes = {
  0: { mujer: 0.35, varon: 0.35 },
  edad_1: { femenina: 0.37, masculino: 0.37 },
  edad_2: { femenina: 0.46, masculino: 0.46 },
  edad_3: { femenina: 0.51, masculino: 0.51 },
  edad_4: { femenina: 0.55, masculino: 0.55 },
  edad_5: { femenina: 0.6, masculino: 0.6 },
  edad_6: { femenina: 0.64, masculino: 0.64 },
  edad_7: { femenina: 0.66, masculino: 0.66 },
  edad_8: { femenina: 0.68, masculino: 0.68 },
  edad_9: { femenina: 0.69, masculino: 0.69 },
  edad_10: { femenina: 0.7, masculino: 0.79 },
  edad_11: { femenina: 0.72, masculino: 0.82 },
  edad_12: { femenina: 0.74, masculino: 0.85 },
  edad_13: { femenina: 0.76, masculino: 0.9 },
  edad_14: { femenina: 0.76, masculino: 0.96 },
  edad_15: { femenina: 0.77, masculino: 1.0 },
  edad_16: { femenina: 0.77, masculino: 1.0 },
  edad_17: { femenina: 0.77, masculino: 1.04 },
  edad_18_29: { femenina: 0.76, masculino: 1.02 },
  edad_30_45: { femenina: 0.76, masculino: 1.0 },
  edad_46_60: { femenina: 0.76, masculino: 1.0 },
  edad_61_75: { femenina: 0.67, masculino: 0.83 },
  edad_76_99: { femenina: 0.63, masculino: 0.74 },
};

export default tabla_equivalentes;

tabla_equivalentes.edad_61_75.Femenina;
tabla_equivalentes.edad_61_75.varon;

console.log("edad_61_75.mujer", tabla_equivalentes.edad_61_75.Femenina);
console.log("edad_61_75.varon", tabla_equivalentes.edad_61_75.Masculino);