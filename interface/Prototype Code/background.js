var firebaseConfig = {
    apiKey: "AIzaSyBlJ5hd75bdU77oDAmH0F-otB1gE4ki-Xs",
    authDomain: "flash-notes-d104a.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
  };

chrome.runtime.onInstalled.addListener(function() {
    var newURL = "https://18edir.github.io/edr48.github.io/"
    chrome.tabs.create({url:newURL});
});
