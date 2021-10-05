$('.inputButton').click(function(e){
    // $('.textInput').html("동작되는가?");
    // $('.textInput').val("동작되는가?");
    $('.textInput').text("동작되는가?");
})
$('.getButton').click(function(e){
    
    console.log($('.textInput').text());
    // $('.textInput').text('');
}) 
$('.addButton').click(function(e){
    //뒤에 추가
    $('.textInput').append('★');
    //앞에 추가
    $('.textInput').prepend('★');
}) 
