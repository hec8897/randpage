
    // var btn = document.getElementById("close_btn");
    // var banner = document.getElementById("top_banner")

    // btn.addEventListener("click",function(){
    //     banner.style.display = "none";

    // })

    $("#consult_btn").click(function(){
        var offset = $(".input_area").offset();
        $("html,body").animate({
            scrollTop:offset.top
        },200)
    })

    $(".consult_btns").click(function(){
        $(this).css({
            "background":"#3399CC",
            "color":"white"
        });
        // $(".consult_btns").not($(this)).css({
        //     "background":"white",
        //     "color":"black"
        // })
    })


    $(".btns1").click(function(){
        $("#consult1").val("태아보험 가입")
    })
    $(".btns2").click(function(){
        $("#consult2").val("가입된 보험 보장분석")
    })
    $(".btns3").click(function(){
        $("#consult3").val("태아,어린이 보험설계")
    })
    $(".btns4").click(function(){
        $("#consult4").val("우리가족 보험 리모델링")
    })



    function submitFn(){
        var check = document.getElementById("check").checked;
        var name = document.getElementById("in_name").value;
        var phone = document.getElementById("in_phone").value;
        var birth = document.getElementById("in_birth").value;
        // var checkBox = document.getElementById("consult_name").value;



        if(name == ""){
            alert("이름을 입력해주세요")
        }
        else if(phone == ""){
            alert("전화번호를 입력해주세요")
        }
        else if(birth == ""){
            alert("생년월일을 입력해주세요")
        }
        // else if(checkBox ==""){
        //     alert("원하시는 상담내용을 선택해주세요")
        // }

        else if(check == false){
            alert("개인정보 수집 및 이용 동의를 체크해주세요")
        }
    
        else{
            frm.submit();
        }

    }

    function reqGender(a){

        $(".btns").click(function(){
            $(this).css({
                "background":"#3399CC",
                "color":"white"
            });
            $(".btns").not($(this)).css({
                "background":"white",
                "color":"black"
            })
        })
        
        $("#reqsexflag").val(a)


    }