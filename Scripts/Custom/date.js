var checkTimeFormat = function(t) {
    if(t < 10) {
        t = '0' + t;
    }
    return t;
}


var displayTime = function() {
    
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    
    // Add leading 0 to numbers under 10
    h = checkTimeFormat(h);
    m = checkTimeFormat(m);
    
    document.getElementById('time').innerHTML = h + ':' + m;
}

    
var timeInit = function() {
    displayTime();
    setInterval(displayTime, 1000);
    }


    

document.addEventListener('DOMContentLoaded', function() { 
    timeInit();
}, false)
    
