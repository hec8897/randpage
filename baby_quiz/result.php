<?php
$score = $_GET['s'];


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
    <div id='wrap'>
        <div class="result_wrap">
            <h2></h2>
            <div class='score_board'>
                <?=$score?>점
            </div>
            <p class="mention1">
                <span>&#60;보험 가입하기 전 꼭 알아두어야 할 사항&#62;</span> 을</br>
                잘 알아 두셨나요?</br>
                한 번 가입하면 수 십년동안 내야 하는 보험료~</br>
                현명하게 선택하세요
            </p>
            <p><a href='commen.html'>해설 보러가기</a></p>
            <footer>
                스타벅스 쿠폰과 무료 비교견적 서비스(태아보험/어린이보험)를 제공하기 위해
                상담사가 빠른 시일 내에 연락드리도록 하겠습니다
              
            </footer>
        </div>
    </div>    
</body>
</html>