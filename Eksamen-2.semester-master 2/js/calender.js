$(function(){
  $("#datepicker").datepicker();
 });
 
 $(function(){
  $("#datepicker").datepicker({
      dateFormat: "dd-mm-yy"
  });
 });
 $(function(){
  $("#datepicker").datepicker({
      changeMonth: true,
      changeYear: true
  });
 });
 $(function(){
  $("#datepicker").datepicker({
      minDate: 0,
      maxDate: "+1M +5D"
  });
 });
 
 $( function() {
 var from = $( "#fromDate" )
    .datepicker({
      dateFormat: "dd-mm-yy",
      changeMonth: true
    })
    .on( "change", function() {
      to.datepicker( "option", "minDate", getDate( this ) );
    }),
  to = $( "#toDate" ).datepicker({
    dateFormat: "dd-mm-yy",
    changeMonth: true
  })
  .on( "change", function() {
    from.datepicker( "option", "maxDate", getDate( this ) );
  });
 
 function getDate( element ) {
  var date;
  var dateFormat = "dd-mm-yy";
  try {
    date = $.datepicker.parseDate( dateFormat, element.value );
  } catch( error ) {
    date = null;
  }
 
  return date;
 }
 });
 
 
 $(function() {
     $('input[name="daterange"]').daterangepicker({
       opens: 'left'
     }, function(start, end, label) {
       console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
     });
   });