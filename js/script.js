function myFunction() {
    var today = new Date();
    var message;
    var addZero;
    
    
    var hour = today.getHours();
    ++hour;
    var minute = today.getMinutes();
    
    
      if (minute < 10){
    addZero = true;}
    else {addZero = false}
  
    
    var isPM;
    
    if (hour>11 && hour <24){
    isPM = true;}
    else { 
    isPM = false;}
    
    hour = convert(hour);
    
    
    if (addZero){
    var time = hour + ":0" + minute;}
    else{var time = hour + ":" + minute;}
    
    if (isPM){
    message = " If you order right now, your food will be ready at "+time+" PM";
    }
    else{
     message = " If you order right now, your food will be ready at "+time+" AM";
     }
    
    
    
   document.getElementById("ready").innerHTML= message;
    }
    
    function convert(hours)
    { if(hours>12){
     hours -=12;}
     
     return hours}