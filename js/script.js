let url_cba = "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BARIA_0_D_26&limit=5000&format=json";

let url_cbt = "https://apis.datos.gob.ar/series/api/series/?ids=150.1_CSTA_BATAL_0_D_20&limit=5000&format=json"

fetch(url_cba)
.then(response => response.json())
.then(data_cba => {
  console.log(data_cba);
  console.log(data_cba.count);
  console.log(data_cba.data[98]);

  let view_cba = document.querySelector(".view_cba");

view_cba.innerHTML = "<p>Canasta Alimentaria " + data_cba.data[98][0] + " de: " + data_cba.data[98][1] + " y familia TIPO: " + data_cba.data[98][1]*3.09 + "</p>";
  
})
.catch(error => console.log(error));



fetch(url_cbt)
.then(response => response.json())
.then(data_cbt => {
  console.log(data_cbt);
  console.log(data_cbt.count);
  console.log(data_cbt.data[98]);

  let view_cbt = document.querySelector(".view_cbt");

  // view_cbt.innerHTML = "<p>Canasta Total " + data_cbt.data[98][0] + " de: " + data_cbt.data[98][1] + " y familia TIPO: " + data_cbt.data[98][1]*3.09 + "</p>";
  
})
.catch(error => console.log(error));




let tabla_equivalentes_edad_mujer_varon = {
  "0": [0.35, 0.35],
  "1": [0.37, 0.37],
  "2": [0.46, 0.46],
  "3": [0.51, 0.51],
  "4": [0.55, 0.55],
  "5": [0.6, 0.6],
  "6": [0.64, 0.64],
  "7": [0.66, 0.66],
  "8": [0.68, 0.68],
  "9": [0.69, 0.69],
  "10": [0.70, 0.79],
  "11": [0.72, 0.82],
  "12": [0.74, 0.85],
  "13": [0.76, 0.90],
  "14": [0.76, 0.96],
  "15": [0.77, 1.00],
  "16": [0.77, 1.03],
  "17": [0.77, 1.04],
  "18-29": [0.76, 1.02],
  "30-45": [0.77, 1.00],
  "46-60": [0.76, 1.00],
  "61-75": [0.67, 0.83],
  "76-120": [0.63, 0.74]
}





