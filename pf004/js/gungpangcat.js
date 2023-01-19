$(function () {
    // $('.eventSlide').slick({
    //     slidesToShow: 3,
    //     dots: false,
    //     arrows: false,
    //     autoplay: true,
    //     pauseOnHover: false,
    // });

    // $('.sponserSlide').slick({
    //     dots: false,
    //     arrows: false,
    //     autoplay: true,
    //     pauseOnHover: false,
    // });

    $('a').on('click', function (e) {
        e.preventDefault();
        console.log($(this.hash).offset().top);
        var hash = $(this.hash).offset().top;
        $('html,body').animate({ scrollTop: hash },600);
    });
})