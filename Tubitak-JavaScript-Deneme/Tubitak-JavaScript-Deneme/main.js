/*window.onload = function() {
  document.getElementById("dugme-yesil").onclick = function() {
    var value = document.getElementById("dugme-yesil").value;


    chrome.storage.sync.set({'myLine': value}, function(){
      console.log(value);
    });  
  }

  document.getElementById("dugme-kirmizi").onclick = function() {
    chrome.storage.sync.get('myLine', function(data) {
      console.log(data.myLine);
    });
  }
}*/

/*function sec(e) {
  chrome.storage.local.set({
    'filtre': e.target.value
  });
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get('filtre', function(data) {
    document.getElementById(data.filtre).autofocus = true;

  });
  var filtreler = document.querySelectorAll('button[class=dugme]');
  for (var i=0;i < filtreler.length; i++) {
    filtreler[i].addEventListener('sec', sec);
  }

});*/

//Listeners for colorblind filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

// stores the currently selected filter so that when the user stops hovering
// over options, the currently selected filter will still be applied to the popup

window.onload = function() {
  //if (!chrome || !chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get(["key"], function(result) {
    try {
      document.getElementById(result.key).click();
    } catch (e) {
      console.log(e);
    }
  });
};

/**
 * Sets the selected filter in storage
 * @param {String} value the selected input
 */
function setSelected(value) {
  try {
    chrome.storage.local.set({ key: value }, function() {
      document.getElementById(value).autofocus = true;
    });
  } catch {}
}

function injectFilter(fileName) {
  chrome.tabs.executeScript({ file: fileName });
}

document.querySelectorAll(['[class^="dugme"]']).forEach(buton => {
  const filter = buton.id;
  buton.addEventListener("click", function() {
    // page-specific filters
    setSelected(buton.id);
    injectFilter(`filters/${filter}.js`);
    // popup-specific filters
    //applyFilter((window.selectedFilter = filter));
  });
});