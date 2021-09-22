
$('#replaceAll').click(function(e){
    $("<p><b>replaceAll</b></p>").replaceAll("p, h2");
});

$('#replaceWith').click(function(e){
    console.log('들어옴');
    $("p:first").replaceWith("<h2>replaceWith</h2>");
});