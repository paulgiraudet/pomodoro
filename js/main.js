var breakCount = 5 ;
var sessionCount = 25 ;

$(document).ready(function(){

  $("#breakTimeMinus").click(function(){
    if(breakCount > 1){
      breakCount--;
    $("#breakLength").text(breakCount);
  }
  });
  $("#breakTimePlus").click(function(){
    if(breakCount < 5){
    breakCount++;
    $("#breakLength").text(breakCount);
  }
  })

});
