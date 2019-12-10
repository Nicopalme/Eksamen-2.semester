// JS filen!! Samme regeler som CSS!

window.onload = function () {
   billingFunction();
   
}

// Tabelfunktionen
//......................................................................................
let pricat =[
  "CocaCola;738;157;315;132;245;0;0",
  "Newcastle;249;33;0;0;216;0;0",
  "Heineken;591;125;104;0;312;0;50",
  "Carlsberg;576;327;123;0;120;6;0",
  "Corona;327;126;0;0;201;0;0",
  "Sommersby;86;45;0;0;54;0;0",
  "Cristal;78;13;28;7;15;15;0",
  "Fosters;146;75;17;0;54;0;0",
  "Guinness;327;126;0;0;201;0;0",
  "Miller;86;45;0;0;54;0;0",
  "Pepsi;591;175;50;0;312;0;54",
  "RedBull;591;125;104;0;312;0;50",
  "Smirnoff;159;0;0;0;148;0;11",
  "Sol;146;75;17;0;54;0;0"
];

// let newFile = new File('../totalPricat.txt');
// let reader = new FileReader();
// pricat.readAsText(newFile);


sortPricat(pricat[0]);

function sortPricat(pricatLine){
 let result = pricatLine.split(";");
 return result;
};


function newTable(){

let table = document.getElementById("tableBody");

for(let i=0; i<pricat.length; i++){
let row = table.insertRow(i);

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


function machineOption() {
for(let i=0; i<pricat.length; i++){
machine = document.getElementById("machine");
machine.getElementsByTagName("option").innerHTML = result[8];
}
};



// Sorter tabellen efter søgning
//...................................................................
function sortTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("AATable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// Tabfunktioner
//...................................................................................
function billingFunction() {
  let liStat = document.getElementById("liStatistics");
  let liBill = document.getElementById("liBilling");
  // liStat.style.borderBottom = "solid 1px var(--darkBlue)";
 // liBill.style.border = "none";
  liStat.style.backgroundColor = "var(--grey)";
  liBill.style.backgroundColor = "transparent";
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
  liStat.style.backgroundColor = "transparent";
  liStat.style.fontWeight = "bold";
  liBill.style.fontWeight = "normal";
 }



