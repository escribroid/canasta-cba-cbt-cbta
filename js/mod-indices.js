const cba_manual = 131294;
const cbt_manual = 291472;
const mes_cba_cbt_manual = 7;
// Alquiler medio: 1amb 40m2, 2amb 50m2, 3amb 70m2
const alquilerProm2amb = 485881;
const alquilerProm3amb = Math.trunc((alquilerProm2amb * (7 / 5)) * 0.965);
const alquilerProm1amb = Math.trunc((alquilerProm2amb * (4 / 5)) / 0.955);
const mesAlquilerManual = 8;
const ipc_manual = 4.03;

const indices_manuales = {
    cba_manual,
    cbt_manual,
    mes_cba_cbt_manual,
    alquilerProm1amb,
    alquilerProm2amb,
    alquilerProm3amb,
    mesAlquilerManual,
};

export default indices_manuales;
