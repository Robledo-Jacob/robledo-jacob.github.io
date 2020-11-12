
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



function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


var options = {
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}

document.getElementById('currentDate').innerHTML = new Date().toLocaleDateString('en-US', options);










function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}



function adjust_severity_rating(rating) {
    document.getElementById('storm_severity_rating').innerHTML = rating;
}

function validate_form() {
    let full_name, phone_number, zip;
    full_name = document.getElementById('fullname');
    phone_number = document.getElementById('phone_number');
    zip = document.getElementById('zip');


    if (full_name.checkValidity() && phone_number.checkValidity() && zip.checkValidity()) {
        let win = window.open('thanks.html', '_blank');
        win.focus();
    }
}