
//Düğmelere tıklandığında çağrılacak fonksiyonlar belirleniyor
window.onload=function(){
    document.getElementById("dugme-kirmizi").addEventListener("click", Kirmizi);
    document.getElementById("dugme-yesil").addEventListener("click", Yesil);
    document.getElementById("dugme-mavi").addEventListener("click", Mavi);


    
    //Saniyenin 1/30'unda chrome.storage'daki görüntü silinip yeni görüntü eklenmeli (while kullanılacak)
    //chrome.storage'a yüklenen ekran görüntüleri resim değişkenine eşitleniyor
    var resim=chrome.storage.local.get;
    
    //Fonksiyonların tanımlanması
    //Bütün fonksiyonlar while loopunda olacak boolean tanımlanacak fonksiyonu bitirmek için: if click eşit değildir fonksiyon ismi then break
    function Kirmizi() {
        //console.log('Hello!');
        document.getElementById("resim").onload = function() {
            var c = document.getElementById("Canvasdeneme");
            var ctx = c.getContext("2d");
            var img = document.getElementById("resim");
            ctx.drawImage(img, 0, 0);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            //console.log(imgData);
            var newImgData = [];
            //imgData'daki kırmızı değerini okuyup 150'ye büyük eşitse newImgData array'ine pixelin numarası (sayaç değişkeni) ekleniyor
            for (var sayaç = 0, l = imgData.data.length; sayaç <= l, sayaç += 1;) {

                for (var i = 0, l = imgData.data.length; i <= l, i += 4;) {
                    var kırmızı = imgData.data[i];
                    var yeşil = imgData.data[i+1];
                    var mavi = imgData.data[i+2];
            
                    if ([i]>=150) {
                    // [i]=100;
                        newImgData.push(sayaç);
                    }
                }
            }
        }
    }

    function Yesil() {
        //console.log('Hello!');
        document.getElementById("resim").onload = function() {
            var c = document.getElementById("Canvasdeneme");
            var ctx = c.getContext("2d");
            var img = document.getElementById("resim");
            ctx.drawImage(img, 0, 0);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            //console.log(imgData);
            var newImgData = [];
            //imgData'daki yeşil değerini okuyup 150'ye büyük eşitse newImgData array'ine pixelin numarası (sayaç değişkeni) ekleniyor
            for (var sayaç = 0, l = imgData.data.length; sayaç <= l, sayaç += 1;) {
                for (var i = 0, l = imgData.data.length; i <= l, i += 4;) {
                    var kırmızı = imgData.data[i];
                    var yeşil = imgData.data[i+1];
                    var mavi = imgData.data[i+2];
            
                    if ([i+1]>=150) {
                        // [i+1]=100;
                        newImgData.push(sayaç);
                    }
                }
            }
        }
    }
    
    function Mavi() {
        //console.log('Hello!');
        document.getElementById("resim").onload = function() {
            var c = document.getElementById("Canvasdeneme");
            var ctx = c.getContext("2d");
            var img = document.getElementById("resim");
            ctx.drawImage(img, 0, 0);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            //console.log(imgData);
            var newImgData = [];
            //imgData'daki mavi değerini okuyup 150'ye büyük eşitse newImgData array'ine pixelin numarası (sayaç değişkeni) ekleniyor
            for (var sayaç = 0, l = imgData.data.length; sayaç <= l, sayaç += 1;) {
                for (var i = 0, l = imgData.data.length; i <= l, i += 4;) {
                    var kırmızı = imgData.data[i];
                    var yeşil = imgData.data[i+1];
                    var mavi = imgData.data[i+2];
            
                    if ([i+2]>=150) {
                    //  [i+2]=100;
                        newImgData.push(sayaç);
                            
                    }
                }
            }
        }
    }
    
   
};