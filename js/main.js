$(document).ready(function () {
    jQuery('.gallery').initGallery({

        // navigation arrows
        nav: ["<span> < </span>", "<span> > </span>"],

        // close button
        close: "<span>X</span>",

        // shows navigation
        showNav: false,
        showNavIfOneItem: false,

        // custom aspect ratio
        aspectRatio: "auto",

        // shows pagination bullets
        showDots: true,
        showDotsIfOneItem: false,

        // shows navigation arrows
        arrows: true,

        // is fullscreen?
        fullScreen: true,

        // is infinite loop?
        loop: true,

        // autoplay options
        autoplay: true,
        autoplayDelay: 2000,

        // animation options
        // 'fade' or 'slide'
        transition: "fade",
        transitionTime: 500,

    });

    var timer = document.getElementById("time");
    timer.addEventListener("mouseover", function () {
        timer.style.color = "#18BC9C";
        timer.style.fontSize = "2em";
    });
    timer.addEventListener("mouseout", function () {
        timer.style.color = "#fff";
        timer.style.fontSize = "inherit";
    });

});



function timer() {
    var danas = new Date();
    var h = danas.getHours();
    var m = danas.getMinutes();
    var s = danas.getSeconds();
    //dodaje nulu ispred brojeva ako su manji od 10
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('timer()', 500);
}