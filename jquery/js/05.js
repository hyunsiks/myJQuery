
//아이디 검사식
let re_id = /^[a-zA-Z0-9_-]{3,16}$/;
let re_id2 = /^[a-zA-Z0-9_-]/;
//비밀번호 검사식
let re_pw = /^[a-z0-9_-]{6,18}$/;
//이메일 검사식
let re_mail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
//url 검사식
let re_url = /(http|https|):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
//핸드폰 검사식
let re_tel = /^[0-9]{8,11}$/;


$('.form').submit(function(e){

    if(re_id.test($('#uid').val()) != true){
        alert('[ID입력오류] 유효한 ID를 입력해 주세요');
        $('#uid').focus();
        return false;
    }else if(re_pw.test($('#upw').val()) != true){
        alert('[PW입력오류] 유효한 PW를 입력해 주세요');
        $('#upw').focus();
        return false;
    }else if(re_mail.test($('#mail').val()) != true){
        alert('[Email입력오류] 유효한 Email을 입력해 주세요');
        $('#mail').focus();
        return false;
    }else if(re_url.test($('#url').val()) != true){
        alert('[URL입력오류] 유효한 URL을 입력해 주세요');
        $('#url').focus();
        return false;
    }else if(re_tel.test($('#tel').val()) != true){
        alert('[전화번호 입력오류] 유효한 전화번호를 입력해 주세요');
        $('#tel').focus();
        return false;
    }
});

$('#uid, #upw').after('<strong></strong>');

$('#uid').keyup(function(e) {
    var s = $(this).next('strong');

    //id 길이에 대한 검사
    if($('#uid').val().length == 0){
        s.text('');
    }else if($('#uid').val().length < 3){
        s.text('너무짧아요');
    }else if($('#uid').val().length > 16){
        s.text('너무길어요');
    }else{
        s.text('확인');
    }

    //id 입력문자에 대한 검사
    for(let i=0; i < $('#uid').val().length; i++){
        if(re_id2.test($('#uid').val().charAt(i)) != true){
            s.text('id형식에 맞는 문자를 사용하세요.');
        }
    }
})