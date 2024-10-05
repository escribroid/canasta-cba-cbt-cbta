let url_ipc = "https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&limit=5000&format=json";

let ipc_percent = 0;
let ipc_percent_txt;

// fetch(url_ipc)
//     .then((response) => response.json())
//     .then((data_ipc) => {
//         let date_full = data_ipc.data[data_ipc.data.length - 1][0];
//         //console.log("date_full", date_full);
//         date_full.split("-");
//         let date_month = date_full.split("-")[1];
//         document.querySelector(".indices_date").innerHTML = `Indices ${date_month}/24`;

//         let ipc_new = data_ipc.data[data_ipc.data.length - 1][1];
//         let ipc_old = data_ipc.data[data_ipc.data.length - 2][1];
//         ipc_percent = Math.round(((ipc_new - ipc_old) / ipc_old) * 100 * 100) / 100;

//         ipc_percent_txt = ipc_percent.toLocaleString("es-AR", { minimumFractionDigits: 2 });
//         document.querySelector(".indices_short_ipc_percent").textContent = ipc_percent_txt + "%";
//     })
//     .catch((error) => console.log(error));
