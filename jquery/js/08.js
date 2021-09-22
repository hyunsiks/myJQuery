/*
.slideDown( [duration ] [, easing ] [, complete ] )

duration
    요소가 나타날 때까지 걸리는 시간입니다. 단위는 1/1000초, 기본값은 400입니다.
    fast나 slow로 정할 수 있습니다. fast는 200, slow는 600에 해당합니다.

easing
    요소가 나타나는 방식을 정합니다.
    swing과 linear가 가능하며, 기본값은 swing입니다.

complete
    요소가 나타난 후 수행할 작업을 정합니다.
*/

$('#btn1').click(function(e) {
    $("img").slideUp(2000, "swing");
    $(".divBox").slideUp(2000,"swing");
});

$('#btn2').click(function(e) {
    $("img").slideDown();
    $(".divBox").slideDown();
});

$('#btn3').click(function(e) {
    //stop() 메서드는 이전에 하던일을 멈추기 위함이다 중복방지
    $("img").stop(true).fadeOut(1000);
});

$('#btn4').click(function(e) {
    $("img").stop(true).fadeIn(5000);
});