chrome.runtime.onInstalled.addListener(function() {
    chrome.webNavigation.onCompleted.addListener(redirectIfNecessary);
  });
  
  function redirectIfNecessary(details) {
    // Check if the URL matches the desired page
    if (details.url.includes("https://es.pornhub.com/")) {
      // Redirect to another page
      chrome.tabs.update(details.tabId, {url: "https://fcanfran.github.io/marato-blocker/"});
    }
  }