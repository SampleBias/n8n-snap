chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get('anthropicKey').then(data => {
    if (!data.anthropicKey) {
      chrome.runtime.openOptionsPage();
    }
  });
}); 