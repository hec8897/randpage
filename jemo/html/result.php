<?php

$id = $_GET['id'];


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>
    <script>
        $(document).ready(function(){
            var get = $("#ids").val();
            if(get == "현실"){
                console.log("유아형");
                $(".wrap").load("result/result1.html");

            }
            else if(get =="돈"){
                console.log("사냥꾼");
                $(".wrap").load("result/result2.html");

            }
            else if(get == "편의"){
                console.log("베짱이");
                $(".wrap").load("result/result3.html");

            }
            else if(get == "성공"){
                console.log("모험가");
                $(".wrap").load("result/result4.html");
            }
        })

    </script>
    <div id="wrap" class="result_wrap">
        <input type="hidden" id="ids" value="<?=$id?>"/>

        <div class="wrap">
            <header>
            <h1></h1>
            <p><i>당신이 아직 큰 돈을 모으지 못한 이유는</i></p>
            <p><i><span>열정은 가득하지만</span></i></p>
            <p><i>구체적인 계획 수립과 실현 능력이 없기 때문입니다</i></p>
            </header>
            <main>
                <p>당신은 항상 새로운 생각하는 것을 좋아하며
                남에게 지는 것을 극히 싫어 합니다.
                주위 사람들에게 아이디어가 뛰어나고 참신하다는 소리를 
                자주 듣는 편입니다.</p>

                <p>실패를 두려워하지 않으며 사업을 하다가 가능성이 보이면
                    투자를 하여 사업을 크게 확대할 것입니다.
                    직접행동하기보다는 남에게 시키거나 말로 하는 편을 즐겨하며
                    어느 조직이나 모임에서도 리더가 되길 원하죠
                </p>

                <p>열정이 늘 가득하고 에너지가 넘치지만 구체적인 재무 목표를 
                    수립하고 실천하려는 노력이 부족합니다.
                    단계별 구체적인 재무목표를 제시해 줄 재무전문가의 도움을 받는다면 
                    훨씬 빠르게 돈을 모을 수 있을 겁니다.

                </p>
            </main>

            <div class="label">빠른 시간안에 재무분석 자료를 전달드리겠습니다.</div>


        </div>
    </div>    
</body>
</html>