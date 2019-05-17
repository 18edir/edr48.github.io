chrome.runtime.onInstalled.addListener(function() {
    var newURL = "https://18edir.github.io/edr48.github.io/auth/authentication.html"
    chrome.tabs.create({url:newURL});
});
