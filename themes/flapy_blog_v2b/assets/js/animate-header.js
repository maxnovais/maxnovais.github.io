$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 220) {
        $(".avatar").addClass("avatar-shrink")
        $(".header").addClass("header-shrink")
        $(".site-title").addClass("site-title-shrink")
        $(".fix-bar").addClass("fix-bar-shrink")
        $(".navbar-default").addClass("navbar-shrink");
    } else {
        $(".avatar").removeClass("avatar-shrink")
        $(".header").removeClass("header-shrink")
        $(".site-title").removeClass("site-title-shrink")
        $(".fix-bar").removeClass("fix-bar-shrink")
        $(".navbar-default").removeClass("navbar-shrink");
    }
});