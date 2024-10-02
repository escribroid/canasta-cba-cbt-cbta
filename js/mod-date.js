export const year = new Date().getFullYear();
let array_years = [];
let selectedYear;

for (let i = 0; i <= year; i++) {
    if (year - i >= 2016) {
        array_years.push(`
            <option class="canasta_date_option" value="${year - i}"> ${year - i} </option>`);
    }
}

let str_years = array_years.join("");
let canasta_year_select = document.getElementById("canasta_date_year");
let canasta_month_select = document.getElementById("canasta_date_month");
let selectedMonth;

canasta_year_select.innerHTML =
    '<option value="anio" class="canasta_date_month_anio" selected disabled>• Año •</option>' + str_years;

const option01_month = document.querySelector(".canasta_month_option[value='01']").cloneNode(true);
const option02_month = document.querySelector(".canasta_month_option[value='02']").cloneNode(true);
const option03_month = document.querySelector(".canasta_month_option[value='03']").cloneNode(true);

// Guardar los options en un array
const removedOptions = [option01_month, option02_month, option03_month];

canasta_year_select.addEventListener("change", function () {
    selectedYear = canasta_year_select.value;
    console.log("selectedYear:", selectedYear);
    console.log("Mes seleccionado:", selectedMonth);

    if (selectedYear == "2016") {
        console.log("Año seleccionado es 2016");
        document.querySelector(".canasta_month_option[value='01']").setAttribute("disabled", true);
        document.querySelector(".canasta_month_option[value='02']").setAttribute("disabled", true);
        document.querySelector(".canasta_month_option[value='03']").setAttribute("disabled", true);
        canasta_month_select.value = "04";
        selectedMonth = canasta_month_select.value;

        console.log("Mes seleccionado:", selectedMonth);
    } else {
        console.log("Año NOO 2016");

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
    console.log("Mes seleccionado:", selectedMonth);
});
