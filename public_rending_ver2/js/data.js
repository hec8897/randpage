String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}

var dataRender = {
    params: '',
    getQueryString: function () {
        params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
            params[key] = value;
        });
        return params;
    }(),
    DataRendFn: function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var key = params.key
                var returnJson = JSON.parse(this.responseText)
                result = returnJson.filter((x) => {
                    return x.idx == key;
                })
                // console.log(result)
                setTimeout(() => {
                    dataRender.useTabKey()

                }, 200);
            }
        }
        xhttp.open('POST', 'data/data.json', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=0")
        setTimeout(() => {
            this.DataHtmlRender()
        }, 500);
    },
    useTabKey: function () {
        var NavRending = document.getElementById('navs')
        var MoNavRending = document.getElementById('mo_nav_list')

        var MenuName = ['<li class="nav_list nav1" onclick="dataRender.GeneRendingFn()|dataRender.NavActivation(this)"><div class="nav_img nav1_img"></div>유전자검사</li>',
                        '<li class="nav_list nav2" onclick="dataRender.babyRendingFn()|dataRender.NavActivation(this)"><div class="nav_img nav2_img"></div>태아(어린이)보험</li>',
                        '<li class="nav_list nav3" onclick="dataRender.cancerRendingFn()|dataRender.NavActivation(this)"><div class="nav_img nav3_img"></div>암보험</li>',
                        '<li class="nav_list nav4" onclick="dataRender.diseaseRendingFn()|dataRender.NavActivation(this)"><div class="nav_img nav4_img"></div>2대중대질병</li>',
                        '<li class="nav_list nav5" onclick="dataRender.dementRendingFn()|dataRender.NavActivation(this)"><div class="nav_img nav5_img"></div>치매보험</li>',
                        '<li class="nav_list nav6" onclick="dataRender.carRendingFn()|dataRender.NavActivation(this)"><div class="nav_img nav6_img"></div>자동차보험</li>'
                    ];

        var MoMenuName = ['<li class="mo_list nav1" onclick="dataRender.GeneRendingFn()|dataRender.MoListActivation(1)"><img src="img/common/nav-gene.png" alt="">유전자검사<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav2" onclick="dataRender.babyRendingFn()|dataRender.MoListActivation(2)"><img src="img/common/nav-baby.png" alt="">태아(어린이)보험<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav3" onclick="dataRender.cancerRendingFn()|dataRender.MoListActivation(3)"><img src="img/common/nav-cancer.png" alt="">암보험<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav4" onclick="dataRender.diseaseRendingFn()|dataRender.MoListActivation(4)"><img src="img/common/nav-disease.png" alt="">2대중대질병<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav5" onclick="dataRender.dementRendingFn()|dataRender.MoListActivation(5)"><img src="img/common/nav-deamentia.png" alt="">치매보험<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>',
            '<li class="mo_list nav6" onclick="dataRender.carRendingFn()|dataRender.MoListActivation(6)"><img src="img/common/nav-car.png" alt="">자동차보험<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>'
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


        TabResultActivation.push('<li class="nav_list nav0" onclick="dataRender.HomeRendingFn() | dataRender.NavActivation(this)"></li>')


        MoResultActivation.push('<li class="mo_list nav0" onclick="dataRender.HomeRendingFn() | dataRender.MoListActivation(0)"><img src="img/common/nav-home.png" alt="">홈<img class="arrow" src="img/common/mo-arrow.png" alt="arrow"></li>')

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

            // console.log(MenuNameR2)
            NavRending.innerHTML = `${MenuNameR2}`;
            MoNavRending.innerHTML = `${MoMenuNameR2}`;

            var NavListClass = document.querySelectorAll('.nav_list')
            var PCMedia = window.matchMedia('( min-width: 1200px )');
            var smMedia = window.matchMedia('( max-width: 767px )');
            var mdMedia = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

            if(PCMedia.matches == true){
                for (var i = 1; i < NavListClass.length; i++) {
                    NavListClass[i].style.width = `calc(1140px/${NavListClass.length - 1})`
                }
            }
            else if(mdMedia.matches == true){
                for (var i = 1; i < NavListClass.length; i++) {
                    NavListClass[i].style.width = (innerWidth-60)/(NavListClass.length-1) +"px"
                }
            }
            else if(smMedia.matches == true){
                if((NavListClass.length-1) == 4){
                    for (var i = 1; i < NavListClass.length; i++) {
                        NavListClass[i].style.width = innerWidth/2 +'px'
                    }
                }
                else if((NavListClass.length-1) == 6){
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = innerWidth/3 +'px'
                    }
                    for (var i = 4; i <= 6; i++) {
                        NavListClass[i].style.width = innerWidth/3 +'px'
                    }
                }
                else if((NavListClass.length-1) == 5){
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = innerWidth/3 +'px'
                    }
                    for (var i = 4; i <= 5; i++) {
                        NavListClass[i].style.width = innerWidth/2 +'px'
                    }
                }
                else if((NavListClass.length-1) == 3){
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = innerWidth/3 +'px'
                    }
                }
                else if((NavListClass.length-1) == 2){
                    for (var i = 1; i <= 2; i++) {
                        NavListClass[i].style.width = innerWidth/2 +'px'
                    }
                }
                else{
                    for (var i = 1; i <= 1; i++) {
                        NavListClass[i].style.width = innerWidth +'px'
                    }
                }
            }
        $( window ).resize( function() {
            console.log(innerWidth)
            var PCMedia = window.matchMedia('( min-width: 1200px )');
            var smMedia = window.matchMedia('( max-width: 767px )');
            var mdMedia = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
            if(PCMedia.matches == true){
                for (var i = 1; i < NavListClass.length; i++) {
                    NavListClass[i].style.width = `calc(1140px/${NavListClass.length - 1})`
                }
            }
            else if(mdMedia.matches == true){
                for (var i = 1; i < NavListClass.length; i++) {
                    NavListClass[i].style.width = (innerWidth-60)/(NavListClass.length-1) +"px"
                }
            }
            else if(smMedia.matches == true){
                console.log(NavListClass.length)
                if((NavListClass.length-1) == 4){
                    for (var i = 1; i < NavListClass.length; i++) {
                        NavListClass[i].style.width = innerWidth/2 +'px'
                    }
                }
                else if((NavListClass.length-1) == 6){
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = innerWidth/3 +'px'
                    }
                    for (var i = 4; i <= 6; i++) {
                        NavListClass[i].style.width = innerWidth/3 +'px'
                    }
                }
                else if((NavListClass.length-1) == 5){
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = innerWidth/3 +'px'
                    }
                    for (var i = 4; i <= 5; i++) {
                        NavListClass[i].style.width = innerWidth/2 +'px'
                    }
                }
                else if((NavListClass.length-1) == 3){
                    for (var i = 1; i <= 3; i++) {
                        NavListClass[i].style.width = innerWidth/3 +'px'
                    }
                }
                else if((NavListClass.length-1) == 2){
                    for (var i = 1; i <= 2; i++) {
                        NavListClass[i].style.width = innerWidth/2 +'px'
                    }
                }
                else{
                    for (var i = 1; i <= 1; i++) {
                        NavListClass[i].style.width = innerWidth +'px'
                    }
                }
            }
        })
    },
    NavActivation:function(thistag){
        var NavClass = document.querySelectorAll('.nav_list')
        for (var i = 0; i<NavClass.length; i++){
        NavClass[i].id = ''
        }
        thistag.id = 'active';
    },
    MoListActivation:function(Datakey){
        $(".nav_list").attr('id','')
        $(".nav"+Datakey).attr('id','active')
        $(".side_nav").fadeOut()
        $('.mo_nav').css({"left":"-50%"})
        $('html, body').css({'overflow-y': 'auto'});
        $('html,body').animate({
            scrollTop: 800
          }, 500); // }
    },
    HomeRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1')
        var Panel2 = document.getElementById('panel-2')

        Section1.innerHTML = ` <div class='wrap'>
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
                                <h3></h3>
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
    },
    formTag:`<section class="forms" id='section6'>
    <div class="wrap">
        <h2>미래가 걱정되시나요?</h2>
        <h3><span>유전자 검사로 해답을 얻으세요!</span></h3>
        <p>유전자 검사 및 보장분석과 관련하여 <span>궁금하신점은 언제나 편하게 문의주세요!</span></p>
        <div class="inputs">
            <div class="input_box"><input type="text" id="reqname" placeholder="이름" autocomplete="off"></div>
            <div class="input_box">
                <select name="" id="gender">
                    <option value="">성별</option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                </select><select class='area' name="" id="reqArea">
                    <option value="">지역</option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                </select></div>
            <div class="input_box"><input type="number" id="reqbirth" placeholder="생년월일" autocomplete="off">
            </div>
            <div class="input_box"><input type="number" id="reqnumber" placeholder="전화번호" autocomplete="off">
            </div>

            <p class='agree_tab'><label class="container" id='check_label' onclick="checkBoxEvent()">개인정보 수집 및
                    이용 동의 합니다.
                    <input type="checkbox" id='agree_check'>
                    <span class="checkmark" id='check_box'></span>
                </label></p>
        </div>
        <div class="btn" onclick="insertData()">무료 상담 신청</div>
    </div>
</section>`,
    GeneRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        Section1.innerHTML=`${this.formTag}`
        Section2.className='section2 gene_section2'
        Section2.innerHTML=`<div class='wrap'>
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
        Section3.className='section3 gene_section3'
        Section3.innerHTML=`<div class='wrap'>
                            <h2>유전자 검사</h2>
                            <div class='h2_label'>EDGC 일루미나칩 - 가장 정확한 최신 SNP Chip 기반 분석</div>
                            <p><span>2초, 한 번 이변 충분합니다!</span></p>
                            <p>단 한번의 타액채취로 2차, 3차 심층검사가 가능합니다.</p>
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
        Panel1.style.display='none'
        Panel2.style.display='none'
    },
    babyRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        Section1.innerHTML=`${this.formTag}`
        Section2.innerHTML=`gene2`
        Section3.innerHTML=`gene3`
        Panel1.style.display='none'
        Panel2.style.display='none'
    },
    cancerRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        Section1.innerHTML=`${this.formTag}`
        Section2.innerHTML=`gene2`
        Section3.innerHTML=`gene3`
        Panel1.innerHTML=`p-gene1`
        Panel2.innerHTML=`p-gene2`
    },
    diseaseRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        Section1.innerHTML=`${this.formTag}`
        Section2.innerHTML=`gene2`
        Section3.innerHTML=`gene3`
        Panel1.innerHTML=`p-gene1`
        Panel2.innerHTML=`p-gene2`
    }, 
    dementRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        Section1.innerHTML=`${this.formTag}`
        Section2.innerHTML=`gene2`
        Section3.innerHTML=`gene3`
        Panel1.innerHTML=`p-gene1`
        Panel2.innerHTML=`p-gene2`
    },
    carRendingFn: function () {
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2')
        var Section3 = document.getElementById('section3')
        var Panel1 = document.getElementById('panel-1');
        var Panel2 = document.getElementById('panel-2');
        Section1.innerHTML=`${this.formTag}`
        Section2.innerHTML=`car2`
        Section3.innerHTML=`gene3`
        Panel1.innerHTML=`p-gene1`
        Panel2.innerHTML=`p-gene2`
    },
    DataHtmlRender: function () {
        //no:index, idx:페이지 키, name:이름, spot:직위, header-img:상단 개별이미지, resum1~5:[이력일자,이력], ekstra:여분
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


        document.title = `Beyond Money BmCompany ${data.name}`
        // headerImg.innerHTML = `<img src="${data.headerimg}" alt="개별 페이지 상단 이미지">`;
        // headerImg.style.backgroundImage=`url(${data.headerimg})`;
        CflagName = `${data.name}`;
        NameSpot.innerHTML = `${data.name} ${data.spot}`;
        ComentArea.innerHTML = `${data.coment}`
        var smMedia = window.matchMedia('( max-width: 767px )');
        var mdMedia = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

        window.onload = function () { //로딩시 이미지 랜딩
            if (smMedia.matches == true) {
                headerImg.style.backgroundImage = `url(${data.headerSmimg})`;
                mobannerRedner()
            } else if (mdMedia.matches == true) {
                // headerImg.style.backgroundImage=`url(${data.headerSmimg})`;
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
                // headerImg.style.backgroundImage=`url(${data.headerSmimg})`;
                headerImg.style.backgroundImage = `url(${data.headerMdimg})`;
            } else {
                headerImg.style.backgroundImage = `url(${data.headerimg})`;
            }
        }
        photoArea.style.backgroundImage = `url(${data.profilephoto})`;
        // resumeRedner1.innerHTML = ` <div class='year'>${data.resum1[0]}</div>
        //                             <div class='desc'>${data.resum1[1]}</div>`
        // resumeRedner2.innerHTML = ` <div class='year'>${data.resum2[0]}</div>
        //                             <div class='desc'>${data.resum2[1]}</div>`
        // resumeRedner3.innerHTML = `<div class='year'>${data.resum3[0]}</div>
        //                            <div class='desc'>${data.resum3[1]}</div>`
        // resumeRedner4.innerHTML = `<div class='year'>${data.resum4[0]}</div>
        //                            <div class='desc'>${data.resum4[1]}</div>`
        if (data.resum5 != null) {
            resumeRedner5.innerHTML = `<div class='year'>${data.resum5[0]}</div>
                                       <div class='desc'>${data.resum5[1]}</div>`
        }
        if (data.resum4 != null) {
            resumeRedner4.innerHTML = `<div class='year'>${data.resum4[0]}</div>
                                       <div class='desc'>${data.resum4[1]}</div>`
        }
        if (data.resum3 != null) {
            resumeRedner3.innerHTML = `<div class='year'>${data.resum3[0]}</div>
                                       <div class='desc'>${data.resum3[1]}</div>`
        }
        if (data.resum2 != null) {
            resumeRedner2.innerHTML = `<div class='year'>${data.resum2[0]}</div>
                                       <div class='desc'>${data.resum2[1]}</div>`
        }
        if (data.resum1 != null) {
            resumeRedner1.innerHTML = `<div class='year'>${data.resum1[0]}</div>
                                       <div class='desc'>${data.resum1[1]}</div>`
        }
    }
}

setTimeout(() => {
    dataRender.DataRendFn();
}, 100);



function insertData() {
    var reqName = document.getElementById('reqname').value;
    var reqBirth = document.getElementById('reqbirth').value;
    var reqNumber = document.getElementById('reqnumber').value;
    var reqSexflag = document.getElementById('gender').value;
    var Checked = document.getElementById('agree_check').checked;
    data = {
        insult: [reqName, reqBirth, reqNumber, reqSexflag],
        cflag: CflagName
    }
    if (reqName == '') {
        alert('성함을 입력해주세요')
    } else if (reqSexflag == '') {
        alert('성별을 선택해주세요')
    } else if (reqBirth == '') {
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
    if (params.key == 'sample') {
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
}