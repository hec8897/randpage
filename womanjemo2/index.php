<?php
$AdGet = $_GET['id'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>richTest BM</title>
</head>
<body>
    <div id='wrap'>
        <main class="index_main">
            <input type="hidden" id='ad_get' value='<?=$AdGet?>'>
            <div class="logo_area">
            <p class="mention">나같은 타입은 돈을 어떻게 모아야 할까?</p>
            <h1><span>재</span>테<span>크</span>성향 </br><span>테</span>스트</h1>
            <p class="coment">당신의 재테크 성향에 따른</br> 맞춤 솔루션을 알려드립니다!</p>
            </div>
            <div class="memo_img"></div>

            <div class="start_btn">
                TEST 시작하기
            </div>
            
        </main>
        <div class="foot">
            <div class="foot_wrap">
                <p class="foot_text">
                재테크 성향 테스트를 완료하신 분께는</br>
                20만원 상당의 재무심리 분석자료를 무료로 보내드립니다.</br>
                (100명 한정)
                </p>
                <div class="foot_img"></div>


            </div>
            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script>

            var refer = document.referrer;
            var adGet = $("#ad_get").val();

            $(".start_btn").click(function(){
            location.href= "qa.php?url="+refer+"&id="+adGet;
            })
      
            
            </script>

    </div>    

</body>
</html>