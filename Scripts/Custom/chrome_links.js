

// loads chrome://apps 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('appslink').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://apps' });
    });
});


// loads chrome://extensions

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('extensionslink').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://extensions' });
    });
});


// loads chrome://settings

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('settingslink').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://settings' });
    });
});


// loads chrome://history

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('historylink').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://history' });
    });
});


// loads chrome://bookmarks

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bookmarkslink').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://bookmarks' });
    });
});


// loads chrome://downloads

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadslink').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://downloads' });
    });
});

