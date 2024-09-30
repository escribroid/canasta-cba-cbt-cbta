let url_ipc = "https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&limit=5000&format=json";

let ipc_percent = 0;
let ipc_percent_txt = "";

fetch(url_ipc)
    .then((response) => response.json())
    .then((data_ipc) => {
        //console.log("data_ipc_N", data_ipc.data[data_ipc.data.length-1][1])
        //console.log("data_ipc_O", data_ipc.data[data_ipc.data.length-2][0]);

        let date_full = data_ipc.data[data_ipc.data.length - 1][0];
        //console.log("date_full", date_full);
        date_full.split("-");
        let date_month = date_full.split("-")[1];
        document.querySelector(".indices_date").innerHTML = `Indices ${date_month}/24`;

        let ipc_new = data_ipc.data[data_ipc.data.length - 1][1];
        let ipc_old = data_ipc.data[data_ipc.data.length - 2][1];
        ipc_percent = Math.round(((ipc_new - ipc_old) / ipc_old) * 100 * 100) / 100;
        //console.log("ipc_percent", ipc_percent);

        ipc_percent_txt = ipc_percent.toLocaleString("es-AR", { minimumFractionDigits: 2 });
        document.querySelector(".indices_short_ipc_percent").textContent = ipc_percent_txt + "%";
    })
    .catch((error) => console.log(error));

let url_cba_cbt =
    "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BARIA_0_D_26,150.1_CSTA_BATAL_0_D_20&collapse=month&start_date=2016-01-01&limit=1000&format=json";

fetch(url_cba_cbt)
    .then((response) => response.json())
    .then((data_cba_cbt) => {
        // console.log("data_cba.Length", data_cba_cbt.data.length - 1);
        // console.log("data_cba.Count", data_cba_cbt.count);
        // console.log("data_cba.data[98]", data_cba_cbt.data[98][1]);
        // console.log("DATA-CBA", data_cba_cbt.data[data_cba_cbt.data.length - 1][1]);

        let cba = Math.round(data_cba_cbt.data[data_cba_cbt.data.length - 1][1] * 3.09);
        const cba_top_short = document.querySelector(".indices_short_cba");
        cba_top_short.innerHTML = `$${cba}`;

        let cbt = Math.round(data_cba_cbt.data[data_cba_cbt.data.length - 1][2] * 3.09);
        const cbt_top_short = document.querySelector(".indices_short_cbt");
        cbt_top_short.innerHTML = `$${cbt}`;
    })
    .catch((error) => console.log(error));
