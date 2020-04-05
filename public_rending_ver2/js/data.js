String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}

var dataRender = {
    params: '', getQueryString: function () {
        params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
            params[key] = value;
        });
        return params;
    }(
   ),
    DataRendFn: function () {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var key = params.key
                var returnJson = JSON.parse(this.responseText).result
           
                    result = returnJson.filter((x) => {
                        return x.idx == key;
                    })
                   Activation = result[0].Activation
                    if(Activation == 0){
                        alert('승인 대기중 입니다 영업일기준으로 2~3일 걸립니다')
                    }
                    else{
                        setTimeout(() => {
                            dataRender.DataHtmlRender()
                        }, 200);
                        setTimeout(function(){
                            dataRender.useTabKey()
                        },300)
                    }



                
            }
        }
        xhttp.open('POST', 'data/data.json.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=0")
      
    },
    useTabKey: function () {
        var NavRending = document.getElementById('navs')
        var MoNavRending = document.getElementById('mo_nav_list')

        var MenuName = ['<li class="nav_list nav1" onclick="dataRender.GeneRendingFn()|dataRender.NavActivation(this)|dataRender.MoListActivation(1) | formRootInsert(1)"><div class="nav_img nav1_img"></div>유전자검사</li>',
            '<li class="nav_list nav2" onclick="dataRender.babyRendingFn()|dataRender.NavActivation(this)|dataRender.MoListActivation(2) |formRootInsert(2)"><div class="nav_img nav2_img"></div>어린이 보험</li>',
            '<li class="nav_list nav3" onclick="dataRender.cancerRendingFn()|dataRender.NavActivation(this)|dataRender.MoListActivation(3) |formRootInsert(3)"><div class="nav_img nav3_img"></div>암보험</li>',
            '<li class="nav_list nav4" onclick="dataRender.diseaseRendingFn()|dataRender.NavActivation(this)|dataRender.MoListActivation(4) |formRootInsert(4)"><div class="nav_img nav4_img"></div>2대중대질병</li>',
            '<li class="nav_list nav5" onclick="dataRender.dementRendingFn()|dataRender.NavActivation(this)|dataRender.MoListActivation(5) |formRootInsert(5)"><div class="nav_img nav5_img"></div>치매보험</li>',
            '<li class="nav_list nav6" onclick="dataRender.carRendingFn()|dataRender.NavActivation(this)|dataRender.MoListActivation(6) |formRootInsert(6)"><div class="nav_img nav6_img"></div>자동차보험</li>'
        ];

        var MoMenuName = ['<li class="mo_list nav1" onclick="dataRender.GeneRendingFn()|dataRender.MoListActivation(1)|formRootInsert(1)"><img src="img/common/nav-gene.png" alt="">유전자검사<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav2" onclick="dataRender.babyRendingFn()|dataRender.MoListActivation(2)|formRootInsert(2)"><img src="img/common/nav-baby.png" alt="">어린이 보험<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav3" onclick="dataRender.cancerRendingFn()|dataRender.MoListActivation(3)|formRootInsert(3)"><img src="img/common/nav-cancer.png" alt="">암보험<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav4" onclick="dataRender.diseaseRendingFn()|dataRender.MoListActivation(4)|formRootInsert(4)"><img src="img/common/nav-disease.png" alt="">2대중대질병<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav5" onclick="dataRender.dementRendingFn()|dataRender.MoListActivation(5)|formRootInsert(5)"><img src="img/common/nav-deamentia.png" alt="">치매보험<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav6" onclick="dataRender.carRendingFn()|dataRender.MoListActivation(6)|formRootInsert(6)"><img src="img/common/nav-car.png" alt="">자동차보험<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>'
        ];

        var resultTab1 = result[0].tab1
        var resultTab2 = result[0].tab2
        var resultTab3 = result[0].tab3
        var resultTab4 = result[0].tab4
        var resultTab5 = result[0].tab5
        var resultTab6 = result[0].tab6

        var TabActivation = []
        TabActivation.push(resultTab1, resultTab2, resultTab3, resultTab4, resultTab5, resultTab6)

        var TabResultActivation = []
        var MoResultActivation = []


        TabResultActivation.push('<li class="nav_list nav0" onclick="dataRender.HomeRendingFn() | dataRender.NavActivation(this)|dataRender.MoListActivation(0) |formRootInsert(0)""></li>')


        MoResultActivation.push('<li class="mo_list nav0" onclick="dataRender.HomeRendingFn() | dataRender.MoListActivation(0) |formRootInsert(0)""><img src="img/common/nav-home.png" alt="">홈<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>')

        function MenuActive(Nokey) {
            if (TabActivation[Nokey] == 1) {
                TabResultActivation.push(MenuName[Nokey])
            }
        }

        function MoMenuActive(Nokey) {
            if (TabActivation[Nokey] == 1) {
                MoResultActivation.push(MoMenuName[Nokey])
            }
        }
        for (var i = 0; i < TabActivation.length; i++) {
            MenuActive(i)
            MoMenuActive(i)
        }

        var MenuNameR = TabResultActivation.toString()
        var MenuNameR1 = MenuNameR.replaceAll(',', '');
        var MenuNameR2 = MenuNameR1.replaceAll('|', ',');

        var MoMenuNameR = MoResultActivation.toString()
        var MoMenuNameR1 = MoMenuNameR.replaceAll(',', '');
        var MoMenuNameR2 = MoMenuNameR1.replaceAll('|', ',');

        NavRending.innerHTML = `${MenuNameR2}`;
        MoNavRending.innerHTML = `${MoMenuNameR2}`;

        var NavListClass = document.querySelectorAll('.nav_list')
        var PCMedia = window.matchMedia('( min-width: 1200px )');
        var smMedia = window.matchMedia('( max-width: 576px )');
        var mdMedia = window.matchMedia('(min-width: 577px) and (max-width: 1024px)');
        var documentWrap = document.getElementById('wrap').offsetWidth

        if (PCMedia.matches == true) {
            for (var i = 1; i < NavListClass.length; i++) {
                NavListClass[i].style.width = `calc(1140px/${NavListClass.length - 1})`
            }
        } else if (mdMedia.matches == true) {
            for (var i = 1; i < NavListClass.length; i++) {
                NavListClass[i].style.width = (documentWrap) / (NavListClass.length - 1) + "px"
            }
        } else if (smMedia.matches == true) {
            if ((NavListClass.length - 1) == 4) {
                for (var i = 1; i < NavListClass.length; i++) {
                    NavListClass[i].style.width = documentWrap / 2 + 'px'
                }
            } else if ((NavListClass.length - 1) == 6) {
                for (var i = 1; i <= 3; i++) {
                    NavListClass[i].style.width = documentWrap / 3 + 'px'

                }
                for (var i = 4; i <= 6; i++) {
                    NavListClass[i].style.width = documentWrap / 3 + 'px'

                }
            } else if ((NavListClass.length - 1) == 5) {
                for (var i = 1; i <= 3; i++) {
                    NavListClass[i].style.width = documentWrap / 3 + 'px'
                }
                for (var i = 4; i <= 5; i++) {
                    NavListClass[i].style.width = documentWrap / 2 + 'px'
                }
            } else if ((NavListClass.length - 1) == 3) {
                for (var i = 1; i <= 3; i++) {
                    NavListClass[i].style.width = documentWrap / 3 + 'px'
                }
            } else if ((NavListClass.length - 1) == 2) {
                for (var i = 1; i <= 2; i++) {
                    NavListClass[i].style.width = documentWrap / 2 + 'px'
                }
            } else {
                for (var i = 1; i <= 1; i++) {
                    NavListClass[i].style.width = documentWrap + 'px'
                }
            }
        }
        $(window).resize(function () {
            var PCMedia = window.matchMedia('( min-width: 1200px )');
            var smMedia = window.matchMedia('( max-width: 576px )');
            var mdMedia = window.matchMedia('(min-width: 577px) and (max-width: 1024px)');
            var documentWrap = document.getElementById('wrap').offsetWidth

            if (PCMedia.matches == true) {
                for (var i = 1; i < NavListClass.length; i++) {
                    NavListClass[i].style.width = `calc(1140px/${NavListClass.length - 1})`
                }
            } else if (mdMedia.matches == true) {
                for (var i = 1; i < NavListClass.length; i++) {
                    NavListClass[i].style.width = (documentWrap) / (NavListClass.length - 1) + "px"
                }
            } else if (smMedia.matches == true) {
                if ((NavListClass.length - 1) == 4) {
                    for (var i = 1; i < NavListClass.length; i++) {
                        NavListClass[i].style.width = documentWrap / 2 + 'px'
                    }
                } else if ((NavListClass.length - 1) == 6) {
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = documentWrap / 3 + 'px'
                    }
                    for (var i = 4; i <= 6; i++) {
                        NavListClass[i].style.width = documentWrap / 3 + 'px'
                    }
                } else if ((NavListClass.length - 1) == 5) {
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = documentWrap / 3 + 'px'
                    }
                    for (var i = 4; i <= 5; i++) {
                        NavListClass[i].style.width = documentWrap / 2 + 'px'
                    }
                } else if ((NavListClass.length - 1) == 3) {
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = documentWrap / 3 + 'px'
                    }
                } else if ((NavListClass.length - 1) == 2) {
                    for (var i = 1; i <= 2; i++) {
                        NavListClass[i].style.width = documentWrap / 2 + 'px'
                    }
                } else {
                    for (var i = 1; i <= 1; i++) {
                        NavListClass[i].style.width = documentWrap + 'px'
                    }
                }
            }
        })
    },
    
    NavActivation: function (thistag) {
        var NavClass = document.querySelectorAll('.nav_list')
        for (var i = 0; i < NavClass.length; i++) {
            NavClass[i].id = ''
        }
        thistag.id = 'active';
    },

    MoListActivation: function (Datakey) {
        $(".nav_list").attr('id', '')
        $(".nav" + Datakey).attr('id', 'active')
        $(".side_nav").fadeOut()
        $('.mo_nav').css({
            "left": "-50%"
        })
        
        if(Datakey == 0){
   
            $('html,body').animate({
                scrollTop: 0
            }, 500); // }
        }else{
   
            $('html,body').animate({
                scrollTop: 700
            }, 500); // }
        }

     
    },
    formTag: `
        <div class="inputs">
            <div class="input_box"><input type="text" id="reqname" placeholder="이름" autocomplete="off"></div>
            <div class="input_box">
                <select id="gender">
                    <option value="">성별</option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                </select><select class='area' id="reqarea">
                    <option value="">지역</option>
                    <option value="서울">서울</option>
                    <option value="인천">인천</option>
                    <option value="경기">경기</option>
                    <option value="대전">대전</option>
                    <option value="세종">세종</option>
                    <option value="부산">부산</option>
                    <option value="울산">울산</option>
                    <option value="대구">대구</option>
                    <option value="광주">광주</option>
                    <option value="제주">제주</option>
                    <option value="강원">강원</option>
                    <option value="충남">충남</option>
                    <option value="충북">충북</option>
                    <option value="경북">경북</option>
                    <option value="경남">충남</option>
                    <option value="전남">전남</option>
                    <option value="전북">전북</option>
                </select></div>
            <div class="input_box"><input type="text" id="reqbirth" placeholder="생년월일" autocomplete="off">
            </div>
            <div class="input_box"><input type="text" id="reqnumber" placeholder="전화번호" autocomplete="off">
            </div>

            <p class='agree_tab'><label class="container" id='check_label' onclick="checkBoxEvent()">개인정보 수집 및
                    이용 동의 합니다.
                    <input type="checkbox" id='agree_check'>
                    <span class="checkmark" id='check_box'></span>
                </label></p>
        </div>
        <div class="btn" onclick="insertData()">무료 상담 신청</div>
    </div>
`,
    HomeRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2');
        var Section3 = document.getElementById('section3');
        var Section4 = document.getElementById('section4');
        var Section5 = document.getElementById('section5');
        var Section6 = document.getElementById('section6');

        var Section7 = document.getElementById('section7');
        var Section8 = document.getElementById('section8');



        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');

        Section2.className = 'section5 home-section2';
        Section3.className = 'section6 home-section3';
        Section4.className = 'banner-2';
        Section5.className = 'introduce_consult';
        Section6.className = 'forms';
        Section7.className = 'off-class';
        Section7.innerHTML=``
        Section8.className = 'off-class';
        Section8.innerHTML = '';

        Panel1.style.display = 'block';
        Panel2.style.display = 'block';
        Section1.className='section1'

        Section1.innerHTML = ` 
                    <p class="mo_ment mo_ment_1">걸릴 확률이 제로인 보장내역까지</p>
                <p class="mo_ment">보험료를 꼬박꼬박 내고 계신</p>
                <p class="mo_ment">당신을 위한 라이프 뉴 케어를 시작합니다!</p>
                <div class='wrap'>
                                            <h3>LIFE NEW CARE's</h3>
                                    <h2>프로세스 4단계</h2>
                                    <ul class="section1_list">
                                        <li id='s1_li1'>
                                            <div class='li_wrap'>
                                                <div class="sm-arrow"></div>
                                            </div>
                                        </li>
                                        <li id='s1_li2'>
                                            <div class='li_wrap'>
                                                <div class="sm-arrow"></div>

                                            </div>
                                        </li>
                                        <li id='s1_li3'>
                                            <div class='li_wrap'>
                                                <div class="sm-arrow"></div>

                                            </div>
                                        </li>
                                        <li id='s1_li4'>
                                            <div class='li_wrap'>
                                                <div class="sm-arrow"></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="sticker" id='sticker_ev'>
                                    </div>
                                </div>`
        Panel1.innerHTML = `<div class='panel-img'></div>`

        Section2.innerHTML = `<div class="wrap">
                                <h2>맞춤 보험 설계</h2>
                                <p>오직 당신만을 위한<span>맞춤 보험 설계!</span></p>
                                <p>발병확률높은 질병에 대한 보장은 든든하게 채우고!<b> 불필요한 보장은 줄이고!</b></p>
                                <div class="ilust"></div>
                            </div>`
        Panel2.innerHTML = `<div class="panel_bg"></div>`

        Section3.innerHTML = `<div class="wrap">
                                <h4>100세 시대! 더욱 똑똑하게 대비하는 방법!</h4>
                                <h3><img src="img/section6_tit.png" alt="section6_tit"></h3>
                                <h2>이런 분들께 추천합니다!</h2>
                                <div class='panel_hexagons'>
                                    <div class='hexagon_group hexagon_group_1'>
                                        <div class="hexagon hexagon1"></div>
                                        <div class="hexagon hexagon2"></div>
                                    </div>
                                    <div class='hexagon_group hexagon_group_2'>
                                        <div class="hexagon hexagon3"></div>
                                        <div class="hexagon hexagon4"></div>
                                    </div>
                                    <div class='hexagon_group hexagon_group_3'>
                                        <div class="hexagon hexagon5"></div>
                                        <div class="hexagon hexagon6"></div>
                                    </div>
                                </div>
                            </div>`
        Section4.style.display = 'block';
        Section5.innerHTML = `<div class="wrap">
                                <div class="tit_box">
                                    <h2>LIFE NEW CARE PLANNER</h2>
                                    <h3 id='name_spot'></h3>
                                </div>
                                <div class="profils">
                                    <div class='photo' id='photo'>
                                    </div>
                                    <div class="profil_box">
                                        <h3 id='coment_render'>
                                            13년간 보험 전문가로 활동 하면서 쌓은 노하우로 당신의 미래를 더욱 든든하게 </br>지켜드리겠습니다.
                                        </h3>
                                        <div class="resume">
                                            <ul id='resume'>
                                                <li id='resume1'></li>
                                                <li id='resume2'></li>
                                                <li id='resume3'></li>
                                                <li id='resume4'></li>
                                                <li id='resume5'></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        Section6.className = 'forms'
        Section6.innerHTML = `
                            <div class="wrap">
                            <h2>미래가 걱정되시나요?</h2>
                            <h3 class='main_span'><span>유전자 검사로 <b>해답을 얻으세요!</b></span></h3>
                            <p>유전자 검사 및 보장분석과 관련하여 <span>궁금하신점은 언제나 편하게 문의주세요!</span></p>
                            ${this.formTag}`

        setTimeout(function(){
            dataRender.DataRendFn();
        },300)

       
    
    },

    GeneRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2');
        var Section3 = document.getElementById('section3');
        var Section4 = document.getElementById('section4');
        var Section5 = document.getElementById('section5');
        var Section6 = document.getElementById('section6');
        var Section7 = document.getElementById('section7');
        var Section8 = document.getElementById('section8');


        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');

        Section4.style.display = 'none'
        Section1.innerHTML=``
        Section1.className='off-class';

        Section8.className = 'forms';
        Section8.innerHTML = `
                             <div class="wrap">
                             <h3><span>유전자 검사</span></h3>
                             <p>유전자 검사 및 보장분석과 관련하여 <span>궁금하신점은 언제나 편하게 문의주세요!</span></p>
                             ${this.formTag}`;
        Section2.className = 'section2 gene_section2';
        Section2.innerHTML = `<div class='wrap'>
                            <div class='top_banner'></div>
                            <div class='bottom_banner'>
                            <div class='tab_bottoms left_bottom_img'>
                                <img src='img/gene/section3_top_left.png'>
                                <p>1회 타액채취로 <span>70만가지 유전자 동시분석!</span></p>
                                <p>고객에 따라 맞춤검사 및 주기적</p>
                                <p>질환 관리가 가능 합니다.</p>
                            </div>
                            <div class='tab_bottoms right_bottom_img'>
                            <img src='img/gene/section3_top_right.png'>
                            <p>가족력 있는 분들은 발병확률을 미리 확인하고</p>
                            <p><b>철저한 대비를 세울 수 있습니다.</b></p>
                            </div>
                            </div>

                            </div>`
        Section3.className = 'section3 gene_section3'
        Section3.innerHTML = `<div class='wrap'>
                            <h2>유전자 검사</h2>
                            <div class='h2_label'><span>-</span>일루미나칩 - <b>가장 정확한 최신 SNP Chip 기반 분석</b></div>
                            <p><span>2초, 한 번 이면 충분합니다!</span></p>
                            <p>단 한번의 타액채취로 2차, 3차 <b>심층검사가 가능합니다.</b></p>
                            <div class='photo_box'>
                            <div class='photos photo1'></div>
                            <div class='photos photo2'></div>
                            <div class='photos photo3'></div>
                            <div class='photos photo4'></div>
                            </div>
                            <h3>총 35종의 <span>질병 예측 검사!</span></h3>
                            <div class='circle_box'>
                            <div class='circles circle1'>
                            <h3>19종 암 검사</h3>
                            <div class='line'></div>
                            <p>위암, 폐암, 대장암, 간암, 갑상선, 췌장암,</p>
                            <p>방광암, 만성 림프구성 백혈병, 림프종,</p>
                            <p>자궁경부암, 유방암, 난소암, 전립선암,</p>
                            <p>뇌수막종, 식도암, 흑색종,</p>
                            <p>신경아세포종,</p>
                            <p>구강/인후암, 피부암,</p>
                            </div>
                            <div class='circles plus_img'></div>
                            <div class='circles circle2'>
                            <h3>5종 KID 질환</h3>
                            <div class='line'></div>
                            <p>천식, 아토피성피부염,</p>
                            <p>건선, 뇌수막종, 제2형 당뇨</p>
                            </div>
                            <div class='circles plus_img'></div>
                            <div class='circles circle3'>
                            <h3>11종 일반 질환 검사</h3>
                            <div class='line'></div>
                            <p>다발성경화증, 골다공증, 류머티스 관절염,</p>
                            <p>제2형 당뇨병, 알츠하이머병, 파킨슨병,</p>
                            <p>뇌졸증, 혈전증, 심근경색증,</p>
                            <p>심방세동, 우울증,</p>
                            
                            </div>
                            </div>
                            </div>`
        Panel1.style.display = 'none'
        Panel2.style.display = 'none'
        Section5.className = 'gene_section5';
        Section5.innerHTML = `<div class='wrap'>
                                <h2>높은 정확도의 <span>유전자검사 분석결과</span></h2>
                                <p>미국 CLIA - CAP 인증기업의 기술력으로</p>
                                <p>개인의 유전체 정보를 분석합니다.</p>
                                <div class='in_figure'></div>
                            </div>`;
        Section6.className = 'gene_section6';
        Section6.innerHTML = ``;

        Section7.className = 'gene_section7'
        Section7.innerHTML = `<div class='wrap'>
                                <h2>진행과정</h2>
                                <ul class='circle_anis'>
                                    <li id='list_icon1'></li>
                                    <li id='list_icon2'></li>
                                    <li id='list_icon3'></li>
                                    <li id='list_icon4'></li>
                                    <li id='list_icon5'></li>
                                    <li id='list_icon6'></li>
                                </ul>
                                <p class='line' id='line_actions'></p>
                                <p class='line mo_line'></p>

                                </div>`

        // this.Section8Render('gene');

    },

    babyRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        var Section4 = document.getElementById('section4');
        var Section5 = document.getElementById('section5');
        var Section6 = document.getElementById('section6');
        var Section7 = document.getElementById('section7');
        var Section8 = document.getElementById('section8');

        Section4.style.display = 'none'
        Section5.className = 'section5 baby_section5'
        Section5.innerHTML = ``
        Section6.className = 'section6 baby_section6'
        Section6.innerHTML = ``
        Section7.className = 'section7 baby_section7'
        Section7.innerHTML = ``


        Section1.innerHTML=``
        Section1.className='off-class';

        Section8.className = 'forms'
        Section8.innerHTML = `<div class="wrap">
                                <h3><span>어린이 보험</span></h3>
                                <p class='line1'>보장분석과 관련하여 <span>궁금하신점은 언제나 편하게 문의주세요!</span></p>
                                ${this.formTag}`
        Section2.className = 'section2 baby_section2'
        Section2.innerHTML = `<div class="wrap">
                                    <div class="left_tab tabs" id='section_left'>
                                        <h2>어린이보험</h2>
                                        <p>출산 시 발생할 수 있는 선천성 질환과</p>
                                        <p>산모 건강까지 책임집니다</p>
                                    </div>
                                    <div class="right_tab tabs" id='section_right'>
                                    <div class='ani_section page1-section1-ani'>
                                        <h2>신생아 질환 특약</h2>
                                        <ul>
                                            <li class='page1_circle1'><div class='circle_box'></div>
                                                <p class='lines line1'>다양한 선천기형,</p>
                                                <p class='lines line2'>변형 및 염색체 이상 보장</p>
                                            </li>
                                            <li class='page1_circle2'>
                                            <div class='circle_box'></div>
                                            <p class='lines line1'>희귀난치성 질환 보장</p>
                                            </li>
                                            <li class='page1_circle3'>
                                            <div class='circle_box'></div>
                                            <p class='lines line1'>인큐베이터 사용비 및</p>
                                            <p class='lines line2'>입원비 보장내역 확인!</p>
                                            </li>
                                            <li class='page1_circle4'>
                                            <div class='circle_box'></div>
                                            <p class='lines line1'>커서 겪을 수 있는 아토피,</p>
                                            <p class='lines line2'>성조숙증, ADHD 특약도</p>
                                            <p class='lines line3'>꼼꼼하게 확인!</p>
                                            </li>
                                        </ul>
                                        <p class='ani_line'></p>
                                        </div>
                                    </div>
                                </div>`
        Section3.className = `section3 baby_section3`
        Section3.innerHTML = `<div class='wrap'>
                                    <div class='left_tab'><h2>어린이보험</h2><p>내 아이 성장 과정에 따라</br>보장내역과 만기를 다르게 설정해야합니다.</p></div>
                                    <div class='right_tab'>
                                    <div class='animation_tab_page1'>
                                           <p>큰 병 아니더라도 입원할 일이 많은 영유아기</p> 
                                           <p>입원일당 특약은 최대로! <span>어른이 되면 불필요한 내역은 30세 만기로!</span></p>
                                           <div class='animation_area'>
                                           <div class='center_line'></div>
                                           <div class='stick_1 stick' id='stick1'></div>
                                           <div class='stick_2 stick' id='stick2'></div>
                                           <div class='text_area'>
                                           <span class='text-ani-1 text-box'>30세 만기</span>
                                           <span class='text-ani-2 text-box'>특약 최대</span>
                                           <span class='text-ani-3'>깁스 치료비 등 상해 보장 꼼꼼 확인</span></div>
                                           </div>
                                           </div>
                                    </div>
                                </div>`
        Section6.className = 'section6 baby_section6';
        Section6.innerHTML = `<div class='wrap'>
                                <h2>국내32개 보험사의 <b>모든 보험상품을 꼼꼼하게 분석해</b></h2>
                                <h2><span>우리 아이에게 딱 맞는 <b>보험을 찾아주는</b><b class='mo_b'>1:1 맞춤 보장분석서비스</b></span></h2>
                                <img class='left_fig' src='img/baby/left_figure.png'>
                                <img class='right_fig' src='img/baby/right_figure.png'>
                                </div>`
        Panel1.style.display = 'none'
        Panel2.style.display = 'none'
    },
    cancerRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        var Section4 = document.getElementById('section4');
        var Section5 = document.getElementById('section5');
        var Section6 = document.getElementById('section6');
        var Section7 = document.getElementById('section7');
        var Section8 = document.getElementById('section8');

        Section4.style.display = 'none'
        Section5.className = 'section5 baby_section5'
        Section5.innerHTML = ``
        Section6.className = 'section6 baby_section6'
        Section6.innerHTML = ``
        Section7.className = 'section7 baby_section7'
        Section7.innerHTML = ``
        Panel1.style.display = 'none'
        Panel2.style.display = 'none'



        Section1.innerHTML=``
        Section1.className='off-class';


        Section8.className = 'forms'
        Section8.innerHTML = `<div class="wrap">
        <h3><span>암보험</span></h3>
        <p>보장분석과 관련하여 <span>궁금하신점은 언제나 편하게 문의주세요!</span></p>
        ${this.formTag}`

        Section2.className = 'section2 cancer_section2'
        Section2.innerHTML = `<div class='wrap'>
        <div class="left_tab tabs" id='section_left'><h2>당신의 암보험은 든든합니까?</h2>
        <p>여러 개의 암 보험을 가입했지만 보장내역&</p>
        <p>지급조건을 자세히 알고 있는 분은 많지 않습니다.</p>
        </div>
        <div class="right_tab tabs" id='section_right'>
        <div class='ani_section page2-section1-ani'>
                                       <h2><span>연간 약 21만여 명의 신규 암 환자</span>가 발생하고 있습니다.</h2>
                                       <div class="pie-chart1">
                                       <div class='pie_half1'>
                                       <div class='hide_box1'></div>
                                       </div>
                                       <div class='pie_half2'>
                                       <div class='hide_box2'></div>
                                       </div>
                                       <div class='center'></div>
                                       </div>
                                       <p>자료 : 통계청 2017 사망원인</p>
                                       </div>
        </div>`

        Section3.className = 'section3 cancer_section3'
        Section3.innerHTML = `<div class='wrap'>
                            <div class='left_tab'>
                                <h2>가입한 암보험!</h2>
                                <h3>이제는 한 번 쯤 점검해봐야 할 때입니다.</h3>
                                <p>흩어진 암보험을 하나로 모아</p>
                                <p>보장은 든든하게 바로잡아 드립니다.</p>
                            </div>
                            <div class='right_tab'>
                            <div class='animation_tab_page2'>
                                            <div class='tit_box'>
                                            <h3>가족력, 성별, 치료비가 많이 들어가는 암에 따라</h3> 
                                            <h3>당신의 암보험 설계는 달라져야 합니다.</h3>
                                            </div> 
                                           <div class='graph_box'>
                                            <ul>
                                                <li>
                                                <div class='graph_1'></div><span class='point'>간병 1.6%</span>
                                                </li>
                                                <li>
                                                <div class='graph_2'></div><span class='point'>입원, 수술의 지연 1.8%</span>
                                                </li>
                                                <li>
                                                <div class='graph_3'></div><span class='point'>직업상실등 경제활동 저하 4.5%</span>
                                                </li>
                                                <li>
                                                <div class='graph_4'></div><span class='point'>임에 대한 정확한 지식부재 5.7%</span>
                                                </li>
                                                <li>
                                                <div class='graph_5'></div><span class='point point1'>의료기관에 대한 세부적인 정보부족 5.8%</span>
                                                </li>
                                                <li>
                                                <div class='graph_6'></div><span class='point point2'>죽음에 대한 두려움 12.2%</span>
                                                </li>
                                                <li>
                                                <div class='graph_7'></div><span class='point point3'>치료비 <b>67.5%</b></span>
                                                </li>
                                            </ul>
                                           </div>

                        </div>`
        Section6.className = 'section6 cancer_section6';
        Section6.innerHTML = `<div class='wrap'>
                            <h3>국내 32개 보험사의 모든 보험상품을 <b>꼼꼼하게 분석해</b></h3>
                            <h2>당신에게 맞는 보험을 찾아주는</h2>
                            <h2>1:1맞춤 보장분석서비스</h2>
                        </div>`


    },
    diseaseRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        var Section4 = document.getElementById('section4');
        var Section5 = document.getElementById('section5');
        var Section6 = document.getElementById('section6');
        var Section7 = document.getElementById('section7');
        var Section8 = document.getElementById('section8');

        Section4.style.display = 'none'
        Section5.className = 'section5 baby_section5'
        Section5.innerHTML = ``
        Section6.className = 'section6 baby_section6'
        Section6.innerHTML = ``
        Section7.className = 'section7 baby_section7'
        Section7.innerHTML = ``
        Panel1.style.display = 'none'
        Panel2.style.display = 'none'

        


        Section1.innerHTML=``
        Section1.className='off-class';


        Section8.className = 'forms'
        Section8.innerHTML = `<div class="wrap">
        <h3><span>2대중대질병</span></h3>
        <p>보장분석과 관련하여 <span>궁금하신점은 언제나 편하게 문의주세요!</span></p>
        ${this.formTag}`

        Section2.className = 'section2 disease_section2'
        Section2.innerHTML = `<div class='wrap'>
            <h2>높은 발병률과 사망률을 <span>기록하고 있는 심&middot;뇌혈관질환</span></h2>
                <p>암보험만큼 든든하게 준비하셔야 합니다</p>
                <div class='ani_section page3-section1-ani'>
                                            <div class='left_tab tabs'>
                                            <h3>연도별 심혈관질환 환자수 추이</h3>
                                            <p>성인의 심혈관질환 발병률은 꾸준하게 <span>증가하고 있습니다.</span></p>
                                            <div class='graph_tab'>
                                            <div class='hide_bar'></div>
                                                <ul>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people1'>905,936명</p>
                                                    <div class='stick stick_l1'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people2'>935,990명</p>
                                                    <div class='stick stick_l2'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people3'>959,490명</p>
                                                    <div class='stick stick_l3'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people4'>1,004,056명</p>
                                                    <div class='stick stick_l4'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people5'>1,038,720명</p>
                                                    <div class='stick stick_l5'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people6'>1,089,861명</p>
                                                    <div class='stick stick_l6'></div>
                                                    </div>
                                                    </li>
                                                </ul>
                                                <ul class='count'>
                                                    <li>2013</li>
                                                    <li>2014</li>
                                                    <li>2015</li>
                                                    <li>2016</li>
                                                    <li>2017</li>
                                                    <li>2018</li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div class='right_tab tabs'>
                                            <h3>연도별 심혈관질환 성별 환자수 추이</h3>
                                            <p>남성 환자수가 매년 증가하고 있어 이에 대한 <span>대비가 필요합니다.</span></p>
                                            <div class='graph_tab'>
                                            <p class='gender_tab'><b><span></span>남자</b> <b><span></span>여자</b>(단위: 1000명)</p>
                                            <div class='hide_bar'></div>
                                            <ul class='graph_tab'>
                                            <li>
                                                <div class='stick_wrap'>
                                                    <div class='left_stick' id='stick_left_1'>
                                                    <p id='stick_count_1'>406</p>
                                                    <div class='stick1_l'></div>
                                                    </div>
                                                    <div class='right_stick' id='stick_right_1'>
                                                    <p id='stick_count_2'>499</p>
                                                    <div class='stick1_r'></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                            <div class='stick_wrap'>
                                                <div class='left_stick' id='stick_left_2'>
                                                <p id='stick_count_3'>413</p>
                                                <div class='stick1_l'></div>
                                                </div>
                                                <div class='right_stick' id='stick_right_2'>
                                                <p id='stick_count_4'>522</p>
                                                <div class='stick1_r'></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                        <div class='stick_wrap'>
                                            <div class='left_stick' id='stick_left_3'>
                                            <p id='stick_count_5'>417</p>
                                            <div class='stick1_l'></div>
                                            </div>
                                            <div class='right_stick' id='stick_right_3'>
                                            <p id='stick_count_6'>541</p>
                                            <div class='stick1_r'></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                    <div class='stick_wrap'>
                                        <div class='left_stick' id='stick_left_4'>
                                        <p id='stick_count_7'>431</p>
                                        <div class='stick1_l'></div>
                                        </div>
                                        <div class='right_stick' id='stick_right_4'>
                                        <p id='stick_count_8'>572</p>
                                        <div class='stick1_r'></div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div class='stick_wrap'>
                                    <div class='left_stick' id='stick_left_5'>
                                    <p id='stick_count_9'>439</p>
                                    <div class='stick1_l'></div>
                                    </div>
                                    <div class='right_stick' id='stick_right_5'>
                                    <p id='stick_count_10'>599</p>
                                    <div class='stick1_r'></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div class='stick_wrap'>
                                <div class='left_stick' id='stick_left_6'>
                                <p id='stick_count_11'>453</p>
                                <div class='stick1_l'></div>
                                </div> 
                                <div class='right_stick' id='stick_right_6'>
                                <p id='stick_count_12'><b>636</b></p>
                                <div class='stick1_r'></div>
                                </div>
                            </div>
                        </li>
                        </ul>
                            <ul class='count r_count'>
                                <li>2013</li>
                                <li>2014</li>
                                <li>2015</li>
                                <li>2016</li>
                                <li>2017</li>
                                <li>2018</li>
                            </ul>
                        </div>
                        </div>
                    </div></div>`
        Section3.className = 'section3 disease_section3'
        Section3.innerHTML = `<div class='wrap page3'>
        <h2>더 저렴한 보험으로 <span>미래를 대비하세요</span></h2>
        <p>변화된 생활패턴으로 꾸준하게 증가하고 있는 <span>2대 질병에 대한 대비!</span></p>
        <p>같은 보장, 더 저렴한 보험으로 미래를 대비하세요</p>
        <div class='page3-animation-tab'>
            <div class='page3-circle page3-ani1' id='page3-s2-ani1'>
                <div class='inner_circle'>
                    <p class='text_area'>뇌출혈</p>
                </div>
            </div>
            <div class='page3-circle page3-ani2' id='page3-s2-ani2'>
               <div class='inner_circle'>
               <p class='text_area'>급성심근경색증</p>

               </div>

            </div>
            <div class='page3-circle page3-ani3' id='page3-s2-ani3'>
            <div class='inner_circle'>
            <p class='text_area'>뇌경색</p>

            </div>

            </div>
            <div class='page3-circle page3-ani4' id='page3-s2-ani4'>
            <div class='inner_circle'>
            <p class='text_area'>뇌졸증</p>

            </div>

            </div>
        </div>
    </div>`
        Section6.className = 'section6 cancer_section6';
        Section6.innerHTML = `<div class='wrap'>
          <h3>국내 32개 보험사의 모든 보험상품을 <b>꼼꼼하게 분석해</b></h3>
          <h2>당신에게 맞는 보험을 찾아주는</h2>
          <h2>1:1맞춤 보장분석서비스</h2>
      </div>`


    },
    dementRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        var Section4 = document.getElementById('section4');
        var Section5 = document.getElementById('section5');
        var Section6 = document.getElementById('section6');
        var Section7 = document.getElementById('section7');
        var Section8 = document.getElementById('section8');

        Section4.style.display = 'none'
        Section5.className = 'section5 baby_section5'
        Section5.innerHTML = ``
        Section6.className = 'section6 baby_section6'
        Section6.innerHTML = ``
        Section7.className = 'section7 baby_section7'
        Section7.innerHTML = ``
        Panel1.style.display = 'none'
        Panel2.style.display = 'none'

        Section1.innerHTML = ``;
        Section1.className = 'off-class'

        Section8.className = 'forms'
        Section8.innerHTML = `<div class="wrap">
        <h3><span>치매보험</span></h3>
        <p>보장분석과 관련하여 <span>궁금하신점은 언제나 편하게 문의주세요!</span></p>
        ${this.formTag}`
        Section2.className = 'section2 dement_section2';
        Section2.innerHTML = ` <div class='wrap'>
                                <h2>건강한 100세 시대를 위한 당신의 <span>치매보험을 점검해드립니다.</span></h2>
                                <p>경도, 중도, 중증치매까지 단계별 보장, 간병비, <span>생활자금까지 빠짐없이 보장되는지 확인하세요.</span></p>
                                <div class='ani_section page4-section1-ani'>
                                            <div class='left_tab  tabs'>
                                            <h3>연도별 치매 환자수 추이</h3>
                                            <p>꾸준하게 늘어나고 있는 치매환자, 미리 준비하지 않으면 함께 하는 가족도 고통받습니다.</p>
                                            <div class='graph_tab'>
                                            <div class='hide_bar'></div>
                                                <ul>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people1'>315,219명</p>
                                                    <div class='stick stick_l1'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people2'>348,652명</p>
                                                    <div class='stick stick_l2'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people3'>386,607명</p>
                                                    <div class='stick stick_l3'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people4'>424,239명</p>
                                                    <div class='stick stick_l4'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people5'>459,421명</p>
                                                    <div class='stick stick_l5'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people6'>511,931명</p>
                                                    <div class='stick stick_l6'></div>
                                                    </div>
                                                    </li>
                                                </ul>
                                                <ul class='count'>
                                                    <li>2013</li>
                                                    <li>2014</li>
                                                    <li>2015</li>
                                                    <li>2016</li>
                                                    <li>2017</li>
                                                    <li>2018</li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div class='right_tab  tabs'>
                                            <div class='tab_left'>
                                            <h3>치매환자 입원 외래별 요양급여비용총액 비율</h3>
                                            <p>요양급여비용이 외래비용보다 월등히 높게 나타나 이에 대한 단계별 대비가 필요합니다</p>
                                            <p class='count_sticker'><b><span></span>입원</b><b><span></span>외래</b> (단위:%)</p>
                                            </div>
                                                <div class='tab_right'>
                                                <p class='line_text'>외래: 5.9%</p>

                                                <div class='line' id='page4_line'>
                                                </div>
                                                <div class="pie-chart1">
                                                <div class='pie_half1'>
                                                <div class='hide_box1'></div>
                                                </div>
                                                <div class='pie_half2'>
                                                <div class='hide_box2'></div>
                                                </div>
                                                <div class='center'>
                                                <h3 class='center_h3'>입원</h3>
                                                <h2 class='center_h4'>94.1%</h2>
                                                </div>
                                                </div>
                                                </div>
                                            </div>
                                       </div>
                            </div>`
        Section3.className = 'section3 dement_section3';
        Section3.innerHTML = `
                                <div class='wrap page4'>
                                             <div class='left_tab'>
                                                 <h4>치매는 오랜 시간동안 소요되는 간병비와의 싸움!</h4>
                                                 <h3>고령자, 유병자라면</br><span>치매보험은 더욱 필수입니다.</span></h3>
                                                 <p>기존에 가입한 보험을 꼼꼼하게 비교분석하고 <span>부족한 보장을 채워줍니다.</span></p>
                                                </div>
                                            <div class='right_tab'>
                                                <div class='top_line'>
                                                    2018년
                                                </div>
                                                <div class='ani_section'>
                                                    <div class='page4_s2_graph page4_s2_graph_1'>
                                                        <div class='inner_box' id='page4_s2_graph_1'>
                                                            <h4>
                                                                치매 환자수
                                                                <span>꾸준한 증가!</span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div class='page4_s2_graph page4_s2_graph_2'>
                                                    <div class='inner_box'  id='page4_s2_graph_2'>
                                                            <h4>
                                                                요양급여비용
                                                                <span>2배 이상 증가!</span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <span class='bottom_text'>2013년</span>

                                                </div>
                                                <p>출처:국민관심질병통계</p>
                                            </div>
                                         </div>`


        Section6.className = 'section6 cancer_section6';
        Section6.innerHTML = `<div class='wrap'>
            <h3>국내 32개 보험사의 모든 보험상품을 <b>꼼꼼하게 분석해</b></h3>
            <h2>당신에게 맞는 보험을 찾아주는</h2>
            <h2>1:1맞춤 보장분석서비스</h2>
        </div>`


    },
    carRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        var Section4 = document.getElementById('section4');
        var Section5 = document.getElementById('section5');
        var Section6 = document.getElementById('section6');
        var Section7 = document.getElementById('section7');
        var Section8 = document.getElementById('section8');

        Section4.style.display = 'none'
        Section5.className = 'section5 baby_section5'
        Section5.innerHTML = ``
        Section6.className = 'section6 baby_section6'
        Section6.innerHTML = ``
        Section7.className = 'section7 baby_section7'
        Section7.innerHTML = ``
        Panel1.style.display = 'none'
        Panel2.style.display = 'none'

        

        Section1.innerHTML = ``;
        Section1.className = 'off-class'
        Section8.className = 'forms'
        Section8.innerHTML = `<div class="wrap">
        <h3><span>자동차 보험</span></h3>
        <p>보장분석과 관련하여 <span>궁금하신점은 언제나 편하게 문의주세요!</span></p>
        ${this.formTag}`
        Section2.className = 'section2 car_section2';
        Section2.innerHTML = `<div class='text_box'>
            <h3>내가 직접 비교하고 가입한</h3>
            <h4>자동차보험의 점검이 <span>필요하신가요?</span></h4>
            <p><span>보장서비스는 그대로!</span> 가격은 더 낮은 보험을 찾아드립니다.</p>
        </div>`
        Section3.className = 'section3 car_section3';
        Section3.innerHTML = `<div class='wrap'>
        <h2>자동차 보험 가입 시</h2>
        <h3>꼭 알아두어야 할 3가지 포인트</h3>
        <div class='figure_box'>
                <div class='figure_boxs figure_box1'><div class='inset_figure figure1'></div>
                    <h2>3대 법률비용 보장</h2>
                    <p>대인배상 I II, 대물배상, 자기신체사고, 자기차량손해
                    무보험자동차에 의한 상해등 운전자를 지켜주는
                    보장내역을 상세하게 확인해 드립니다.</p>
                </div>
                <div class='figure_boxs figure_box2'><div class='inset_figure figure2'></div>
                <h2>보험료 인상 여부</h2>
                <p>보험료 추가 인상없이 최장 보장 기간을 <span>보장 해주는
                안심 상품을 추천해 드립니다</span></p>
            </div>
                <div class='figure_boxs figure_box3'><div class='inset_figure figure3'></div>
                <h2>가장 저렴한 보험료</h2>
                <p>전 보험사의 상품을 통합 비교하여
                    같은 보장, <span>가장 저렴한 상품을 소개해드립니다.</span></p>
            </div>
            </div>
      </div>`

        Section6.className = 'section6 cancer_section6';
        Section6.innerHTML = `<div class='wrap'>
            <h3>국내 32개 보험사의 모든 보험상품을 <b>꼼꼼하게 분석해</b></h3>
            <h2>당신에게 맞는 보험을 찾아주는</h2>
            <h2>1:1맞춤 보장분석서비스</h2>
         
        </div>`


    },
    DataHtmlRender: function () {
        var data = result[0];
        var headerImg = document.getElementById('header_img_render');
        var NameSpot = document.getElementById('name_spot');
        var ComentArea = document.getElementById('coment_render');
        var photoArea = document.getElementById('photo');
        var resumeRedner1 = document.getElementById('resume1');
        var resumeRedner2 = document.getElementById('resume2');
        var resumeRedner3 = document.getElementById('resume3');
        var resumeRedner4 = document.getElementById('resume4');
        var resumeRedner5 = document.getElementById('resume5');
        var ResumY1 = data.resumY1;
        var ResumY2 = data.resumY2;
        var ResumY3 = data.resumY3;
        var ResumY4 = data.resumY4;
        var ResumY5 = data.resumY5;
        var ResumD1 = data.resumD1;
        var ResumD2 = data.resumD2;
        var ResumD3 = data.resumD3;
        var ResumD4 = data.resumD4;
        var ResumD5 = data.resumD5;

        document.title = `Beyond Money BmCompany ${data.name}`
        CflagName = `${data.name}`;
        NameSpot.innerHTML = `${data.name} ${data.spot}`;
        ComentArea.innerHTML = `${data.coment}`
        window.onload = function () { //로딩시 이미지 랜딩
            if (smMedia.matches == true) {
                headerImg.style.backgroundImage = `url(${data.headerSmimg})`;
                mobannerRedner()
            } else if (mdMedia.matche== true) {
                headerImg.style.backgroundImage = `url(${data.headerMdimg})`;
                mobannerRedner()
            } else {
                headerImg.style.backgroundImage = `url(${data.headerimg})`;
            }
        }()
        window.onresize = function () { //리사이즈 미디어쿼리
            if (smMedia.matches == true) {
                headerImg.style.backgroundImage = `url(${data.headerSmimg})`;
            } else if (mdMedia.matches == true) {
                headerImg.style.backgroundImage = `url(${data.headerMdimg})`;
            } else {
                headerImg.style.backgroundImage = `url(${data.headerimg})`;
            }
        }
        photoArea.style.backgroundImage = `url(${data.profilephoto})`;
   
        if (ResumY5 != null) {
            resumeRedner5.innerHTML = `<div class='year'>${ResumY5}</div>
                                       <div class='desc'>${ResumD5}</div>`
        }
        if (ResumY4 != null) {
            resumeRedner4.innerHTML = `<div class='year'>${ResumY4}</div>
                                       <div class='desc'>${ResumD4}</div>`
        }
        if (ResumY3 != null) {
            resumeRedner3.innerHTML = `<div class='year'>${ResumY3}</div>
                                       <div class='desc'>${ResumD3}</div>`
        }
        if (ResumY2 != null) {
            resumeRedner2.innerHTML = `<div class='year'>${ResumY2}</div>
                                       <div class='desc'>${ResumD2}</div>`
        }
        if (ResumY1 != null) {
            resumeRedner1.innerHTML = `<div class='year'>${ResumY1}</div>
                                       <div class='desc'>${ResumD1}</div>`
        }
    }
}
let ThisFormData;
formRootInsert = (Root) => {
    let FormRoot = ["home","gender","baby","cancer","disease","dementia","car"]
    ThisFormData = FormRoot[Root]
    return ThisFormData;
}
function insertData() {
    var reqName = document.getElementById('reqname').value;
    var reqBirth = document.getElementById('reqbirth').value;
    var reqNumber = document.getElementById('reqnumber').value;
    var reqArea = document.getElementById('reqarea').value;
    var reqSexflag = document.getElementById('gender').value;
    var Checked = document.getElementById('agree_check').checked;
    data = {
        insult: [reqName, reqBirth, reqNumber, reqSexflag,reqArea,ThisFormData],
        key:params.key,
        cflag: CflagName
    }
    if (reqName == '') {
        alert('성함을 입력해주세요')
    } else if (reqSexflag == '') {
        alert('성별을 선택해주세요')
    } 
    else if (reqArea == '') {
        alert('지역을 선택해주세요')
    }else if (reqBirth == '') {
        alert('생년월일을 입력해주세요')
    } else if (reqNumber == '') {
        alert('연락처를 입력해주세요')
    } else if (Checked == false) {
        alert('개인정보 수집 및 이용 동의를 체크해주세요')
    } else {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                InputreturnJson = JSON.parse(this.response);
                if (InputreturnJson.result == 'ok') {
                    alert('상담신청이 완료되었습니다 :)')
                    // location.reload();
                    console.log(InputreturnJson)
                } else {
                    alert('no')
                }
            }
        }
        xhttp.open('POST', 'insert.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=" + JSON.stringify(data))
    }
}

function checkBoxEvent() {
    // var checkbox = document.getElementById("check_label");
    var checkedbox = document.getElementById("agree_check");
    var checkLabel = document.getElementById("check_label");
    var checkBox = document.getElementById("check_box");


    if (checkedbox.checked == true) {
        checkLabel.style.color = '#e42f20'
        checkBox.style.backgroundColor = '#e42f20'
        checkBox.style.borderColor = '#e42f20';
    } else {
        checkLabel.style.color = '#444'
        checkBox.style.borderColor = 'gray';
        checkBox.style.backgroundColor = 'white'
    }
}


function mobannerRedner() {
    var moBanner = document.getElementById('mo_banner')
        moBanner.innerHTML = `<div class='go_store'>
        <h2>내 보험 조회하기</h2>
        <a href='https://play.google.com/store/apps/details?id=com.mymanager.android.myinsu'>
        <div class='go_btn1 go_btn'>
    <img src="img/google_s.png" alt="go_google">
    구글 플레이 바로가기
        </div>
        </a>
        <a href='https://apps.apple.com/kr/app/오케이마이보험-고객용/id1395815259'>
        <div class='go_btn2 go_btn'>
        <img src="img/apple_s.png" alt="">
        앱 스토어 바로가기
        </div>
        </a>
        </div>`
}