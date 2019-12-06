// JS filen!! Samme regeler som CSS!
// $(function () {
//     $("#datepicker").datepicker();
// });

window.onload = function () {
  billingFunction();
}

// // SKift af indhold ved klik på person (Thore)
// function thoreFunction() {
//     // Bestemmer navnet som følger ned langs siden
//     document.getElementById("navneskilt").innerHTML = "Tores <br> Historie";
//     // Ændre teksten i "sig ja" paragraphen
//     document.getElementById("tekstJa").innerHTML = "<b>&quot</b> Jeg er vant til at sige ja til alle de ting der bare sådan kommer, men en af de hårdere ting, som jeg ikke lige helt havde tænkt over, er jo at man skal være på hele tiden.  <b>&quot</b>";
//     // Ændre teksten i valgfags paragraphen
//     document.getElementById("tekstValgfag").innerHTML = "<b>&quot</b> Før jeg startede havde jeg ikke rigtig tænkt, at jeg ville tage elektronisk musik, men så vi fik info om det, så tænkte jeg, at det lød fedt, så det ville jeg gerne prøve. Det kunne nemlig være sjovt at lære nogle andre ting, som man ikke lige selv lærer. Jeg har også en interesse for fotografering, så det er super fedt at prøve at have analog foto! I starten var det lidt svært, indtil man lige lærer det. Jeg har også haft kigget på sløjd når det kommer, for det kunne være sjovt at prøve at bygge ting.<b>&quot</b>";
//     // Ændre musik, alt efter valgfag
//     document.getElementById('myaudio').src = 'audio/elektroniskmusik.mp3';
//     // Skifte første valgfagsbillede
//     document.getElementById("valgfag1").style.backgroundImage = "url(img/valgfag_analog.jpg)";
//     // Skifte andet valgfagsbillede
//     document.getElementById("valgfag2").style.backgroundImage = "url(img/valgfag_elektronisk_musik.png)";

//     // Give vælg mig videoen en ramme (outline) når den er valgt (ved klik)
//     document.getElementById("interviewThore").style.outline = "solid 1.5em #D8C11D";
//     // Fjerne rammen fra Frans video
//     document.getElementById("interviewFran").style.outline = "none";
//     document.getElementById("stregtop").style.display = "block";
//     document.getElementById("stregtopfran").style.display = "none";
//   }


function h2Hover() {
  document.getElementsByTagName("h2").style.transform = "scale(1.5)";
}

function billingFunction() {
  let liStat = document.getElementById("liStatistics");
  let liBill = document.getElementById("liBilling");
  liStat.style.borderBottom = "solid 1px var(--darkBlue)";
  liBill.style.borderBottom = "none";
  liStat.style.backgroundColor = "var(--grey)";
  liBill.style.backgroundColor = "var(--white)";
  document.getElementById("changingContent").innerHTML = "<table> <col width=bor;15%bor;><col width=bor;20%bor;><tr><th><button type=bor;buttonbor; class=bor;btnbor;>Export all remaining invoices</button></th><th>Distributor</th><th>Total</th><th>ALU</th><th>PET</th><th>HDPE</th><th>Other plastics</th><th>Other material</th></tr><tr><td></td><td>Coca-cola</td><td>20504</td><td>1295</td><td>1245</td><td>2035</td><td>9541</td><td>5203</td></tr><tr><td></td><td>Pepsi</td><td>5230</td><td>1250</td></tr><tr><td></td><td>Carlsberg</td><td>1452</td><td>959</td></tr><tr><td></td><td>Dist</td><td>3210</td><td>2018</td></tr><tr><td></td><td>Dist</td><td>3210</td><td>2018</td></tr><tr><td></td><td>Dist</td><td>3210</td><td>2018</td></tr><table> ";
}

function statisticsFunction() {
  let liStat = document.getElementById("liStatistics");
  let liBill = document.getElementById("liBilling");
  liBill.style.borderBottom = "solid 1px var(--darkBlue)";
  liStat.style.borderBottom = "none";
  liBill.style.backgroundColor = "var(--grey)";
  liStat.style.backgroundColor = "var(--white)";
  document.getElementById("changingContent").innerHTML = "Visuel graf";
}

// Time and date kalender med mulighed for at vælge flere 
mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light'
};

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