//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngeles.querySelector(".date");
let losAngelesTimeElement = losAngeles.querySelector(".time");
losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = moment().format("hh:mm:ss A");
