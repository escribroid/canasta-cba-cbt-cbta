// CONSTANTES DE INDICES MANUALES
const mes_cba_cbt_manual = 7;
const cba_manual = 131294;
const cbt_manual = 291472;
const mesAlquilerManual = 8;
const alquilerProm2amb = 485881;

const linea_indigencia = Math.trunc(cba_manual);
const linea_pobreza = Math.trunc(cbt_manual);
const linea_clase_baja_fragil = Math.trunc(cbt_manual * 1.2);
const linea_clase_baja = Math.trunc(cbt_manual * 1.5);
const linea_clase_media_fragil = Math.trunc(cbt_manual * 2);
const linea_clase_media_media = Math.trunc(cbt_manual * 4);
const linea_clase_media_alta = Math.trunc(cbt_manual * 6);
const linea_clase_alta_baja = Math.trunc(cbt_manual * 10);

// Alquiler medio: 1amb 40m2, 2amb 50m2, 3amb 70m2
const alquilerProm3amb = Math.trunc(alquilerProm2amb * (7 / 5) * 0.965);
const alquilerProm1amb = Math.trunc((alquilerProm2amb * (4 / 5)) / 0.955);
const ipc_manual = 4.03;

const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];

const indices_manuales = {
    cba_manual,
    cbt_manual,
    mes_cba_cbt_manual,
    alquilerProm1amb,
    alquilerProm2amb,
    alquilerProm3amb,
    mesAlquilerManual,
    ipc_manual,
    linea_indigencia,
    linea_pobreza,
    linea_clase_baja_fragil,
    linea_clase_baja,
    linea_clase_media_fragil,
    linea_clase_media_media,
    linea_clase_media_alta,
    linea_clase_alta_baja,
    days,
};

export default indices_manuales;
