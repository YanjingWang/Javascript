var imgCount = 2;
    var dir = 'images/photos/pandemic_series/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "p_st_pauls.png",
            images[2] = "p_tower_bridge.png",
    document.getElementById("portraitID").style.backgroundImage = "url(" + dir + images[randomCount] + ")";
