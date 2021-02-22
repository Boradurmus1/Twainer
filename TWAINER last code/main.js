/**
 * Pop-up ekranı açıldığında çalışan fonksiyon
 */
window.onload = function() {
  chrome.storage.local.get(['key'], function(sonuc) {
    //Düğmeye tıklandığında hafızadaki değişkenin değerinin alınmasına yarar
    document.getElementById(sonuc.key).click();
    //Seçilen düğme hafızada depolandıktan sonra ekrana uyarı kutucuğu içerisinde seçili filtrenin ismi yazdırılır
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
 * Seçilen filtreyi hafızaya kaydeden fonksiyon
 * @param {String} deger seçilen filtre
 */
function filtreSec(deger) {
    chrome.storage.local.set({key: deger}, function() {
      document.getElementById(deger).autofocus;
    });
}
/**
 * Seçilen filtreyi sekmeye uygulayan fonksiyon
 * @param {*} filtre_dosya 
 */
function filtreUygula(filtre_dosya) {
  chrome.tabs.executeScript({ file: filtre_dosya });
}

//Sınıf adı "dugme" ile başlayan her düğme için çalışan fonksiyon
document.querySelectorAll(['[class^="dugme"]']).forEach(buton => {
  const filtre = buton.id;
  //Kullanıcının tıklama hareketini takip eden bir listener eklenir 
  //Kullanıcının seçtiği düğmeyi sırasıyla filtreSec ve filtreUygula fonksiyonlarının içine parametre olarak atar
  buton.addEventListener("click", function() {
    filtreSec(buton.id);
    filtreUygula(`filtreler/${filtre}.js`); 
  });
});