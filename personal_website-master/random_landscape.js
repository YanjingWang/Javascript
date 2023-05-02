var imgCount = 2;
    var dir = 'images/photos/2021_pics1/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "homepage_l.png",
            images[2] = "stormybridge_l.png",
    document.getElementById("landscapeID").style.backgroundImage = "url(" + dir + images[randomCount] + ")";
