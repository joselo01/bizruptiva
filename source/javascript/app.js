$(document).ready(function () {
    $("#menu_on").click(function () {
        $(".menu").fadeIn("fast");
    });

    $(".close").click(function () {
        $(".menu").fadeOut("fast");
    });

    $(".open-close").click(function () {
        $(this).toggleClass('close-open');
        $(".sub-menu").slideToggle("slow");
    });

    $(".btn-header").click(function () {
        $('html, body').animate({
            scrollTop: $("#discover").offset().top
        }, 1000);
    });

    $(".btn-discover").click(function () {
        $('html, body').animate({
            scrollTop: $("#proyectos").offset().top
        }, 1000);
    });

    $(".btn-proyectos").click(function () {
        $('html, body').animate({
            scrollTop: $("#bizruptores").offset().top
        }, 1000);
    });
    $(".btn-footer").click(function () {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 1000);
    });
});