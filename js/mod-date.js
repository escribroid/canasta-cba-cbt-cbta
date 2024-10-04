export const year = new Date().getFullYear();

function datesMain() {
    let selectedYear;
    let array_years = [];
    let canasta_year_select = document.getElementById("canasta_date_year");
    let canasta_month_select = document.getElementById("canasta_date_month");
    let selectedMonth = canasta_month_select.value;

    for (let i = 0; i <= year; i++) {
        if (year - i >= 2016) {
            array_years.push(`
            <option class="canasta_date_option" value="${year - i}"> ${year - i} </option>`);
        }
    }

    let str_years = array_years.join("");

    canasta_year_select.innerHTML = str_years;

    canasta_year_select.addEventListener("change", function () {
        selectedYear = canasta_year_select.value;
        console.log("selectedYear:", selectedYear);
        ///console.log("Mes seleccionado:", selectedMonth);

        if (selectedYear == "2016") {
            //console.log("Año seleccionado es 2016");
            document.querySelector(".canasta_month_option[value='01']").setAttribute("disabled", true);
            document.querySelector(".canasta_month_option[value='02']").setAttribute("disabled", true);
            document.querySelector(".canasta_month_option[value='03']").setAttribute("disabled", true);
            canasta_month_select.value = "04";
            selectedMonth = canasta_month_select.value;

            console.log("Mes seleccionado:", selectedMonth);
        } else {
            if (canasta_month_select.querySelector(".canasta_month_option[value='01']").hasAttribute("disabled")) {
                document.querySelector(".canasta_month_option[value='01']").removeAttribute("disabled");
                document.querySelector(".canasta_month_option[value='02']").removeAttribute("disabled");
                document.querySelector(".canasta_month_option[value='03']").removeAttribute("disabled");

                //canasta_month_select.insertBefore(option01_month, canasta_month_select.children[1]);
                //canasta_month_select.insertBefore(option02_month, canasta_month_select.children[2]);
                //canasta_month_select.insertBefore(option03_month, canasta_month_select.children[3]);
            }
        }
    });

    canasta_month_select.addEventListener("change", function () {
        selectedMonth = canasta_month_select.value;
        console.log("Mes seleccionado 2:", selectedMonth);
    });

    let cba;
    let url_cba_cbt =
        "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BARIA_0_D_26,150.1_CSTA_BATAL_0_D_20&collapse=month&start_date=2016-01-01&limit=1000&format=json";

    // Función centralizada para hacer fetch
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
            console.log("selectedYear2:", selectedYear);

            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i][0] == "2022-05-01") {
                    console.log("date[i][0]", data.data[i][0]);
                    console.log("date[i][0]", data.data[i][1]);
                    console.log("cba_cbt[i][1]", data.data[i][2]);
                }
            }
        },
        (error) => console.log("ERROR", error)
    );
}

datesMain();
