
$('.btn').click(function (e) {
    for(let i=0; i <= $('.imgdiv').length; i++){
        $(`.imgdiv:nth-child(${i})`).css("background", "url(./img/main.JPG)").css("background-size","cover");
        if(i == $('.imgdiv').length){
            $(`.imgdiv:nth-child(${i})`).css("background-color", "rgba(196,196,196,0.5)");
            $(`.imgdiv:nth-child(${i})`).text($('.imgdiv').length);

        }
    }
})
$('.hrefbtn').click(function (e) {
    location.href = '#';
})