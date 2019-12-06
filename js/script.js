// JS filen!! Samme regeler som CSS!

window.onload = function () {
   billingFunction();
}


function billingFunction() {
  let liStat = document.getElementById("liStatistics");
  let liBill = document.getElementById("liBilling");
  // liStat.style.borderBottom = "solid 1px var(--darkBlue)";
  liBill.style.border = "none";
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
  liStat.style.border = "none";
  liBill.style.backgroundColor = "var(--grey)";
  liStat.style.backgroundColor = "var(--white)";
  liStat.style.fontWeight = "bold";
  liBill.style.fontWeight = "normal";
 }

// Time and date kalender med mulighed for at vælge flere datoer

mobiscroll.range('#demo', {
  startInput: '#start',
  endInput: '#end'
});

mobiscroll.range('#date', {
  startInput: '#startDate',
  endInput: '#endDate',
  controls: ['date']
});

mobiscroll.range('#demo-non-form', {
  showSelector: false
});

var now = new Date(),
  week = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6, 23, 59)];

var instance = mobiscroll.range('#demo-external', {
  showOnTap: false,
  showOnFocus: false,
  showSelector: false,
  onInit: function (event, inst) {
      inst.setVal(week, true);
  }
});