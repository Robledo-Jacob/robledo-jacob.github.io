
function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


var options = {
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
 
}

document.getElementById('currentDate').innerHTML = new Date().toLocaleDateString('en-US', options);

// shows announcment if Friday
day = new Date().getDay();
let announcement = document.getElementById("announcment");

if (day == 5) {
    announcement.style.display = "block";
}
else {
    announcement.style.display = "none";
}

function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    document.getElementById("new").innerHTML = n;
    document.getElementById('new').innerHTML = new Date().toLocaleDateString('en-US', options);
  }