let url_ipc = "https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&limit=5000&format=json";

let ipc_percent = 0;
let ipc_percent_txt = "";

fetch(url_ipc)
    .then((response) => response.json())
    .then((data_ipc) => {
        // console.log("data_ipc_N", data_ipc.data[data_ipc.data.length-1][1])
        // console.log("data_ipc_O", data_ipc.data[data_ipc.data.length-2][1])

        let ipc_new = data_ipc.data[data_ipc.data.length - 1][1];
        let ipc_old = data_ipc.data[data_ipc.data.length - 2][1];

        ipc_percent = Math.round(((ipc_new - ipc_old) / ipc_old) * 100 * 100) / 100;

        //console.log("ipc_percent", ipc_percent);

        ipc_percent_txt = ipc_percent.toLocaleString("es-AR", { minimumFractionDigits: 2 });
        document.querySelector(".indices_short_ipc_percent").textContent = ipc_percent_txt + "%";
    })
    .catch((error) => console.log(error));

// let url_cba = "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BARIA_0_D_26&limit=5000&format=json";

// let url_cbt = "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BATAL_0_D_20&limit=5000&format=json";

// fetch(url_cba)
//     .then((response) => response.json())
//     .then((data_cba) => {
//         console.log("data_cba", data_cba.data.length-1);
//         console.log( "data_cba.count", data_cba.count);
//         console.log("data_cba.data[98]", data_cba.data[98]);
//         console.log("DATA", data_cba.data[data_cba.data.length-1]);

//         let mes = data_cba.data[98][0].split("-")[1];
//         let cba = Math.trunc(data_cba.data[data_cba.data.length-1][1] * 3.09);
//         let view_cba = document.querySelector(".view_cba");

//         view_cba.innerHTML =
//             `<p>Canasta Alimentaria del mes ${mes} y familia TIPO: ${cba}</p>`;
//     })
//     .catch((error) => console.log(error));

// fetch(url_cbt)
//     .then((response) => response.json())
//     .then((data_cbt) => {
//         //console.log("data_cbt", data_cbt);
//         //console.log("data_cbt.count", data_cbt.count);
//         //console.log("data_cbt.data[98]", data_cbt.data[98]);
//         console.log("DATA T", data_cbt.data[data_cbt.data.length-1]);

//         let mes = data_cbt.data[98][0].split("-")[1];
//         let cbt = Math.trunc(data_cbt.data[data_cbt.data.length-1][1] * 3.09);
//         let view_cbt = document.querySelector(".view_cbt");

//         view_cbt.innerHTML =
//             `<p>Canasta Total del mes ${mes} y familia TIPO: ${cbt}</p>`;
//     })
//     .catch((error) => console.log(error));
