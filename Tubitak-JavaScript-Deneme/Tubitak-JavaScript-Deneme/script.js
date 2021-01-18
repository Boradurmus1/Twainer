window.onload=function(){
    document.getElementById("dugme-kirmizi").addEventListener("click", Kirmizi);
    document.getElementById("dugme-yesil").addEventListener("click", Yesil);
    document.getElementById("dugme-mavi").addEventListener("click", Mavi);



    var resim=chrome.storage.local.get;
    
    //Fonksiyonların tanımlanması
    function Kirmizi() {
        console.log('Hello!');
        document.getElementById("resim").onload = function() {
            var c = document.getElementById("Canvasdeneme");
            var ctx = c.getContext("2d");
            var img = document.getElementById("resim");
            ctx.drawImage(img, 0, 0);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            console.log(imgData);
        //imgData'daki kırmızı değerini alıp 150'ye büyük eşitse değeri 100'e çekiyor
            for (var i = 0, l = imgData.data.length; i < l, i += 4;) {
                var kırmızı = imgData.data[i];
                var yeşil = imgData.data[i+1];
                var mavi = imgData.data[i+2];
        
                if ([i]>=150) {
                   // [i]=100;
                }
            }
        }
    }


    //Bütün fonksiyonlar while loopunda olacak boolean tanımlanacak fonksiyonu bitirmek için: if click eşit değildir fonksiyon ismi then break
    function Yesil() {
        console.log('Hello!');
        document.getElementById("resim").onload = function() {
            var c = document.getElementById("Canvasdeneme");
            var ctx = c.getContext("2d");
            var img = document.getElementById("resim");
            ctx.drawImage(img, 0, 0);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            console.log(imgData);
        //imgData'daki yeşil değerini alıp 150'ye büyük eşitse değeri 100'e çekiyor
            for (var i = 0, l = imgData.data.length; i < l, i += 4;) {
                var kırmızı = imgData.data[i];
                var yeşil = imgData.data[i+1];
                var mavi = imgData.data[i+2];
        
                if ([i+1]>=150) {
                   // [i+1]=100;
                }
            }
        }
    }
    function Mavi() {
        console.log('Hello!');
        document.getElementById("resim").onload = function() {
            var c = document.getElementById("Canvasdeneme");
            var ctx = c.getContext("2d");
            var img = document.getElementById("resim");
            ctx.drawImage(img, 0, 0);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            console.log(imgData);
        //imgData'daki mavi değerini alıp 150'ye büyük eşitse değeri 100'e çekiyor
            for (var i = 0, l = imgData.data.length; i < l, i += 4;) {
                var kırmızı = imgData.data[i];
                var yeşil = imgData.data[i+1];
                var mavi = imgData.data[i+2];
        
                if ([i+2]>=150) {
                  //  [i+2]=100;
                        
                }
            }
        }
    }
    
   
};



