// This script runs in the background when the extension is loaded.

chrome.tabs.onCreated.addListener(function(tab) {
    // Check if a new tab is created
    if (tab.url === "chrome://newtab/") {
      // Open the new tab's URL with your extension's HTML page
      chrome.tabs.update(tab.id, { url: chrome.extension.getURL("newtab.html") });
    }
  });
  