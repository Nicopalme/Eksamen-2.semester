// Run function when DOM is loaded
//......................................................................................
$(document).ready(billingFunction);
$(document).ready(newTable);
$(document).ready(newOptionMachine);
$(document).ready(newOptionLocation);
$(document).ready(newOptionBatch);

// Expected data from file
//......................................................................................
let pricat = [
  "CocaCola;738;157;315;132;245;13;0",
  "Newcastle;249;33;0;0;216;7;0",
  "Heineken;591;125;104;0;312;0;50",
  "Carlsberg;576;327;123;0;120;6;0",
  "Corona;327;126;0;0;201;9;0",
  "Sommersby;86;45;0;0;54;12;0",
  "Cristal;78;13;28;7;15;15;0",
  "Fosters;146;75;17;0;54;0;0",
  "Guinness;327;126;0;0;201;0;0",
  "Miller;86;45;0;0;54;13;0",
  "Pepsi;591;175;50;0;312;0;54",
  "RedBull;591;125;104;0;312;0;50",
  "Smirnoff;159;0;0;0;148;0;11",
  "Sol;146;75;17;0;54;0;0"
];


// let newFile = new File('../totalPricat.txt');
// let reader = new FileReader();
// pricat.readAsText(newFile);

// Sort and split the pricat
function sortPricat(pricatLine){
 let result = pricatLine.split(";");
 return result;
};

// Table function
//.............................................................
function newTable() {

  let table = document.getElementById("tableBody");

  // Run thrugh pricat and insert row and cells in the table for each data string
  for (let i = 0; i < pricat.length; i++) {

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

    // Insert data to the cells from pricat
    cell1.innerHTML = '<button type="button" class="btn">Export invoice <img src="img/exportblaa.png" style="padding-left:1em;"></button>';
    cell2.innerHTML = result[0];
    cell3.innerHTML = result[1];
    cell4.innerHTML = result[2];
    cell5.innerHTML = result[3];
    cell6.innerHTML = result[4];
    cell7.innerHTML = result[5];
    cell8.innerHTML = result[6];
    cell9.innerHTML = result[7];
  }
};



// MNJ TEST
//......................................................................................
let pricatMNJ = [
  //Location[0];Machine[1];Batch[2];Distributor[3];Material[4];Color[5]
  "Buffalo;HLZ151256;2019112119351753;CocaCola;1;15",
  "Buffalo;HLZ151256;2019112119351753;Newcastle;1;15",
  "Buffalo;HLZ151256;2019112119351754;Heineken;1;15",
  "Rochester;HLZ151245;2019112119351796;Carlsberg;1;15",
  "Rochester;HLZ151245;2019112119351796;Corona;1;15",
  "Syracuse;HLZ151275;2019112119351712;Sommersby;1;15",
  "Syracuse;HLZ151275;2019112119351712;Cristal;1;15",
  "Rochester;HLZ151246;2019112119351740;Fosters;1;15",
  "Syracuse;HLZ151275;2019112119351712;Guinness;1;15",
  "Rochester;HLZ151246;2019112119351740;Miller;1;15",
  "Syracuse;HLZ151276;2019112119351777;Pepsi;1;15",
  "Syracuse;HLZ151276;2019112119351777;RedBull;1;15",
  "Rochester;HLZ151245;2019112119351799;Smirnoff;1;15",
  "Buffalo;HLZ151256;2019112119351754;Sol;1;15"
];

// Sort and split the pricat
function sortPricatMNJ(pricatMNJLine) {
  let resultMNJ = pricatMNJLine.split(";");
  return resultMNJ;
};


// Option values from pricat to machine input field
//.............................................................
function newOptionMachine() {

  // Run thrugh pricat
  for (let i = 0; i < pricatMNJ.length; i++) {
    let resultMNJ = sortPricatMNJ(pricatMNJ[i]);
    var x = document.getElementById("machine");
    var option = document.createElement("option");

    // Create a new array with the maschine values from the pricat
    var newArray = [resultMNJ[1]];

    // getUnique();

    // Insert the values from the new array to an option
    option.text = newArray;

    // Create option
    x.add(option);

  }
 
};


// Sort out dublicates (HELP)
// https://www.tutorialrepublic.com/faq/how-to-remove-duplicate-values-from-a-javascript-array.php (HELP)
// ..............................
function getUnique(newArray){
for (i = 0; i < newArray.length; i++) {
  if (uniqueArray.indexOf(newArray[i]) === -1) {
    uniqueArray.push(newArray[i]);
  }
}
return uniqueArray;
}


// Option values from pricat to location input field
//.............................................................
function newOptionLocation() {

  for (let i = 0; i < pricatMNJ.length; i++) {
    let resultMNJ = sortPricatMNJ(pricatMNJ[i]);
    var x = document.getElementById("locations");
    var option = document.createElement("option");
    var newArraye = [resultMNJ[0]];
// getUnique();

    option.text = newArraye;

    x.add(option);

  }
 
};

// Option values from pricat to batch input field
//.............................................................
function newOptionBatch() {

  for (let i = 0; i < pricatMNJ.length; i++) {
    let resultMNJ = sortPricatMNJ(pricatMNJ[i]);
    var x = document.getElementById("batch");
    var option = document.createElement("option");
    var newArray = [resultMNJ[2]];
// getUnique();

    option.text = newArray;

    x.add(option);

  }
 
};


// Text from input fields to current .dataInfo
//.............................................................
function curLocation() {

  var x = document.getElementById("locations").value;
  document.getElementById("curLocationB").innerHTML = 'Location: ' + x ; 
  document.getElementById("curLocationS").innerHTML = 'Location: ' + x ; 
};

function curMachine() {

  var x = document.getElementById("machine").value;
  document.getElementById("curMachineB").innerHTML = 'Machine: ' + x ; 
  document.getElementById("curMachineS").innerHTML = 'Machine: ' + x ; 
};

function curBatch() {

  var x = document.getElementById("batch").value;
  document.getElementById("curBatchB").innerHTML = 'Batch: ' + x ; 
  document.getElementById("curBatchS").innerHTML = 'Batch: ' + x ; 
};






// Sort table on search (external script)
//.............................................................
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

// Tab functions
//...................................................................................
function billingFunction() {
  let liStat = document.getElementById("liStatistics");
  let liBill = document.getElementById("liBilling");
  liStat.style.backgroundColor = "var(--grey)";
  liBill.style.backgroundColor = "transparent";
  liBill.style.fontWeight = "bold";
  liStat.style.fontWeight = "normal";
}

function statisticsFunction() {
  let liStat = document.getElementById("liStatistics");
  let liBill = document.getElementById("liBilling");
  liBill.style.backgroundColor = "var(--grey)";
  liStat.style.backgroundColor = "transparent";
  liStat.style.fontWeight = "bold";
  liBill.style.fontWeight = "normal";
}