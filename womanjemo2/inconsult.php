<?php
$an1 = $_POST['an1'];
$an2 = $_POST['an2'];
$an3 = $_POST['an3'];
$an4 = $_POST['an4'];
$an5 = $_POST['an5'];
$an6 = $_POST['an6'];
$an7 = $_POST['an7'];
$an8 = $_POST['an8'];
$an9 = $_POST['an9'];
$an10 = $_POST['an10'];
$url = $_POST['url'];
$adGet = $_POST['ad_get'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>richTest BM</title>
</head>

<body>
    <div id='wrap'>
        <main class="inconsult_main">
            <div class="main_wrap">
                <div class="logo_area">
                    <h1 class="inconsult_h1"><span>재</span>테<span>크</span>성향 </br><span>테</span>스트</h1>
                </div>

                <div class="inconsult_box">
                    <h2>축하합니다!</h2>
                    <h3><span>재테크</span> 성향 테스트가 완료 되었습니다.</h3>
                    <div class="mention_area">
                        아래의 정보를 입력하시면 당신의 <span>재테크 성향</span>과</br> 그에 따른 <span>맞춤 솔루션</span>을 확인하실 수 있습니다.</br> 테스트를 모두
                        완료하신 분들께는 20만원 상당의</br> <img src="img/star.png" alt=""><span>재무심리 분석자료(무료)</span>를 보내 드립니다.
                    </div>
                    <div class="input_area">
                        <form action="result_pro.php" id='frm' method="POST">
                            <ul class="inputs">
                                <li>
                                    <div class="label">
                                        이 름
                                    </div>
                                    <div class="input">
                                        <input type="text" id='req_name' name='reqName'>
                                    </div>
                                </li>
                                <li>
                                    <div class="label">
                                        전화번호
                                    </div>
                                    <div class="input">
                                        <input type="number" id='req_phone' name='reqPhone'>
                                    </div>
                                </li>
                                <li>
                                    <div class="label">
                                        지역
                                    </div>
                                    <div class="input">
                                        <select name="reqArea" id="req_area">
                                            <option value="">지역을 선택해 주세요</option>

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
                                    </div>

                                </li>
                            </ul>
                            <input type="hidden" id='input1' name='an1' value='<?=$an1?>'>
                            <input type="hidden" id='input2' name='an2' value='<?=$an2?>'>
                            <input type="hidden" id='input3' name='an3' value='<?=$an3?>'>
                            <input type="hidden" id='input4' name='an4' value='<?=$an4?>'>
                            <input type="hidden" id='input5' name='an5' value='<?=$an5?>'>
                            <input type="hidden" id='input6' name='an6' value='<?=$an6?>'>
                            <input type="hidden" id='input7' name='an7' value='<?=$an7?>'>
                            <input type="hidden" id='input8' name='an8' value='<?=$an8?>'>
                            <input type="hidden" id='input9' name='an9' value='<?=$an9?>'>
                            <input type="hidden" id='input10' name='an10' value='<?=$an10?>'>
                            <input type="hidden" name='url' value='<?=$url?>'>
                            <input type="hidden" name='ad_get' value='<?=$adGet?>'>

                            <p><input type="checkbox" id="check_box">개인정보 수집 및 이용 동의 <a href=''>보기</a></p>

                            <div class="sub_btn" id="sub_btns" onclick='subResult()'>테스트 결과 확인하기</div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <div class='foot'>
            <div class="inconsult_foot">
                <h3><img src="img/star.png" alt=""> 재무심리 분석자료란?</h3>
                <p>우리에게 잠재되어 있는 재무심리를 알려주는 분석자료로써</br>
                    재테크 방향을 설정하기 위한 기초자료가 됩니다.</br>
                </p>
            </div>
        </div>

        <script>
               function subResult(){                

                    var frm = document.getElementById('frm');
                    var reqName = document.getElementById('req_name').value;
                    var reqPhone = document.getElementById('req_phone').value;
                    var reqArea = document.getElementById('req_area').value;
                    var check = document.getElementById('check_box').checked;


                    if(reqName == ""){
                        alert('이름을 입력해주세요')
                    }
                    else if(reqPhone == ""){
                        alert('전화번호를 입력해주세요')
                    }
                    else if(reqArea == ""){
                        alert('상담 지역을 선택해주세요')
                    }
                    else if(check == false){
                        alert('개인정보 수집동의를 체크해주세요')
                    }
                    else{
                    frm.submit();

                    }
                    

                    
                }
        
        </script>
    </div>
</body>

</html>