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



