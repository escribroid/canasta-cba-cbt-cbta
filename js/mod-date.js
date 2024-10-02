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

document.getElementById("canasta_date_year").innerHTML =
    '<option value="anio" class="canasta_date_month_anio" selected disabled>• Año •</option>' + str_years;

const option01 = document.querySelector(".canasta_month_option[value='01']").cloneNode(true);
const option02 = document.querySelector(".canasta_month_option[value='02']").cloneNode(true);
const option03 = document.querySelector(".canasta_month_option[value='03']").cloneNode(true);

// Guardar los options en un array
const removedOptions = [option01, option02, option03];

const yearSelect = document.getElementById("canasta_date_year");

yearSelect.addEventListener("change", function () {
    selectedYear = yearSelect.value;
    console.log("selectedYear:", selectedYear);

    if (selectedYear == "2016") {
        console.log("Año seleccionado es 2016");
        document.querySelector(".canasta_month_option[value='01']").remove();
        document.querySelector(".canasta_month_option[value='02']").remove();
        document.querySelector(".canasta_month_option[value='03']").remove();
    } else {
        console.log("Año NOO 2016");

        const selectMonth = document.querySelector("#canasta_date_month");

        if (!selectMonth.querySelector(".canasta_month_option[value='01']")) {
            selectMonth.insertBefore(option01, selectMonth.children[1]);
            selectMonth.insertBefore(option02, selectMonth.children[2]);
            selectMonth.insertBefore(option03, selectMonth.children[3]);
        }
    }
});

const monthSelect = document.getElementById("canasta_date_month");

monthSelect.addEventListener("change", function () {
    const selectedMonth = monthSelect.value;
    console.log("Mes seleccionado:", selectedMonth);
});
