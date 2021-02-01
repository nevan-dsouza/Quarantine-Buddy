var x = prompt("Enter the number of days you are quarantining for", "0");

var quarantine = parseInt(x);
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate()+quarantine);

var myfunc = setInterval(function() {

var today = new Date().getTime();

var remainingtime = countDownDate - today;
    
// Calculating days, hours, minutes and seconds left in quarantine 
var days = Math.floor(remainingtime / (1000 * 60 * 60 * 24));
var hours = Math.floor((remainingtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((remainingtime % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((remainingtime % (1000 * 60)) / 1000);
    

document.getElementById("days").innerHTML = days + " Days"
document.getElementById("hours").innerHTML = hours + " Hours" 
document.getElementById("mins").innerHTML = minutes + " Minutes" 
document.getElementById("secs").innerHTML = seconds + " Seconds" 
    
// Display msg when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "Your quarantine is offically over!";
}
}, 1000);


