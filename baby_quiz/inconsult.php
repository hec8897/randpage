<?php
$reqSexflag = $_POST['reqSexflag'];
$score = $_GET['s'];
$qa1 = $_POST['qa1'];
$qa2 = $_POST['qa2'];
$qa3 = $_POST['qa3'];
$qa4 = $_POST['qa4'];
$qa5 = $_POST['qa5'];
$qa6 = $_POST['qa6'];
$qa7 = $_POST['qa7'];
$qa8 = $_POST['qa8'];

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
        <div class="inconsult_wrap">
            <h2>
                <div class='h2_icon'></div>
                <p>수고하셨습니다~!</p></h2>
                <p class='tit_coment'>
                    아래의 정보를 입력하시면 당신의 태아보험/어린이보험</br>
                    퀴즈 점수와 정답을 확인하실 수 있습니다.
                </p>

                <form action="inconsult_pro.php" method='post' id='frm'>
                <ul class="inputs">
                    <li>
                  
                        <div class='label'>이름</div>
                        <input type="text" name='reqName'>
                    </li>
                    <li>
                            <div class='label'>전화번호</div>
                            <input type="text" name='reqPhone'>
                    </li>   
                    <li>
                            <div class='label'>거주지역</div>
                            <select name="reqArea" id="">
                                <option value="서울">서울특별시</option>
                            </select>
                    </li>
                </ul>
                <p>개인정보 수집동의 <input type="checkbox"></p>

                <div class='btns' onclick="StartBtn()"></div>

                <input type="hidden" name="qa1" value='<?=$qa1?>'>
                <input type="hidden" name="qa2" value='<?=$qa2?>'>
                <input type="hidden" name="qa3" value='<?=$qa3?>'>
                <input type="hidden" name="qa4" value='<?=$qa4?>'>
                <input type="hidden" name="qa5" value='<?=$qa5?>'>
                <input type="hidden" name="qa6" value='<?=$qa6?>'>
                <input type="hidden" name="qa7" value='<?=$qa7?>'>
                <input type="hidden" name="qa8" value='<?=$qa8?>'>
                <input type="hidden" name="score" value='<?=$score?>'>
                <input type="hidden" name="reqSexflag" value='<?=$reqSexflag?>'>


                </form>

        </div>
    </div>    

    <script>
            function StartBtn(){
            var frm = document.getElementById('frm');

                frm.submit();
            }
        
        </script>
</body>
</html>