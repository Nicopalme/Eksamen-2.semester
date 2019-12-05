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

  function billingFunction(){
// Skifte første valgfagsbillede
document.getElementById("liStatistics").style.borderBottom = "solid 1px var(--darkBlue)";
document.getElementById("liStatistics").style.backgroundColor = "var(--grey)";
document.getElementById("liBilling").style.backgroundColor = "#ffffff";
  }
  function statisticsFunction(){
    // Skifte første valgfagsbillede
    document.getElementById("liBilling").style.borderBottom = "solid 1px var(--darkBlue)";
    document.getElementById("liBilling").style.backgroundColor = "var(--grey)";
    document.getElementById("liStatistics").style.backgroundColor = "#ffffff";
      }