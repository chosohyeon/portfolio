$(function () {
    // mainVisual 슬라이드
    $('.mainSlider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    // collab 탭메뉴
    $('.tabContent>div').hide();
    $('.tabNav a').click(function () {
        $('.tabContent>div').hide().filter(this.hash).fadeIn();
        $('.tabNav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();

    // 클릭 시 색상 변경
    $('.tabNav li>a').click(function () {
        $(".on").attr('class', 'off');
        $(this).attr('class', 'on');
    });

    // SNS 슬라이드
    $('.snsSlider').slick({
        slidesToShow: 4,
        dots: false,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

})