$("input[name='telecom'][value='lgt']").prop("checked",true); //telecom 의 초기값 설정

$("input[name='brand'][value='burbbery']").prop("checked",true);

$('.com').change(function (e) {
    console.log($(this).val());
})

$('.buttons').click(function(e){

    console.log($('.inputBox').val());
    console.log($("input[name='telecom']:checked").length);
    console.log($("input[name='telecom']:checked").val());
})

$('.checkBoxButton').click(function(e){

    let length = $("input[name='brand']:checked").length;

    console.log(length);
    

    if(length > 1){
        $("input[name='brand']:checked").each(function(e){
            console.log($(this).val());
        })
    }
})