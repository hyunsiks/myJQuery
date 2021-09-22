$(function () {
    $('#nav-products .dropdown ul').width(0);
    
    $('#nav-products .dropdown').hover(function () {
        $(this).find('ul').show().animate({
            'width': '180px'
        },175);
    }, function () {
        $(this).find('ul').animate({
            'width': '0'
        },175, function(){
            $(this).hide();
        });
    });
});

//처음 메서드에 .hide()를 사용하면 먼저 사라져버리기 때문에 사라질 때는 접히지가 않기 때문에
//나중에 따로 hide()를 사용하여 처리함