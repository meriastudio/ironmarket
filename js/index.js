$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".image_two").addClass("result_hover");
        $(".image_one").addClass("result_hover1");
        $(".banner_content").addClass("banner_content_hover");
        $(".image_sand").addClass("opacity_none");
        $(".image_sand2").addClass("opacity_one");
    }
});