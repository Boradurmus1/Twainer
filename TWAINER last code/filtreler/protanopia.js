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
filtreID = document.createElement('div');
filtreID.id = "filtre_kimligi";
filtreID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filtreID);
stilID = document.createElement('style');
stilID.id = "stil_kimligi";
document.body.appendChild(stilID);

//Sekmeye uygulanacak filtrenin CSS kodu
filtreID.innerHTML = '<svg id="renkkorlugu-filtre" style="display: none">' +
                     '<defs>' +
                     '<filter id="Protanopia">' + 
                     '<feColorMatrix type="matrix" values="1 0 0 0 0 ' +
                                                           '0.8 -0.2 0 0 0 ' +
                                                           '0 -0.2 1.3 0 0 ' +
                                                           '0 0 0 1 0 " in="SourceGraphic"/>' +
                     '</filter>' + 
                     '</defs>' +
                     '</svg>';
stilID.innerHTML = 'html{-webkit-filter:url(#Protanopia);-moz-filter:(#Protanopia);-ms-filter:(#Protanopia);-o-filter:(#Protanopia);filter:(#Protanopia);}'