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

    async function getCbaCbtData() {
        try {
            const response = await fetch(url_cba_cbt);
            const data_cba_cbt = await response.json();
            const cba_cbt = data_cba_cbt.data;

            // Data en TOP short cba cbt +++++++++++++++++++++++++++
            cba = Math.round(cba_cbt[cba_cbt.length - 1][1] * 3.09);
            const cba_top_short = document.querySelector(".indices_short_cba");
            cba_top_short.innerHTML = `$${cba}`;

            let cbt = Math.round(cba_cbt[cba_cbt.length - 1][2] * 3.09);
            const cbt_top_short = document.querySelector(".indices_short_cbt");
            cbt_top_short.innerHTML = `$${cbt}`;
            //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            //console.log("cba_cbt", cba_cbt[2][0]);

            selectedYear = canasta_year_select.value;
            console.log("selectedYear2:", selectedYear);

            for (let i = 0; i < cba_cbt.length; i++) {
                if (cba_cbt[i][0] == "2022-05-01") {
                    // console.log("date[i][0]", cba_cbt[i][0]);
                    // console.log("date[i][0]", cba_cbt[i][0]);
                    // console.log("cba_cbt[i][1]", cba_cbt[i][2]);
                }
            }
        } catch (error) {
            console.log("ERROR", error);
        }
    }

    getCbaCbtData();
}

datesMain();
