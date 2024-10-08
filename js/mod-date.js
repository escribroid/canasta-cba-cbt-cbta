export const yearGet = new Date().getFullYear();
let monthGet = new Date().getMonth() + 1;

// function datesMain() {
let selectedYear;
let selectedMonth;
let array_years = [];
let canasta_year_select = document.getElementById("canasta_date_year");
let canasta_month_select = document.getElementById("canasta_date_month");

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

        cbt = Math.round(data.data[data.data.length - 1][2] * 3.09);
        const cbt_top_short = document.querySelector(".indices_short_cbt");
        cbt_top_short.innerHTML = `$${cbt}`;

        //console.log("cba_cbt", data.data[2][0]);

        //selectedYear = canasta_year_select.value;
        //console.log("selectedYear2:", selectedYear);

        for (let i = 0; i < data.data.length; i++) {
            // if (data.data[i][0] == "2022-05-01") {
            //     // console.log("date[i][0]", data.data[i][0]);
            //     // console.log("date[i][0]", data.data[i][1]);
            //     // console.log("cba_cbt[i][1]", data.data[i][2]);
            // }
        }
    },
    (error) => console.log("ERROR", error)
);

for (let i = 0; i <= yearGet; i++) {
    if (yearGet - i >= 2016) {
        array_years.push(`
            <option class="canasta_date_option" value="${yearGet - i}"> ${yearGet - i} </option>`);
    }
}

let str_years = array_years.join("");
canasta_year_select.innerHTML = `
            <option class="canasta_date_option" value="year" selected disabled>Año</option> + ${str_years}`;

// EVENT change select year ++++++++++++++++++++++++++++++++++++++++++
// canasta_year_select.addEventListener("change", function () {
//     fetchDataFromAPI(
//         (data) => {
//             // Data en TOP short cba cbt ++++++++++++++++++++++++
//             cba = Math.round(data.data[data.data.length - 1][1] * 3.09);

//             cbt = Math.round(data.data[data.data.length - 1][2] * 3.09);

//             //console.log("cba_cbt", data.data[2][0]);

//             selectedYear = canasta_year_select.value;

//             for (let i = 0; i < data.data.length; i++) {
//                 if (data.data[i][0] == "2022-06-01") {
//                     // console.log("date[i][0]", data.data[i][0]);
//                     // console.log("date[i][0]", data.data[i][1]);
//                     // console.log("cba_cbt[i][1]", data.data[i][2]);
//                 }
//             }

//             selectedYear = canasta_year_select.value;
//             //console.log("selectedYear:", selectedYear);
//             ///console.log("Mes seleccionado:", selectedMonth);
//             canasta_compare_cbt.innerHTML = `${selectedYear}`;

//             if (selectedYear == "2016") {
//                 //console.log("Año seleccionado es 2016");
//                 document.querySelector(".canasta_month_option[value='01']").setAttribute("disabled", true);
//                 document.querySelector(".canasta_month_option[value='02']").setAttribute("disabled", true);
//                 document.querySelector(".canasta_month_option[value='03']").setAttribute("disabled", true);
//                 canasta_month_select.value = "04";
//                 selectedMonth = canasta_month_select.value;
//                 canasta_compare_cba.innerHTML = `${selectedMonth}`;

//                 //console.log("Mes seleccionado:", selectedMonth);
//             } else {
//                 document.querySelector(".canasta_month_option[value='01']").removeAttribute("disabled");
//                 document.querySelector(".canasta_month_option[value='02']").removeAttribute("disabled");
//                 document.querySelector(".canasta_month_option[value='03']").removeAttribute("disabled");
//             }
//             //console.log("Mes seleccionado 3:", selectedMonth);
//         },
//         (error) => console.log("ERROR", error)
//     );

//     // canasta_month_select.addEventListener("change", function () {
//     //     selectedMonth = canasta_month_select.value;
//     //     console.log("Mes seleccionado 2:", selectedMonth);
//     //     canasta_compare_cba.innerHTML = `${selectedMonth}`;
//     // });
// });

//console.log("año seleccionado:", selectedYear);

// Función de callback que se ejecutará cuando cambie el valor
function handleMonthChange(callbackMonth, callbackYear, callCba, callCbt) {
    canasta_month_select.addEventListener("change", function () {
        selectedMonth = canasta_month_select.value;
        selectedYear = canasta_year_select.value;
        console.log("AÑO seleccionado en evento Month:", selectedYear);
        console.log("Mes seleccionado en evento Month:", selectedMonth);

        if (parseInt(selectedMonth) > monthGet) {
            if (parseInt(selectedYear) == yearGet) {
                //console.log("No existe aun");
            }
        }

        fetchDataFromAPI(
            (data) => {
                // Data en TOP short cba cbt ++++++++++++++++++++++++
                cba = Math.round(data.data[data.data.length - 1][1] * 3.09);
                //console.log("cba", cba);

                cbt = Math.round(data.data[data.data.length - 1][2] * 3.09);
                //console.log("cbt", cbt);

                //console.log("cba_cbt", data.data[2][0]);

                //selectedYear = canasta_year_select.value;
                //console.log("selectedYear2:", selectedYear);

                if (selectedMonth < 10) {
                    selectedMonth = "0" + selectedMonth;
                }

                for (let inn = 0; inn < data.data.length; inn++) {
                    if (data.data[inn][0] == `${selectedYear}-${selectedMonth}-01`) {
                        console.log("date[i][0]", data.data[inn][0]);
                        console.log("date[i][0]", data.data[inn][1]);
                        console.log("cba_cbt[i][1]", data.data[inn][2]);
                        canasta_compare_cba.innerHTML = `${data.data[inn][1]}`;
                        canasta_compare_cbt.innerHTML = `${data.data[inn][2]}`;
                    }
                }
            },
            (error) => console.log("ERROR", error)
        );

        // Ejecuta el callback con el valor actualizado
        if (callbackMonth) {
            callbackMonth(selectedMonth);
        }

        if (callCba) {
            callCba(selectedMonth, cba);
        }
    });

    canasta_year_select.addEventListener("change", function (data) {
        selectedYear = canasta_year_select.value;
        selectedMonth = canasta_month_select.value;

        if (parseInt(selectedYear) == yearGet) {
            if (parseInt(selectedMonth) > monthGet) {
                //console.log("No existe aun");
            }
        }

        if (selectedYear == "2016") {
            //console.log("Año seleccionado es 2016");
            document.querySelector(".canasta_month_option[value='1']").setAttribute("disabled", true);
            document.querySelector(".canasta_month_option[value='2']").setAttribute("disabled", true);
            document.querySelector(".canasta_month_option[value='3']").setAttribute("disabled", true);
            canasta_month_select.value = "4";
            selectedMonth = canasta_month_select.value;
            canasta_compare_cba.innerHTML = `${selectedMonth}`;

            //console.log("Mes seleccionado:", selectedMonth);
        } else {
            document.querySelector(".canasta_month_option[value='1']").removeAttribute("disabled");
            document.querySelector(".canasta_month_option[value='2']").removeAttribute("disabled");
            document.querySelector(".canasta_month_option[value='3']").removeAttribute("disabled");
        }

        // if año actual, deshabilita los meses que no existen
        if (selectedYear == yearGet) {
            //console.log("Año seleccionado es el actual", selectedMonth);
            if (parseInt(selectedMonth) >= monthGet) {
                let month_actual = (monthGet - 2).toString();
                selectedMonth = canasta_month_select.value;
                canasta_month_select.value = month_actual.toString();
                selectedMonth = canasta_month_select.value;

                //console.log("canasta_month_Value 22", canasta_month_select.value);
                //console.log("Mes seleccionado 22:", selectedMonth);

                canasta_compare_cba.innerHTML = `${cba}`;
                canasta_compare_cbt.innerHTML = `${cbt}`;

                // fetchDataFromAPI(
                //     (data) => {
                //         if (selectedMonth < 10) {
                //             selectedMonth = "0" + selectedMonth;
                //         }

                //         for (let inn = 0; inn < data.data.length; inn++) {
                //             if (data.data[inn][0] == `${selectedYear}-${selectedMonth}-01`) {
                //                 console.log("date[i][0]", data.data[inn][0]);
                //                 console.log("date[i][0]", data.data[inn][1]);
                //                 console.log("cba_cbt[i][1]", data.data[inn][2]);
                //                 canasta_compare_cba.innerHTML = `${data.data[inn][1]}`;
                //                 canasta_compare_cbt.innerHTML = `${data.data[inn][2]}`;
                //             }
                //         }
                //     },
                //     (error) => console.log("ERROR", error)
                // );
            }

            for (let i = monthGet; i <= 12; i++) {
                document.querySelector(`.canasta_month_option[value='${i}']`).setAttribute("disabled", true);
            }
        } else {
            for (let i = monthGet; i <= 12; i++) {
                document.querySelector(`.canasta_month_option[value='${i}']`).removeAttribute("disabled");
            }
        }

        //console.log("Año seleccionado dentro del evento:", selectedYear);

        fetchDataFromAPI(
            (data) => {
                //selectedYear = canasta_year_select.value;

                // Data en TOP short cba cbt ++++++++++++++++++++++++
                cba = Math.round(data.data[data.data.length - 1][1] * 3.09);
                //console.log("cba 2", cba);

                cbt = Math.round(data.data[data.data.length - 1][2] * 3.09);
                //console.log("cbt 2", cbt);

                //console.log("cba_cbt", data.data[2][0]);

                //selectedYear = canasta_year_select.value;
                console.log("selectedYear2:", selectedYear);
                console.log("SSselectedMonth", selectedMonth);

                if (selectedMonth < 10) {
                    selectedMonth = "0" + selectedMonth;
                }

                for (let i = 0; i < data.data.length; i++) {
                    if (data.data[i][0] == `${selectedYear}-${selectedMonth}-01`) {
                        console.log("date[i][0]", data.data[i][0]);
                        console.log("date[i][0]", data.data[i][1]);
                        console.log("cba_cbt[i][1]", data.data[i][2]);
                        canasta_compare_cba.innerHTML = `${data.data[i][1]}`;
                        canasta_compare_cbt.innerHTML = `${data.data[i][2]}`;
                    }
                }
            },
            (error) => console.log("ERROR", error)
        );

        // Ejecuta el callback con el valor actualizado
        if (callbackYear) {
            callbackYear(selectedYear);
        }

        if (callCbt) {
            callCbt(selectedYear, cbt);
        }
    });
}

function doCallCba(month, cba) {
    //console.log("cba-22", cba);
    //console.log("Mes seleccionado 22:", month);
}

function doCallCbt(years, cbt) {
    //console.log("cbt-22", cbt);
    //console.log("Año seleccionado 22:", years);
}

// Función que devuelve el valor actualizado
function doSomethingWithSelectedYear(years) {
    //canasta_compare_cba.innerHTML = `${years}`;
    //console.log("Año seleccionado fuera del evento, usando callback:", years);
    // Aquí haces lo que necesites con el año seleccionado
}

// Configurar el listener y pasarle una función de callback
//handleMonthChange(doSomethingWithSelectedMonth, doSomethingWithSelectedYear);

// Función que usa el valor actualizado
function doSomethingWithSelectedMonth(month) {
    //console.log("Mes seleccionado fuera del evento, usando callback:", month);
    // Aquí haces lo que necesites con el mes seleccionado
}

handleMonthChange(doSomethingWithSelectedMonth, doSomethingWithSelectedYear, doCallCba, doCallCbt);

// Configurar el listener y pasarle una función de callback
//handleMonthChange(doSomethingWithSelectedMonth, doSomethingWithSelectedYear);

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
