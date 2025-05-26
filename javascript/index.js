//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment()
  .tz("America/losAngeles")
  .format("dddd", "MMMM", "Do", "YYYY");
losAngelesTimeElement.innerHTML = moment()
  .tz("America/losAngeles")
  .format("HH:mm:ss A");
//New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
newYorkDateElement.innerHTML = moment()
  .tz("America/New_York")
  .format("dddd, MMMM Do YYYY");
newYorkTimeElement.innerHTML = moment()
  .tz("America/New_York")
  .format("HH:mm:ss A");
