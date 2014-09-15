// URL for IP in json format
var ip_url = "http://jsonip.appspot.com/"



// request IP

var xhr2 = new XMLHttpRequest();

xhr2.open("GET", ip_url, true);



// handle returned data

xhr2.onreadystatechange = function() {
  
  if(xhr2.readyState === 4 && xhr2.status == 200) {
    var obj = $.parseJSON(xhr2.responseText);
    
    $("#ip_address").html(obj.ip);
    }
}
xhr2.send(null);
