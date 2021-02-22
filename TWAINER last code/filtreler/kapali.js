//Filtrelerin üst üste binmesini önlemek için eğer varsa daha önceden seçili olan filtrenin kaldırılması sağlanmıştır
try {
    if (document.getElementById("stil_kimligi")) {
        stilID = document.getElementById("stil_kimligi").remove();
        filtreID = document.getElementById("filtre_kimligi").remove();
    }
} catch(e) {
    console.log(e);
}
//Sekmeye uygulanacak filtrenin CSS kodu için gerekli tanımlamalar HTML etiketleriyle yapılmıştır
stilID = document.createElement('style');
stilID.id = "stil_kimligi";
document.body.appendChild(stilID);
filtreID = document.createElement('div');
filtreID.id = "filtre_kimligi";
filtreID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filtreID);

//Sekmeye uygulanacak filtrenin CSS kodu
stilID.innerHTML = 'html{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';