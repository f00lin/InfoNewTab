


var showTimeZones = function() {
    var a = moment().tz("America/New_York").format('HH:mm');
    var b = moment().tz("Australia/Sydney").format('HH:mm');
    document.getElementById("tzNewYork").innerHTML = a;
    document.getElementById("tzSydney").innerHTML = b;
}




var init = function() {
    showTimeZones();
    setInterval(showTimeZones, 250);
}


document.addEventListener('DOMContentLoaded', function () { 
    init();
}, false)
    
