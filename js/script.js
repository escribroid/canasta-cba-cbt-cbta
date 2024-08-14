let url_cba = "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BARIA_0_D_26&limit=5000&format=json";

let url_cbt = "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BATAL_0_D_20&limit=5000&format=json";

fetch(url_cba)
    .then((response) => response.json())
    .then((data_cba) => {
        console.log(data_cba);
        console.log(data_cba.count);
        console.log(data_cba.data[98]);

        let mes = data_cba.data[98][0].split("-")[1];
        let cba = Math.trunc(data_cba.data[98][1] * 3.09);
        let view_cba = document.querySelector(".view_cba");


        view_cba.innerHTML =
            `<p>Canasta Alimentaria del mes ${mes} y familia TIPO: ${cba}</p>`;
    })
    .catch((error) => console.log(error));

fetch(url_cbt)
    .then((response) => response.json())
    .then((data_cbt) => {
        console.log(data_cbt);
        console.log(data_cbt.count);
        console.log(data_cbt.data[98]);

        let mes = data_cbt.data[98][0].split("-")[1];
        let cbt = Math.trunc(data_cbt.data[98][1] * 3.09);
        let view_cbt = document.querySelector(".view_cbt");

        view_cbt.innerHTML =
            `<p>Canasta Total del mes ${mes} y familia TIPO: ${cbt}</p>`;
    })
    .catch((error) => console.log(error));

const tabla_equivalentes = {
    0: { mujer: 0.35, varon: 0.35 },
    1: { mujer: 0.37, varon: 0.37 },
    2: { mujer: 0.46, varon: 0.46 },
    3: { mujer: 0.51, varon: 0.51 },
    4: { mujer: 0.55, varon: 0.55 },
    5: { mujer: 0.6, varon: 0.6 },
    6: { mujer: 0.64, varon: 0.64 },
    7: { mujer: 0.66, varon: 0.66 },
    8: { mujer: 0.68, varon: 0.68 },
    9: { mujer: 0.69, varon: 0.69 },
    10: { mujer: 0.7, varon: 0.79 },
    11: { mujer: 0.72, varon: 0.82 },
    12: { mujer: 0.74, varon: 0.85 },
    13: { mujer: 0.76, varon: 0.9 },
    14: { mujer: 0.76, varon: 0.96 },
    15: { mujer: 0.77, varon: 1.0 },
    16: { mujer: 0.77, varon: 1.0 },
    17: { mujer: 0.77, varon: 1.04 },
    "18-29": { mujer: 0.76, varon: 1.02 },
    "30-45": { mujer: 0.76, varon: 1.0 },
    "46-60": { mujer: 0.76, varon: 1.0 },
    "61-75": { mujer: 0.67, varon: 0.83 },
    "76-120": { mujer: 0.63, varon: 0.74 },
};

tabla_equivalentes["18-29"].mujer;
console.log("18-29 mujer", tabla_equivalentes["18-29"].mujer);

tabla_equivalentes["76-120"].varon;
console.log("76-120 varon", tabla_equivalentes["76-120"].varon);
