// add "search" capabilities to an input box.
var addSearch = function(elementId, callback) {
  var elem = document.getElementById(elementId);
  elem.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
      callback(elem.value);
    }
  });
}


addSearch("wikipedia", function(s) {
  window.location.href = 'https://en.wikipedia.org/wiki/?search=' + s;
});

addSearch("digg", function(s) {
  window.location.href = 'http://www.digg.com/search?q=' + s;
});

addSearch("reddit", function(s) {
  window.location.href = 'http://www.reddit.com/search?q=' + s;
});
