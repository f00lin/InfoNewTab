// define the query

var base_url = "http://api.openweathermap.org/data/2.5/weather?q=";
var locale = "Edinburgh,uk";
var format = "json";
var unit = "metric";

var query_url = base_url + locale + '&mode=' + format + '&' + 'units=' + unit;



// make request

var xhr = new XMLHttpRequest();

xhr.open("GET", query_url, true);



// handle returned data

xhr.onreadystatechange = function() {
  
  if(xhr.readyState === 4 && xhr.status == 200) {
    var obj = $.parseJSON(xhr.responseText);
    
    // current location
    $("#location").html(obj.name);
    
    // display latitude and longitude
    $("#coords").html(formatCoords("latitude", obj.coord.lat, 0) + " " + " / " + " " + formatCoords("longitude", obj.coord.lon, 0));
    
    // basic weather information
    $("#conditions").html(wordToUpper(obj.weather[0].description));
    $("#currenttemp").html("Temp" + " " + "<span class=\"weather_data\">" + obj.main.temp.toFixed(0) + "&#176;C" + "</span");
    $("#windspeed").html("Wind" + " " + "<span class=\"weather_data\">" + obj.wind.speed.toFixed(0) + "m/s" + "</span>");
    
    
    // format and display sunrise/sunset times
    var sunriseTime = formatTime(obj.sys.sunrise);
    $("#sunrise").html("Sunrise" + " " + "<span class=\"weather_data\">" + sunriseTime + "</span>");
    
    var sunsetTime = formatTime(obj.sys.sunset);
    $("#sunset").html("Sunset" + " " + "<span class=\"weather_data\">" + sunsetTime + "</span>"); 
  }
  
  else {
      $("#currenttemp").html("openweathermap <br />is not responding");
      $("#sunrise").html("openweathermap <br />is not responding");
  }
}
xhr.send(null);




// format UNIX timestamps

var formatTime = function(unixTimestamp) {
    var dt = new Date(unixTimestamp * 1000);

    var hours = dt.getHours();
    var minutes = dt.getMinutes();

    // the above dt.get...() functions return a single digit
    // so I prepend the zero here when needed
    if (hours < 10) 
     hours = '0' + hours;

    if (minutes < 10) 
     minutes = '0' + minutes;

    return hours + ":" + minutes;
}




// format coordinates 

var formatCoords = function(coord_type, coord, digits) {
  
  var formattedCoord;
  
  if(coord_type === "latitude") {
    var absoluteLat;
    
    // North = positive, so just add compass notation 
    if(coord > 0) {
      absoluteLat = coord.toFixed(digits);
      var formattedLat = absoluteLat + "&#176;N";
      
    }
    
    // South = negative, so return absolute value before adding compass notation
    else {
      absoluteLat = Math.abs(coord).toFixed(digits);
      var formattedLat = absoluteLat + "&#176;S";
      
    }
    
    formattedCoord = formattedLat;
    
  }
  
  if(coord_type === "longitude") {
    var absoluteLon;
    
    // East = positive, so just add compass notation
    if(coord > 0) {
      absoluteLon = coord.toFixed(digits);
      var formattedLon = absoluteLon + "&#176;E";
    }
    
    // West = negative, so return absolute value before adding compass notation
    else {
      absoluteLon = Math.abs(coord).toFixed(digits);
      var formattedLon = absoluteLon + "&#176;W"
    }
    
    formattedCoord = formattedLon;
  }
  
  return formattedCoord;
}
    
  

// start each word in a string with uppercase

function wordToUpper(strSentence) {
    return strSentence.toLowerCase().replace(/\b[a-z]/g, convertToUpper);
 
    function convertToUpper() {
        return arguments[0].toUpperCase();
    }
}
  

