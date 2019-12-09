// JS filen!! Samme regeler som CSS!

window.onload = function () {
   billingFunction();
}


function billingFunction() {
  let liStat = document.getElementById("liStatistics");
  let liBill = document.getElementById("liBilling");
  // liStat.style.borderBottom = "solid 1px var(--darkBlue)";
 // liBill.style.border = "none";
  liStat.style.backgroundColor = "var(--grey)";
  liBill.style.backgroundColor = "var(--white)";
  liBill.style.fontWeight = "bold";
  liStat.style.fontWeight = "normal";
}


// // Det der sker, når man trykker på "Statistics"
function statisticsFunction() {
  let liStat = document.getElementById("liStatistics");
  let liBill = document.getElementById("liBilling");
  // liBill.style.borderBottom = "solid 1px var(--darkBlue)";
  //liStat.style.border = "none";
  liBill.style.backgroundColor = "var(--grey)";
  liStat.style.backgroundColor = "var(--white)";
  liStat.style.fontWeight = "bold";
  liBill.style.fontWeight = "normal";
 }

// Time and date kalender med mulighed for at vælge flere datoer

// Tabelfunktionen
let pricat =[
  "TOMRA;738;157;315;132;245;0;0;",
  "5Boro;738;157;315;132;245;0;0;",
  "CocaCola;738;157;315;132;245;0;0;",
  "Heinekin;738;157;315;132;245;0;0;",
  "Corona;738;157;315;132;245;0;0;",
  "Carlsberg;738;157;315;132;245;0;0;"
];

sortPricat(pricat[0])

function sortPricat(pricatLine){
 let result = pricatLine.split(";");
 return result;
};


function newTable(){

let table = document.getElementById("AATable");

for(let i=0; i<pricat.length; i++){
let row = table.insertRow(i+1);

let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);
let cell6 = row.insertCell(5);
let cell7 = row.insertCell(6);
let cell8 = row.insertCell(7);
let cell9 = row.insertCell(8);


let result = sortPricat(pricat[i]);

cell1.innerHTML = '<button type="button" class="btn">Export invoice</button>';
cell2.innerHTML =  result[0];
cell3.innerHTML =  result[1];
cell4.innerHTML =  result[2];
cell5.innerHTML =  result[3];
cell6.innerHTML =  result[4];
cell7.innerHTML =  result[5];
cell8.innerHTML =  result[6];
cell9.innerHTML =  result[7];
}
};
$(document).ready(newTable);
