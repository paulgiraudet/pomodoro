//initializing some var for the start
var breakCount = 5 ;
var sessionCount = 25 ;
var temporaryCount = 25 ;
//used to On/Off the timer
var switchOnOff = 1 ;
//as we are -- this at the start of our timer it have to be set at 1
var seconds = 1;
//used to launch the interval for the timer function
var id ="";


//our jquery
$(document).ready(function(){


//function for the timer
$("#timerType").text
  function timerOn(count){

    //just getting this to change the "title" to session or break
    var typeOfTimer = $("#timerType").text();
    //basic timer with 1s delay
    seconds--;
    //adding a 0 for numbers going to 0 to 9 to avoid things like 2:2
    if(seconds<10 && seconds>-1){
      $("#timer").text(sessionCount+":0"+seconds);
    }
    //getting here only when we want to switch seconds from 00 to 59
    else if(seconds===-1){
      seconds=59;
      //that's a minute less
      sessionCount--;
      //getting here only when the timer end
      if(sessionCount===-1){
        //we are switching value of session and break length for alterning timers
        //using a temporary value to save the next timer value
        sessionCount=breakCount;
        breakCount=temporaryCount;
        temporaryCount=sessionCount;
        //at the start of our timer we are forced to take off a minute (ex : from 5:00 to 4:59)
        sessionCount--;

        //just switching timer type
        if(typeOfTimer==="Session"){
          $("#timerType").text("Break");
        }
        else{
          $("#timerType").text("Session");
        }
      }
      //basic display timer
      $("#timer").text(sessionCount+":"+seconds);
    }

    //only between seconds = 10 and seconds = 59
    else{
      $("#timer").text(sessionCount+":"+seconds);
    }
  }

//function to controll break and session length

//take off 1 to break length
  $("#breakTimeMinus").click(function(){
    if(breakCount > 1){
      breakCount--;
      $("#breakLength").text(breakCount);
    }
  });
//add 1 to break length
  $("#breakTimePlus").click(function(){
    if(breakCount < 5){
      breakCount++;
      $("#breakLength").text(breakCount);
    }
  });

//we just want to start with our temporaryCount equal to sessionCount
//take off 1 to session length
  $("#sessionTimeMinus").click(function(){
    if(sessionCount > 1){
      sessionCount--;
      $("#sessionLength").text(sessionCount);
      $("#timer").text(sessionCount);
      temporaryCount--;
    }
  });
  //add 1 to session length
  $("#sessionTimePlus").click(function(){
    if(sessionCount < 25){
      sessionCount++;
      temporaryCount++;
      $("#sessionLength").text(sessionCount);
      $("#timer").text(sessionCount);
    }
  });

//On/Off function with basic switch
  $("#controlTimer").click(function(){
    $("button").toggle();
    if(switchOnOff === 1){
      switchOnOff=0;
      //modifying the icon
      $("#controlTimer").removeClass("fa-play").addClass("fa-pause");
      //launching our timer function instantly and then with a 1s delay
      timerOn();
      id=setInterval(timerOn,1000);
      // $("#reset").show(this);
    }
    else if(switchOnOff === 0){
      switchOnOff=1;
      //modifying the icon
      $("#controlTimer").removeClass("fa-pause").addClass("fa-play");
      //stoping our timer
      clearInterval(id);
    }
  })

//reset button with initial var value
  $("#reset").click(function(){
    switchOnOff=1;
    $("#controlTimer").removeClass("fa-pause").addClass("fa-play");
    clearInterval(id);
    seconds=1;
    sessionCount=temporaryCount;
    $("#timer").text(sessionCount);
  })

});
