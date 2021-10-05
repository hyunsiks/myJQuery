var number = 5;
var arr = [
    {id: 100, name: '현식', salary: 20000},
    {id: 200, name: '유진', salary: 15000},
    {id: 300, name: '길동', salary: 10000}
]
$('.menu').click(function(e){
    $('.menu').css("background", "white");
    $(this).css("background", "gray");
    console.log($(this).index());
    $('.menu').eq(2).css("background", "red")

    number--;
    console.log(number);
    $('.menu').text(number);
})

$('.images').click(function(e){
    $('.menu').css("background","url(./img/main.JPG)").css("background-size","cover");
})

$('.textkey').keyup(function(e){
    number++;
    console.log(number);
    console.log($(this).val());
})

$('.makediv').click(function(e){
    for(var i=0; i < arr.length; i++){
        $(this).append('<div>' +arr[i].name+ '</div>');
    }
})