<?php
$sexflag = $_POST['reqSexflag'];
$url = $_POST['url'];
$qa1 =$_POST['reqqa1'];
$qa2 =$_POST['reqqa2'];
$qa3 =$_POST['reqqa3'];
$qa4 =$_POST['reqqa4'];
$qa5 =$_POST['reqqa5'];
$qa6 =$_POST['reqqa6'];
$qa7 =$_POST['reqqa7'];
$qa8 =$_POST['reqqa8'];
$qa9 =$_POST['reqqa9'];
$qa10 =$_POST['reqqa10'];



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
    <div id="wrap" class="consult_wrap">
        <form action="qa_pro.php" method="POST" id="frms">
            <input type="hidden" id="reqSexflag" value="<?=$sexflag?>" name="reqSexflag">
            <input type="hidden" id="requrl" value="<?=$url?>" name="url">


            <input type="hidden" id="qa1input" value="<?=$qa1?>" name="reqqa1">
            <input type="hidden" id="qa2input" value="<?=$qa2?>" name="reqqa2">
            <input type="hidden" id="qa3input" value="<?=$qa3?>" name="reqqa3">
            <input type="hidden" id="qa4input" value="<?=$qa4?>" name="reqqa4">
            <input type="hidden" id="qa5input" value="<?=$qa5?>" name="reqqa5">
            <input type="hidden" id="qa6input" value="<?=$qa6?>" name="reqqa6">
            <input type="hidden" id="qa7input" value="<?=$qa7?>" name="reqqa7">
            <input type="hidden" id="qa8input" value="<?=$qa8?>" name="reqqa8">
            <input type="hidden" id="qa9input" value="<?=$qa9?>" name="reqqa9">
            <input type="hidden" id="qa10input" value="<?=$qa10?>" name="reqqa10">
        <div class="main_wrap">

            <h2>축하합니다!</h2>
            <h1><span>부자심리테스트가 </span>완료되었습니다.</h1>
            <p>아래의 정보를 입력하시면 <span>당신의 부자 심리테스트 결과</span>를 확인할 수 있습니다.</p>
            <p>테스트를 모두 완료하신 분들께는 <span>빽다방 커피 쿠폰</span>과 20만원 상당의</p>
            <p><span>재무심리 분석자료</span>를 보내 드립니다.</p>

            <div class="icons">
                <div class="icon icon_left"></div>
                <div class="icon icon_plus"></div>
                <div class="icon icon_right"></div>
            </div>
        </div>

        <div class="consult_inputs">
                <ul>
                    <li>
                        <div class="label">이 름</div><input type="text" name="reqname" id="name" class="name">
                    </li>
                    <li>
                        <div class="label">전화번호</div><input type="text" name="reqphone" id="phone" class="phone">
                    </li>
                </ul>
                <p>개인정보 수집동의 <input type="checkbox" id="check"></p>
                <div class="sub_btn" id="sub" onclick="frm()">테스트 결과 확인하기</div>


            </form>
        </div>
        <script>
            var sub = document.getElementById("frms");
         

            function frm(){
                var names = document.getElementById("name").value;
            var phones = document.getElementById("phone").value;
            var checks = document.getElementById("check").checked;

                if(names == ""){
                    alert("이름을 입력해주세요")
                }
                else if(phones ==""){
                    alert("전화번호를 입력해주세요")
                }
                else if(checks == false){
                    alert("개인정보 수집동의를 체크해주세요")
                }
                else{
                sub.submit();

                }
            }
            
        </script>



    </div>
</body>

</html>