if (document.getElementById("stil_kimligi")) {
    stilID = document.getElementById("stil_kimligi").remove();
    filtreID = document.getElementById("filtre_kimligi").remove();
}


filtreID = document.createElement('div');
filtreID.id = "filtre_kimligi";
filtreID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filtreID);

stilID = document.createElement('style');
stilID.id = "stil_kimligi";
document.body.appendChild(stilID);

filtreID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="Deuteranopia"> <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
stilID.innerHTML = 'html{-webkit-filter:url(#Deuteranopia);-moz-filter:(#Deuteranopia);-ms-filter:(#Deuteranopia);-o-filter:(#Deuteranopia);filter:(#Deuteranopia);}'