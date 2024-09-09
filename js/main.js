// main.js
import { year } from "./mod-date.js";
import { version } from "./mod-version.js";
import indices_manuales from "./mod-indices.js";

// yearUpdated
//const yearUpdated = document.querySelector(".copyleftYear").innerHTML = year;
// version
const versionUpdated = (document.querySelector(".version").innerHTML = version);

// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// const popover = new bootstrap.Popover(".popover-dismiss", {
//   trigger: "focus",
// });

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))