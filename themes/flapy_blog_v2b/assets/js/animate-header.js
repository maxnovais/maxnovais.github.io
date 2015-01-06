$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar-brand").addClass("navbar-brand-visible")
        $(".navbar-default").addClass("navbar-shrink");
    } else {
        $(".navbar-brand").removeClass("navbar-brand-visible")
        $(".navbar-default").removeClass("navbar-shrink");
    }
});