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
    <title>BM Company</title>
</head>

<body>
    <div id="index_wrap">
       

        <header>
            <h1><span>태아보험 비교전문</span></br>보험친구들</h1>
        </header>

        <section class="main_banner">
            <div class="banner">
                <div class="text_box">
                    <h2>쉽고 빠른 보험</h2>
                    <h2><span>비교분석</span> 서비스</h2>
                    <p>같은 특약 + 더 저렴한 보험을 찾아 드립니다</p>
                </div>
            </div>
            <div class="figure_area">
                <figure>
                    <h3>우리 아이 학자금 보험,</br>미리 준비하세요.</h3>
                    <div class="figure_bottom">
                        <p>자녀의 나이에 맞춰</br>필요한 <span>학자금</span></br><span>매년 지급</span>하는</br>보험까지!</p>
                        <div class="img_area img1"></div>
                    </div>
                </figure>
                <figure>
                    <h3>우리 아이 미래를</br>든든하게 지켜줄</h3>
                    <div class="figure_bottom">
                        <p><span>태아보험</span>과</br><span>어린이보험</span></br>보장 분석을</br>한번에!</p>
                        <div class="img_area img2"></div>
                    </div>
                </figure>
            </div>

        </section>

        <section class="section1">
            <h3 class="section_tit"></h3>

            <h4>한 번 가입하면</h4>
            <h4>수십 년 동안 내야 하는 보험,</h4>
            <h4 class="last_h4">내 아이 지키는 보험비교는 필수!</h4>

            <h5>출생 시 발생할 수 있는 위험과 선천성 질환을</h5>
            <h5>대비하기 위한 보장내역을 확인합니다.</h5>

            <div class="icons_box">
                <ul>
                    <li>
                        <h5>다양한 선천기형,</br>변형 및 염색체 이상 보장</h5>
                        <div class="icon_box icon1">
                        </div>
                    </li>
                    <li>
                        <h5></br>희귀난치성 질환 보장</h5>
                        <div class="icon_box icon2">
                        </div>
                    </li>
                    <li>
                        <h5>인큐베이터 사용비용 및</br>입원비 보장내역 확인!</h5>
                        <div class="icon_box icon3">
                        </div>
                    </li>
                    <li>
                        <h5>커서 겪을 수 있는 아토피, 성조숙증,</br>ADHD 특약도 꼼꼼하게 확인</h5>
                        <div class="icon_box icon4">
                        </div>
                    </li>
                </ul>

            </div>

        </section>

        <section class="section2">
            <div class='section2_banner'>
                <h4><span class="span1">우리 아이의</span> <span class="span2">미래</span>를 위한건데 </br>아무거나 가입할 수 없잖아요!</h4>
                <div class="consult_btn" id="consult_btn">빠른상담신청</div>
            </div>

            <div class="section2_main">
                <h3 class="section_tit"></h3>
                <h4>태아보험 가입시</h4>
                <h4 class="last_h4">이것만 기억하세요.</h4>
                <p>어릴때 가입할 수록 도움되는</p>
                <p>태아보험/어린이보험</p>

                <div class="figure_area">

                        <figure>
                            <div class="img_area area1"></div>
                            <div class="text_area">
                                <h3 class="no1">1</h3>
                                <h4>보험료가 높다고 해서</h4>
                                <h4 class='last_h4'>보장내역도 탄탄할까요?</h4>

                                <p>아이가 성장하면서</p>
                                <p>꼭 필요한 특약을 넣었는지</p>
                                <p>보장내역 먼저 확인하세요!</p>
                            </div>

                        </figure>
                        <figure class="sec_figure">
                                <div class="text_area">
                                    <h3 class='no2'>2</h3>
                                    <h4>큰병이 아니라도 입원할</h4>
                                    <h4 class='last_h4'>일이 많은 영유아기</h4>
    
                                    <p>입원일당 특약은 최대로,</p>
                                    <p>깁스 치료비등 상해 관련</p>
                                    <p>보장도 꼼꼼하게 확인하세요!</p>
                                </div>
                                <div class="img_area area2"></div>

    
                        </figure>
                        <figure>
                                <div class="img_area area3"></div>
                                <div class="text_area">
                                    <h3 class='no3'>3</h3>
                                    <h4>어른이 되면 불필요한</h4>
                                    <h4 class='last_h4'>보장내역은 30세 만기로!</h4>
    
                                    <p>보장기간도 보장내역에</p>
                                    <p>따라 다르게 설정하세요!</p>
                                </div>
    
                        </figure>
        
                    </div>
            </div>

 
        </section>
        <section class="input_area">

            <h2>상담신청</h2>
            <form action="result_pro.php"  method="POST" id="frm">
                <ul>
                    <li>이름</li>
                    <li><input type="text" id="in_name" placeholder="성함을 작성해주세요" name="reqName" required autocomplete="off"></li>
                    <li>연락처</li>
                    <li><input type="number"id="in_phone" placeholder="ex) 01012341234" name="reqPhone" required autocomplete="off"></li>
                    <li>생년월일</li>
                    <li><input type="number"id="in_birth" placeholder="ex) 000000" name="reqBirth" required autocomplete="off"></li>
                    <li>신청자</li>
                    <li><input type="button" class="btns btn_man" value="아빠" onclick="reqGender('남성')"><input type="button" class="btns btn_woman" value="엄마" onclick="reqGender('여성')"></li>

                </ul>

                <h4>상담 내용</h4>
                <ul class="consult_btn">
                    <li class="consult_btns btns1">태아보험 가입</li>
                    <li class="consult_btns btns2">가입된 보험 보장분석</li>
                    <li class="consult_btns btns3">태아/어린이 보험 설계</li>
                    <li class="consult_btns btns4">우리가족 보험 리모델링</li>
                </ul>

                <p><input type="checkbox" id="check"> 개인정보 수집 및 이용동의 <a href="agree.html">보기</a></p>

                <div class="submit_btn" onclick="submitFn()">
                    보험상담 신청하기
                </div>

                <input type="hidden" id="consult1" name="reqMemo1">
                <input type="hidden" id="consult2" name="reqMemo2">
                <input type="hidden" id="consult3" name="reqMemo3">
                <input type="hidden" id="consult4" name="reqMemo4">
                <input type="hidden" name='adget' value='<?=$AdGet?>'>
                <input type="hidden" id='reqsexflag' name='reqgender'>

            </form>


        </section>




    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="js/event.js"></script>
</body>

</html>