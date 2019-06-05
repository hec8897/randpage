<?php

$adGet = $_GET['id'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>BM Baby_quiz</title>

</head>
<body>
    <div class='main_index' id='wrap'>
        <h1></h1>
        <div class='main_img'>
        </div>
        <ul class="start_btn">
            <li id='start_m' onclick="StartBtn('m')"></li>
            <li id='start_w' onclick="StartBtn('w')"></li>
            <input type="hidden" id='ad_get' value='<?=$adGet?>'>
        </ul>
        <footer>
            <div class="footer_icon"></div>
            <p>태아보험 상식 퀴즈대회에 참여하는 분에게는 <span>태아보험 무료 비교견적 서비스</span>를 제공해 드립니다.</p>
        </footer>
    </div>

    <script>
        function StartBtn(a){

            var adGet = document.getElementById('ad_get').value;


            location.href="qa.php?gen="+a+"&id="+adGet
        }
    
    </script>
</body>
</html>