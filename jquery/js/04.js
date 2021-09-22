

//클래스가 잘들어가기 위해 클래스를 확인하는 메소드
$('#box1').click(function(e){
    $('#box1, #box2').addClass('blue');
    console.log($('#box1, #box2').attr("class"));
});
$('#box2').click(function(e){
    console.log("무야호");
    $('#box1, #box2').removeClass('blue');
    console.log($('#box1, #box2').attr("class"));
});
$('#box3').click(function(e){
    $('#box3').toggleClass('blue');
    console.log($('#box3').attr("class"));
});