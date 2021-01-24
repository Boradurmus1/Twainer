window.onload = function() {
  chrome.storage.local.get(['key'], function(sonuc) {
    document.getElementById(sonuc.key).click();
    if (sonuc.key=="protanopia") {
      window.alert("Şu an seçili filtre: Kırmızı Renk Körlüğü");
    }
    else if (sonuc.key=="deuteranopia") {
      window.alert("Şu an seçili filtre: Yeşil Renk Körlüğü");
    }
    else if (sonuc.key=="tritanopia") {
      window.alert("Şu an seçili filtre: Mavi Renk Körlüğü");
    }
    else {
      window.alert("Şu an seçili filtre: Normal");
    }
  });
};

/**
 * Sets the selected filter in storage
 * @param {String} value the selected input
 */
function filtreSec(deger) {
    chrome.storage.local.set({key: deger}, function() {
      document.getElementById(deger).autofocus;
    });
}

function filtreUygula(filtre_dosya) {
  chrome.tabs.executeScript({ file: filtre_dosya });
}

document.querySelectorAll(['[class^="dugme"]']).forEach(buton => {
  const filtre = buton.id;
  buton.addEventListener("click", function() {
    filtreSec(buton.id);
    filtreUygula(`filtreler/${filtre}.js`); 
  });
});