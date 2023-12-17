const blockList = [
  "https://es.pornhub.com", 
  "https://www.pornhub.com",
  "https://xvideos.com",
  "https://redtube.com",
  "https://es.redtube.com",
  "https://chaturbate.com",
  "https://xhamster.com"
];
    
chrome.runtime.onInstalled.addListener(function() {
    chrome.webNavigation.onCompleted.addListener(redirectIfNecessary);
});
chrome.webNavigation.onCompleted.addListener(redirectIfNecessary);

browser.runtime.onInstalled.addListener(function() {
browser.webNavigation.onCompleted.addListener(redirectIfNecessary);
});
browser.webNavigation.onCompleted.addListener(redirectIfNecessary);
  
  function redirectIfNecessary(details) {
    // Check if the URL matches the desired page
    if (blockList.find(blocked => details.url.includes(blocked)) != undefined) {
      // Redirect to another page
      chrome.tabs.update(details.tabId, {url: "https://fcanfran.github.io/marato-blocker/"});
    }
  }