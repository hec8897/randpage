<?php
$reqSexflag = $_POST['reqSexflag'];
$adGet = $_POST['adget'];
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
    <title>BM Baby_quiz</title>
</head>
<body>
    <div id='wrap'>
        <div class="inconsult_wrap">
            <h2>
                <div class='h2_icon'></div>
                <p>수고하셨습니다~!</p></h2>
                <p class='tit_coment'>
                    아래의 정보를 입력하시면 </br>당신의 퀴즈점수와 정답을 
                     확인하실 수 있으며 </br><span>무료 비교 견적 서비스</span>가 <span>자동 신청</span>됩니다.                    
                </p>

                <form action="inconsult_pro.php" method='post' id='frm'>
                <ul class="inputs">
                    <li>
                  
                        <div class='label'>이름</div>
                        <input type="text" id='reqName' name='reqName'>
                    </li>
                    
                    <li>
                            <div class='label'>전화번호</div>
                            <input type="number" id='reqPhone' name='reqPhone'>
                    </li>   

                    <li>
                            <div class='label'>거주지역</div>
                            <select name="reqArea" id="reqArea" class="area">
                                <option value="">거주지역을 선택해 주세요</option>
                                <option value="서울">서울특별시</option>
                                <option value="인천">인천광역시</option>
                                <option value="경기">경기도</option>
                                <option value="대전">대전광역시</option>
                                <option value="세종">세종특별자치시</option>
                                <option value="부산">부산광역시</option>
                                <option value="울산">울산광역시</option>
                                <option value="대구">대구광역시</option>
                                <option value="광주">광주광역시</option>
                                <option value="제주">제주특별자치도</option>
                                <option value="강원">강원도</option>
                                <option value="충남">충청남도</option>
                                <option value="충북">충청북도</option>
                                <option value="경북">경상북도</option>
                                <option value="경남">충상남도</option>
                                <option value="전남">전라남도</option>
                                <option value="전북">전라북도</option>
                        </select>
                    </li>
                </ul>
                <p>개인정보 수집동의 <input type="checkbox" id='check'></p>
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
                <input type="hidden" name="adget" value='<?=$adGet?>'>
                <input type="hidden" name="reqSexflag" value='<?=$reqSexflag?>'>
                </form>
        </div>
    </div>    
    <script>
            function StartBtn(){
                var reqName =  document.getElementById('reqName').value;
                var reqPhone =  document.getElementById('reqPhone').value;
                var reqArea =  document.getElementById('reqArea').value;
                var checks =  document.getElementById('check').checked;
                var frm = document.getElementById('frm');
                if(reqName==""){
                    alert("이름을 입력해주세요")
                }
                else if(reqPhone==""){
                    alert("전화번호를 입력해주세요")
                }
                else if (reqArea==""){
                    alert("지역을 선택하세요")
                }
                else if(checks == false){
                    alert("개인정보 수집동의를 체크해주세요")
                }
                else{
                frm.submit();
                }
            }
        </script>
</body>
</html>