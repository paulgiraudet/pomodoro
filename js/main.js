var breakCount = 5 ;
var sessionCount = 25 ;
var temporaryCount = 25 ;
var switchOnOff = 1 ;
var seconds = 1;
var id ="";

$(document).ready(function(){

$("#timerType").text
  function timerOn(count){
    var typeOfTimer = $("#timerType").text();
    seconds--;
    if(seconds<10 && seconds>-1){
      $("#timer").text(sessionCount+":0"+seconds);
    }
    else if(seconds===-1){
      seconds=59;
      sessionCount--;
      if(sessionCount===-1){
        sessionCount=breakCount;
        breakCount=temporaryCount;
        temporaryCount=sessionCount;
        sessionCount--;
        if(typeOfTimer==="Session"){
          $("#timerType").text("Break");
        }
        else{
          $("#timerType").text("Session");
        }
      }
      $("#timer").text(sessionCount+":"+seconds);
    }
    else{
      $("#timer").text(sessionCount+":"+seconds);
    }
  }

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
  });

  $("#sessionTimeMinus").click(function(){
    if(sessionCount > 1){
      sessionCount--;
      $("#sessionLength").text(sessionCount);
      $("#timer").text(sessionCount);
      temporaryCount--;
    }
  });
  $("#sessionTimePlus").click(function(){
    if(sessionCount < 25){
      sessionCount++;
      temporaryCount++;
      $("#sessionLength").text(sessionCount);
      $("#timer").text(sessionCount);
    }
  });


  $("#controlTimer").click(function(){
    if(switchOnOff === 1){
      switchOnOff=0;
      $("#controlTimer").removeClass("fa-play").addClass("fa-pause");
      timerOn();
      id=setInterval(timerOn,1000);

    }
    else if(switchOnOff === 0){
      switchOnOff=1;
      $("#controlTimer").removeClass("fa-pause").addClass("fa-play");
      clearInterval(id);
    }
  })

});
