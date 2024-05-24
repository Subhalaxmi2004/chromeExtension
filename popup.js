document.addEventListener('DOMContentLoaded', function() {
    var pickTitleBtn = document.getElementById('pickTitleBtn');
    var titleContainer = document.getElementById('titleContainer');
  
    pickTitleBtn.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var title = tab.title;
        titleContainer.textContent = title;
      });
    });
  });
  