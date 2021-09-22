$("input[name='telecom'][value='lgt']").prop("checked",true);

$('.buttons').click(function(e){

    console.log($('.inputBox').val());
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