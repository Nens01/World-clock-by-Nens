//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment().format("dddd", "MMMM", "Do", "YYYY");
losAngelesTimeElement.innerHTML = moment().format("HH:mm:ss A");
