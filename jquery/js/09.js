/*
$(선택자).animate(스타일 [,지속시간] [,시간당속도함수] [,콜백 함수]);

    스타일 : 필수이며, 이펙트 효과를 구성할 CSS 스타일 속성을 정의한다. 
    지속 시간 : 이펙트 효과가 지속될 시간을 전달한다.
    시간당 속도 함수(easing function): 이펙트 효과의 시간당 속도를 전달한다.
    콜백 함수: 이펙트 효과의 동작이 완료된 후에 실행할 함수를 정의한다.
*/
$("button").click(function(e){

    $("div").animate({
        width: "300px",
        height: "300px",
        opacity: 0.5,
        //color가 변하는것은 기본 jquery로는 못하고 특수 jquery를 import해야함 "<script src="jquery-ui.js"></script>"
        backgroundColor: "blue"
      },
      1000,
      function() {
          $("#text").text("애니메이션 효과 실행이 완료되었습니다.");
      }
    );
});