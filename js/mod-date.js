export const year = new Date().getFullYear();

// function datesMain() {
let selectedYear = "2024";
let array_years = [];
let canasta_year_select = document.getElementById("canasta_date_year");
let canasta_month_select = document.getElementById("canasta_date_month");
let selectedMonth = "01";
let cba;
let cbt;
let canasta_compare_cba = document.querySelector(".canasta_compare_cba");
let canasta_compare_cbt = document.querySelector(".canasta_compare_cbt");
let canasta_compare_cbaja = document.querySelector(".canasta_compare_cbaja");
let url_cba_cbt =
    "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BARIA_0_D_26,150.1_CSTA_BATAL_0_D_20&collapse=month&start_date=2016-01-01&limit=1000&format=json";

// Función centralizada fetch +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function fetchDataFromAPI(onSuccess, onError) {
    const url =
        "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BARIA_0_D_26,150.1_CSTA_BATAL_0_D_20&collapse=month&start_date=2016-01-01&limit=1000&format=json"; // Centralizamos la URL

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => onSuccess(data)) // Ejecuta el callback de éxito
        .catch((error) => (onError ? onError(error) : console.error("Error:", error))); // Callback de error opcional
}

// Llamada a función centralizada in TOP short cba cbt++++++++++++++++++++++++++++++++++++++++++
fetchDataFromAPI(
    (data) => {
        // Data en TOP short cba cbt ++++++++++++++++++++++++
        cba = Math.round(data.data[data.data.length - 1][1] * 3.09);
        const cba_top_short = document.querySelector(".indices_short_cba");
        cba_top_short.innerHTML = `$${cba}`;

        let cbt = Math.round(data.data[data.data.length - 1][2] * 3.09);
        const cbt_top_short = document.querySelector(".indices_short_cbt");
        cbt_top_short.innerHTML = `$${cbt}`;

        //console.log("cba_cbt", data.data[2][0]);

        selectedYear = canasta_year_select.value;
        //console.log("selectedYear2:", selectedYear);

        for (let i = 0; i < data.data.length; i++) {
            if (data.data[i][0] == "2022-05-01") {
                // console.log("date[i][0]", data.data[i][0]);
                // console.log("date[i][0]", data.data[i][1]);
                // console.log("cba_cbt[i][1]", data.data[i][2]);
            }
        }
    },
    (error) => console.log("ERROR", error)
);

for (let i = 0; i <= year; i++) {
    if (year - i >= 2016) {
        array_years.push(`
            <option class="canasta_date_option" value="${year - i}"> ${year - i} </option>`);
    }
}

let str_years = array_years.join("");
canasta_year_select.innerHTML = `
            <option class="canasta_date_option" value="year">Año</option> + ${str_years}`;

// EVENT change select year ++++++++++++++++++++++++++++++++++++++++++
canasta_year_select.addEventListener("change", function () {
    fetchDataFromAPI(
        (data) => {
            // Data en TOP short cba cbt ++++++++++++++++++++++++
            cba = Math.round(data.data[data.data.length - 1][1] * 3.09);

            cbt = Math.round(data.data[data.data.length - 1][2] * 3.09);

            //console.log("cba_cbt", data.data[2][0]);

            selectedYear = canasta_year_select.value;

            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i][0] == "2022-06-01") {
                    // console.log("date[i][0]", data.data[i][0]);
                    // console.log("date[i][0]", data.data[i][1]);
                    // console.log("cba_cbt[i][1]", data.data[i][2]);
                }
            }

            selectedYear = canasta_year_select.value;
            //console.log("selectedYear:", selectedYear);
            ///console.log("Mes seleccionado:", selectedMonth);
            canasta_compare_cbt.innerHTML = `${selectedYear}`;

            if (selectedYear == "2016") {
                //console.log("Año seleccionado es 2016");
                document.querySelector(".canasta_month_option[value='01']").setAttribute("disabled", true);
                document.querySelector(".canasta_month_option[value='02']").setAttribute("disabled", true);
                document.querySelector(".canasta_month_option[value='03']").setAttribute("disabled", true);
                canasta_month_select.value = "04";
                selectedMonth = canasta_month_select.value;
                canasta_compare_cba.innerHTML = `${selectedMonth}`;

                //console.log("Mes seleccionado:", selectedMonth);
            } else {
                document.querySelector(".canasta_month_option[value='01']").removeAttribute("disabled");
                document.querySelector(".canasta_month_option[value='02']").removeAttribute("disabled");
                document.querySelector(".canasta_month_option[value='03']").removeAttribute("disabled");
            }
            //console.log("Mes seleccionado 3:", selectedMonth);
        },
        (error) => console.log("ERROR", error)
    );

    // canasta_month_select.addEventListener("change", function () {
    //     selectedMonth = canasta_month_select.value;
    //     console.log("Mes seleccionado 2:", selectedMonth);
    //     canasta_compare_cba.innerHTML = `${selectedMonth}`;
    // });
});

// Función de callback que se ejecutará cuando cambie el valor
function handleMonthChange(callbackMonth, callbackYear) {
    canasta_month_select.addEventListener("change", function () {
        selectedMonth = canasta_month_select.value;
        //console.log("Mes seleccionado dentro del evento:", selectedMonth);

        fetchDataFromAPI(
            (data) => {
                // Data en TOP short cba cbt ++++++++++++++++++++++++
                cba = Math.round(data.data[data.data.length - 1][1] * 3.09);
                console.log("cba", cba);

                cbt = Math.round(data.data[data.data.length - 1][2] * 3.09);

                //console.log("cba_cbt", data.data[2][0]);

                selectedYear = canasta_year_select.value;
                //console.log("selectedYear2:", selectedYear);

                for (let i = 0; i < data.data.length; i++) {
                    if (data.data[i][0] == "2022-05-01") {
                        // console.log("date[i][0]", data.data[i][0]);
                        // console.log("date[i][0]", data.data[i][1]);
                        // console.log("cba_cbt[i][1]", data.data[i][2]);
                    }
                }
            },
            (error) => console.log("ERROR", error)
        );

        // Ejecuta el callback con el valor actualizado
        if (callbackMonth) {
            callbackMonth(selectedMonth);
        }
    });

    canasta_year_select.addEventListener("change", function () {
        selectedYear = canasta_year_select.value;
        //console.log("Año seleccionado dentro del evento:", selectedYear);

        fetchDataFromAPI(
            (data) => {
                // Data en TOP short cba cbt ++++++++++++++++++++++++
                cba = Math.round(data.data[data.data.length - 1][1] * 3.09);

                cbt = Math.round(data.data[data.data.length - 1][2] * 3.09);

                //console.log("cba_cbt", data.data[2][0]);

                selectedYear = canasta_year_select.value;
                console.log("selectedYear2:", selectedYear);

                for (let i = 0; i < data.data.length; i++) {
                    if (data.data[i][0] == "2022-05-01") {
                        // console.log("date[i][0]", data.data[i][0]);
                        // console.log("date[i][0]", data.data[i][1]);
                        // console.log("cba_cbt[i][1]", data.data[i][2]);
                    }
                }
            },
            (error) => console.log("ERROR", error)
        );

        // Ejecuta el callback con el valor actualizado
        if (callbackYear && cbt) {
            callbackYear(selectedYear, cbt);
        }
    });
}

// Función que devuelve el valor actualizado
function doSomethingWithSelectedYear(year, cbz) {
    console.log("cbt", cbz);
    canasta_compare_cba.innerHTML = `${cbz * year}`;

    console.log("Año seleccionado fuera del evento, usando callback:", year);
    // Aquí haces lo que necesites con el año seleccionado
}

// Configurar el listener y pasarle una función de callback
handleMonthChange(doSomethingWithSelectedMonth, doSomethingWithSelectedYear);

// Función que usa el valor actualizado
function doSomethingWithSelectedMonth(month) {
    //console.log("Mes seleccionado fuera del evento, usando callback:", month);
    // Aquí haces lo que necesites con el mes seleccionado
}

// Configurar el listener y pasarle una función de callback
handleMonthChange(doSomethingWithSelectedMonth, doSomethingWithSelectedYear);

//console.log("Mes seleccionado 4:", getSelectedMonth());

// canasta_month_select.addEventListener("change", function getmesSelect (mesSelect) {
//     (mesSelect) => {
//         selectedMonth = canasta_month_select.value;
//         console.log("Mes seleccionado 2:", selectedMonth);
//     };
// });

// canasta_month_select.addEventListener("change", function () {
//     selectedMonth = canasta_month_select.value;
//     console.log("Mes seleccionado 2:", selectedMonth);
// });

//console.log("Mes seleccionado 4:", getSelectedMonth());
