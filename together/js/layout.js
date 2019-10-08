var params;

function getQueryString() {
    params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    return params;
}
var layoutRender = {
    headerHtml: function () {
        var data = [{
                h3: "도전을 두려워 하지 않고 <span>오직 고객만족을 위한</span>",
                h2: "변화를 선도하는 <span>투게더 인스가 되겠습니다.</span>"
            },
            {
                h3: "보험에 관한 다양한 <span>정보를 제공하며</span>",
                h2: "고객님의 궁금증을 <span>해결해드리겠습니다.</span>"
            },
            {
                h3: "보험에 관한 여러분의 궁금한 점을 <span>검색해보세요.</span>",
                h2: ""
            },
            {
                h3: "기존의 경영의 틀을 벗어나 <span>미래 사업에</span>",
                h2: "새로운 변화를 가져올 <span>투게더인스</span>"
            }
        ]
        getQueryString()
        var key = Number(params.page);
        var header = document.querySelector('header');
        var headImg = document.getElementById('head');

        header.className = `main_head_${params.page}`;
        headImg.className = `head_${params.page}`;
        header.innerHTML = `   <div class="wrap">
                        <h1 class='main_ci'><a href='index.html'><img src="img/BI.png" alt="투게더인스 메인 BI""></a></h1>
                            <a id="nav-toggle" href="#"><span></span></a>
                            <ul class="gnb">
                                <li><a href='main.html?page=00&con=1'>회사소개</a></li>
                                <li><a href='main.html?page=01&con=1'>보험정보</a></li>
                                <li><a href='main.html?page=02'>FAQ</a></li>
                                <li><a href='main.html?page=03'>인재채용</a></li>
                            </ul>
                            <!-- <div class='top_section'>
                            <h3>${data[key].h3}</h3>
                            <h2>${data[key].h2}</h2>
                            </div> -->
                    </div>`
        headImg.innerHTML = `  <h3>${data[key].h3}</h3>
        <h2>${data[key].h2}</h2>`
    },
    lnbHtml: function () {
        var Nav = document.getElementById('lnb_render');
        if (params.page == "00") {
            Nav.innerHTML = ` <ul class="list-colum-5">
                                <li onclick='layoutRender.conRender(0,1)'>CEO 인사말</li>
                                <li onclick='layoutRender.conRender(0,2)'>미션</li>
                                <li onclick='layoutRender.conRender(0,3)'>비전</li>
                                <li onclick='layoutRender.conRender(0,4)'>CI</li>
                                <li onclick='layoutRender.conRender(0,5)'>오시는 길</li>
                            </ul>`
        } else if (params.page == "01") {
            Nav.innerHTML = ` <ul class="list-colum-3">
                                <li onclick='layoutRender.con2Render(1,1)'>보험 종류</li>
                                <li onclick='layoutRender.con2Render(1,2)'>보험 가입가이드</li>
                                <li onclick='layoutRender.con2Render(1,3)'>자동차 사고처리 절차</li>
                            </ul>`
        } else {
            Nav.style.height = "0px"
        }

    },
    conRender: function (pagekey, conkey) {
        var MainRedner = document.getElementById('con_render');
        if (pagekey == 0) {
            if (conkey == 1) {
                MainRedner.innerHTML = `
                                    <div class='m0-con${conkey}'>
                                        <h2>CEO 인사말</h2>
                                        <div class='banner banner-con-0'>
                                            <h3>최상의 서비스와 경쟁력 향상을 <span>위해 더욱 노력하는 기업</span></h3>
                                            <h4>투게더 인스</h4>
                                        </div>
                                        <div class='intro_text'>
                                            <p>안녕하세요</p>
                                            <p class='margin_point'>투게더인스 대표 김남호입니다.</p>
                                            <p>투게더 인스는 재무 및 보험 분야의 다양한 서비스와 전문적인 컨설팅을 제공하며 최상의 고객만족도를 유지하고 있습니다.</p>
                                            <p>지금의 성장에 안주하지 않고, 최상의 고객 맞춤 서비스와 기업의 경쟁력 향상을 위해 더욱 노력하는 기업이 되겠습니다.</p>
                                            <p>또한 고객님의 보다 나은 미래 설계에 지속적으로 기여할 수 있도록 글로벌 금융 파트로서의 모든 노력을 기울이겠습니다.</p>
                                            <p class='margin_point'>투게더인스가 ‘당신의 진정한 조력자’, ‘기업의 동반자’가로서 끊임 없이 변화하고 혁신해 나가며 고객의 삶을 더욱 가치 있게 하는데 일익을 담당할 수 있도록 아낌없는 성원을 부탁드립니다.</p>
                                            <p>감사합니다.</p>
                                        </div>
                                  </div>`
            } else if (conkey == 2) {
                MainRedner.innerHTML = ` 
                                    <div class='m0-con${conkey}'>
                                        <h2>미션</h2>
                                        <h3>고객의 현재 그리고 <b>미래를 함께하는 <span>투게더인스</span></b></h3>
                                        <p class='margin_point'>투게더 인스는 언제나 고객과 함께 성장하며 <span>새로운 가치창출을 위해 한발짝 앞서나가겠습니다.</span></p>
                                        <p>제자리걸음이 아닌 언제나 새로운 변화와 혁신을 꿈꾸며</p>
                                        <p>기업성장에 다음과 같은 역할을 할 것을 다짐합니다.</p>
                                        <div class='banner'>
                                            <div class='circles circle1'>
                                                <h3>01</h3>
                                                <p>고객만족과 고객 우선에</p>
                                                <p>가치를 두고 차별화된</p>
                                                <p>서비스를 극대화시키겠습니다.</p>
                                            </div>
                                            <div class='circles circle2'>
                                            <h3>02</h3>
                                                <p>금융과 보험 분야의</p>
                                                <p>전문성을 더한 컨설팅 역량을</p>
                                                <p>높여 나가겠습니다.</p>
                                            </div>
                                            <div class='circles circle3'>
                                            <h3>03</h3>
                                                <p>고객의 입장을 대변하며</p>
                                                <p>고객중심의 새로운</p>
                                                <p>가치창출을 이어가겠습니다.</p>
                                            </div>
                                        </div>
                                    </div>`
            } else if (conkey == 3) {
                MainRedner.innerHTML = `
                                    <div class='m0-con${conkey}'>
                                        <h2>비전</h2>
                                        <h3>WE ARE THE ONLY PARTNER<span>FOR YOUR BETTER LIFE.</span></h3>
                                        <p>고객의 올바른 금융과 보험 LIFE에 대한 가치를 넘어</p>
                                        <p>보다 나은 고객의 삶과 미래를 위한 영원한 동반자 <span>투게더인스가 되겠습니다.</span></p>
                                        <div class='banner'>
                                            <div class='line1'></div>
                                            <div class='banner-colum-1'>
                                            <div class='circle1 circles'>
                                                <h3>협력업체</h3>
                                                <p>상생정신을 바탕으로 협력 파트너와</p>
                                                <p>함께 소통하며 동반성장을 위한</p>
                                                <p>기회창출을 위해 힘쓰는 기업</p>
                                            </div>
                                            </div>
                                            <div class='banner-colum-2'>
                                                <div class='circle1 circles'>
                                                    <h3>고객</h3>
                                                    <p>신뢰를 바탕으로 한 최적의 서비스를</p>
                                                    <p>고객에게 제공하고 안심 Life를</p>
                                                    <p>이어갈 수 있도록 돕는 기업</p>
                                                </div>
                                                <div class='circle2 circles'>
                                                    <img src="img/main/main0-con3-bi.png" alt="투게더 인스 BI">
                                                    <p>고객의 삶과 미래를 위한</p>
                                                    <p>영원한 동반자</p>
                                                    <p>투게더인스</p>
                                                </div>
                                                <div class='circle3 circles'>
                                                    <h3>임직원</h3>
                                                    <p>자유로운 소통을 근간으로</p>
                                                    <p>주도적인 도전을 독려하며</p>
                                                    <p>함께 성장 발전을 이어가는 기업</p>
                                                </div>
                                            </div>
                                            <div class='line2'></div>
                                            <div class='line3'></div>

                                        </div>
                                        <div class='mo_banner'>
                                        <div class='circle1 circles'>
                                                <h3>협력업체</h3>
                                                <p>상생정신을 바탕으로 협력</p>
                                                <p> 파트너와 함께 소통하며</p>
                                                <p> 동반성장을 위한</p>
                                                <p>기회창출을 위해 힘쓰는 기업</p>
                                            </div>
                                            <div class='circle2 circles'>
                                                <h3>고객</h3>
                                                <p>신뢰를 바탕으로 한 최적의</p>
                                                <p>서비스를 고객에게 제공하고</p>
                                                <p>안심 Life를 이어갈 수 있도록</p>
                                                <p>돕는 기업</p>
                                            </div>
                                            <div class='circle3 circles'>
                                            <h3>임직원</h3>
                                                <p>자유로운 소통을 근간으로</p>
                                                <p>주도적인 도전을 독려하며</p>
                                                <p>함께 성장 발전을</p>
                                                <p>이어가는 기업</p>
                                            </div>
                                            <div class='circle4 circles'>
                                            <img src="img/main/main0-con3-bi.png" alt="투게더 인스 BI">
                                                    <p>고객의 삶과 미래를 위한</p>
                                                    <p>영원한 동반자</p>
                                                    <p>투게더인스</p>
                                            </div>

                                        </div>

                                    </div>`
            } else if (conkey == 4) {
                MainRedner.innerHTML = `
                                    <div class='m0-con${conkey}'>
                                        <h2>CI</h2>
                                        <div class='banner'></div>
                                        <p>'TogetherIns'는 ‘Together'와 ’insurance'의 순 영어의 조합어로 탄생했습니다.</p>
                                        <p>'함께‘ ’더불어‘라는 의미와 ’보험‘의 의미가 더해져 고객의 만족도를 최우선으로 두고</p>
                                        <p>최고의 보험 및 금융 서비스를 헌신적으로 제공하겠다는 의미를 담고 있습니다.</p>
                                    </div>`
            } else if (conkey == 5) {
                MainRedner.innerHTML = `
                                    <div class='m0-con${conkey}'>
                                        <h2>오시는 길</h2>
                                        <div class='banner map'id='map'></div>
                                        <div class='company_info'>
                                            <div class='info_tit'>(주)투게더인스</div>
                                            <div class='info_desc'>
                                                <p><span>주소</span>서충남 예산군 예산읍 벚꽃로 90 2층</p>
                                                <p class='no_border'><span>전화 / 팩스</span>1800-9838 / 070-4009-1203</p>
                                            </div>

                                        </div>
                                    </div>`
                var container = document.getElementById('map');
                var options = {
                    center: new kakao.maps.LatLng(36.688639, 126.836139),
                    level: 3
                };
                var map = new kakao.maps.Map(container, options);
                var markerPosition = new kakao.maps.LatLng(36.688639, 126.836139);
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
            }
        }
    },
    con2Render: function (pagekey, conkey) {
        var MainRedner = document.getElementById('con_render');
        if (pagekey == 1) {
            if (conkey == 1) {
                MainRedner.innerHTML = `
                                        <div class='m1-cons m1-con${conkey}'>
                                        <h2>보험종류</h2>
                                        <div class='line'></div>
                                        <h3>보험이란?</h3>
                                        <p>우발적 위험의 발생가능성을 수학적, 통계적 방법에 의하여 측정하고 이를 기초로 대량의 보험가입자에게 보험료를 각출하여 단체기금(공동준비재산)을 미리 마련해 실제로 발생된</p>
                                        <p>사고에 대하여 이를 지급함으로써 경제적 손실을 보전케 하는 현대사회의 가장 발달한 경제적 사회적 준비수단입니다.</p>
                                        <div class='line'></div>
                                        <h3>보험의 필요성</h3>
                                        <p>사고나 재난에 대비하기 위한 주요 수단으로는 예방, 진압, 저축, 보험이 있습니다. 그러나 예방과 진압은 아직까지 많은 한계가 있기 때문에 저축과 보험을 통한 사전대비가 요구</p>
                                        <p>됩니다. 저축의 경우는 우발적인 사고가 발생한 경우 그로 인한 경제적 손실을 충분히 보상 받을 수 없으므로, 보험제도가 그 대안으로 적합하다고 할 수 있습니다.</p>
                                        <p>현대 사회에 나타나는 핵가족화와 자기책임주의 재해, 성인병의 증가, 평균수명연장에 따른 노후불안 등의 사회적 배경으로 인해 보험의 역할은 더욱 더 중요합니다. </p>
                                        <div class='line'></div>
                                        <h3>보험의 종류</h3>
                                        <h4>목적(위험의 대상)에 따른 분류</h4>
                                        <p class='no_inline'>- 인보험(생명보험) : <span>사람에게 발생하는 사고에 대해 보장하는 보험</span></p>
                                        <p class='no_inline'>- 물보험(손해보험) :  <span>재산이나 기타의 물건에 발생하는 사고에 대해 보장하는 보험 </span></p>
                                        <h4>경영주체에 따른 분류</h4>
                                        <p class='no_inline'>- 공영보험 : <span>국가 또는 공공단체가 공공복지를 목적으로 경영하는 보험 </span></p>
                                        <p class='no_inline'>- 민영보험 :  <span>보험업자에 의해 영리를 목적으로 경영하는 보험 </span></p>
                                        <h4>보험의 책임에 따른 분류</h4>
                                        <p class='no_inline'>- 원보험 :  <span>보험가입자와 보험자의 최초로 계약된 보험 </span></p>
                                        <p class='no_inline'>- 재보험 :  <span>원보험자가 부담해야 하는 보험 계약상의 책임의 일부 또는 전부를 다시 다른 보험자에게 인계한 보험 </span></p>
                                        <p class='no_inline'>- 공동보험 :  <span>둘 이상의 보험자간 보험 목적을 공동으로 인수하는 보험 </span></p>
                                        <p class='no_inline'>- 중복보험 :  <span>동일한 목적물 및 기간에 많은 보험자와 보험계약이 체결되어 총보험 금액이 보험 가액을 초과하는 보험 </span></p>
                                        <h4>보험금 보상방법에 따른 분류</h4>
                                        <p class='no_inline'>- 손해보험(평가보험) :  <span>[실손해액X (보험금액/보험가액)] 공식으로 지급 보험금을 산출하는 보험 </span></p>
                                        <p class='no_inline'>- 정액보험 :  <span>계약상의 일정 금액을 보상해 주는 보험 </span></p>

                                        </div>`
            } else if (conkey == 2) {
                MainRedner.innerHTML = `
                <div class='m1-cons m1-con${conkey}'>
                <h2>보험 가입가이드</h2>
                <div class='line'></div>
                <h3>보험계약자의 권리&middot;의무 확인 및 자필서명</h3>
                <p>보험계약을 청약할 때는 약관상 계약자의 권리와 의무를 확인하고 다음 사항에 유의하시기 바랍니다. </p>
                <p>청약서는 계약자 본인이 작성하고 자필서명을 하여야 합니다. </p>
                <p>보험계약 청약시 청약서 작성내용(현재 및 과거의 건강상태, 신체의 장 해, 위험직종 여부등)에 대해 모집인등에게 구두로 행한 경우에는 보험금을 지급받지 못하는 등 불이익을 </p>
                <p>받을 수도 있으므로 청약서는 계약자 본인이 직접 작성하시고 서명란에도 계약자 본인 및 피보험자가 자필로 서명하여야 합니다. </p>
                <p>자필서명을 하지 않은 경우 계약이 무효로 처리될 수 도 있습니다. 품질보증제도를 활용할 수 있습니다. </p>
                <p>계약자가 보험가입시 약관과 청약서부본을 전달받지 못했을 경우, 청약서 자필서명을 하지 않았을 경우, 약관의 주요 내용을 설명받지 못했을 경우에는 이를 이유로 청약일로부터 </p>
                <p>3개월내에 계약의 해지를 요구할 수 있는 품질보증제도를 운영하고 있습니다. 이 경우에는(그 정당성 이 인정될 경우) 회사는 이미 납입한 보험료와 보험료를 받은 기간에 대해 </p>
                <p>약관대출이율로 계산한 금액을 더하여 드립니다. 주소변경시는 회사에 지체없이 알려야 합니다.계약자는 주소 또는 연락처가 변경된 경우 이를 지체없이 회사에 알려야 합니다. </p>
                <p>만일 알리지 않은 경우 회사가 알고있는 최종의 주소로 알린 사항은 계약자에게 도달한 것으로 봅니다.</p>

                <div class='line'></div>
                <h3>보험계약내용</h3>
                <p>청약서부본에 명시되어 있는 내용중 보험계약관계자, 보험료, 보험료 납입기간, 납입방법, 보험기간, 보험가입금액등에 대해 확인하시고 나중에 보험증 권이 발급되었을 경우</p>
                <p>이 청약서부본과 비교하여 그 내용이 정확히 일치하는 지를 확인하시기 바랍니다.</p>

                <div class='line'></div>
                <h3>보험가입 시 교부서류</h3>
                <p>보험가입시는 제1회보험료영수증이 포함된 청약서부본(청약서에 영수증이 포함되어 있지 않을 경우 별도로 수령), 보험약관, 보험가입자 안내등의 서류를 꼭 교부 받아야 합니다.</p>

                </div>`

            } else if (conkey == 3) {
                MainRedner.innerHTML = `
                                        <div class='m1-cons m1-con${conkey}'>
                                        <h2>자동차 사고처리 절차</h2>
                                        <div class='line'></div>
                                        <h3>교통사고 처리 순서</h3>
                                        <ul class='info'>
                                            <li><span>1</span>사고가나면 피해자부터 신속히 구조<b>(지혈, 인공호흡 등 응급처치 시행)</b></li>
                                            <li><span>2</span>사고현장 보존<b>(스프레이 또는 사진기를 이용/목격자 연락처 확보)</b></li>
                                            <li><span>3</span>경찰관(서)에 교통사고 발생 신고<b>(사고 장소,사상자 수, 피해 정도를 신고)</b></li>
                                            <li><span>4</span>보험회사에 사고 통보</li>
                                        </ul>
                                        <div class='tip_box'>
                                            <img src="img/main/main1-con3-tip.png" alt="메인1 con3 tip 이미지">
                                            <p>보행자나 운전자 등을 다치게 한 사고일 경우 피해가 경미하더라도 병원에 옮겨 진단을 받도록 하는 것이 좋습니다.</p>
                                            <p>피해자가 병원에 가는 것을 거부하더라도 상호간의 주소와 성명, 연락처, 차량번호 등을 명함 등에 기재하여 추후 조치가 가능하도록 하여야 합니다.</p>
                                        </div>
                                        <div class='line'></div>
                                        <h3>경찰서 신고와 보험처리</h3>
                                        <p>물질 피해만 발생된 사고일 경우 피해정도가 경미하고 가해자와 피해자간의 원만한 합의가 이루어진 때에는 경찰관(서)나 경찰공무원에게 신고하지 않아도 됩니다.</p>
                                        <p>그러나 가해자와 피해자의 다툼이 심한 경우 또는 차량의 심한 파손으로 이동이 어려운 경우라면 신속히 가까운 경찰관(서)나 경찰공무원에게 사고 사실을 알려 조치를 받아야 합니다.</p>

                                        <div class='line'></div>
                                        <h3>교통사고 경찰서 신고의무</h3>
                                        <p>발생된 교통사고가 경찰관서에 반드시 신고 되어야만 보험회사의 보험처리가 되는 것은 아닙니다.</p>
                                        <p>미신고 건이라도 사고발생 및 손해발생 등의 사고 사실에 관해서는 신고 유무와 관계없이 보상처리 됩니다.</p>
                                        <p>그러나 자기차량 도난의 경우 반드시 경찰관(서)에 신고가 되어야 보상처리 가능합니다.</p>
                                        <div class='line'></div>
                                        <h3>보험사별 사고접수 및 긴급출동</h3>
                                        <div class='info_box'>
                                            <ul class='colums colum-1'>
                                                <li>
                                                    <img src="img/main/insu_ci_sam.png" alt="보험사 CI 삼성화재">
                                                    <span>1588-5114</span>
                                                </li>
                                                <li>
                                                <img src="img/main/insu_ci_HK.png" alt="보험사 CI 한국생명">
                                                    <span>1688-1688</span>
                                                </li>
                                                <li>
                                                <img src="img/main/insu_ci_DB.png" alt="보험사 CI DB 손해보험">
                                                    <span>1588-0100</span>
                                                </li>
                                                <li>
                                                <img src="img/main/insu_ci_RT.png" alt="보험사 CI 롯데손해보험">
                                                    <span>1588-3344</span>
                                                </li>
                                            </ul>
                                            <ul  class='colums colum-2'>
                                            <li>
                                                    <img src="img/main/insu_ci_HD.png" alt="보험사 CI 현대해상">
                                                    <span>1588-5656</span>
                                                </li>
                                                <li>
                                                <img src="img/main/insu_ci_HH.png" alt="보험사 CI 한화손해보험">
                                                    <span>1566-8000</span>
                                                </li>
                                                <li>
                                                <img src="img/main/insu_ci_MZ.png" alt="보험사 CI 메리츠화재">
                                                    <span>1566-7711</span>
                                                </li>
                                                <li>
                                                <img src="img/main/insu_ci_LI.png" alt="보험사 CI LIG 손해보험">
                                                    <span>1544-0114</span>
                                                </li>

                                            </ul>

                                        </div>
                                        </div>
                                     
                                        `


            }
        }




    },
    con3Render: function (pagekey, conkey) {
        var MainRedner = document.getElementById('con_render');
        if (pagekey == 2) {
            MainRedner.innerHTML = ` <div class='m2-cons m2-con'>
                                        <h2>FAQ</h2>
                                        <div class='faq_box'>
                                            <div class='qa1 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>순수보장성 상품이란 무엇인가요?</p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an1 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    순수보장성 상품이란 저축보험료 부분을 빼고 위험보험료를 중심으로 구성이 이루어진 상품으로 만기환급금이 아예 없거나 거의 없는 보험을 말합니다.
                                                    </p>
                                                </div>
                                            </div>

                                            <div class='qa2 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    성인 주요질환 중, 1형 2형 3형은 어떤 질병인가요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an2 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    대표적으로 1형은 뇌출혈, 심근경색, 2형은 갑상선결절, 만성신부전, 3형은 당뇨, 고혈압 등을 포함하여 대략적으로 분류되고 있습니다. 남성과 여성 보장이 상이하므로 약관 등을 자세하게 참조하세요.
                                                    </p>
                                                </div>
                                            </div>

                                            <div class='qa3 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    무배당 보험상품의 특징은 무엇인가요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an3 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    무배당 상품은 배당금을 지급하지 않는 상품을 말합니다. 무배당 보험상품은 생명보험약관에서 보험료 산출기초가 되는 예정이율 및 예정사망률 등이 실적치와 차가 생겨도 보험특약자에게 그 차액을 배당하지 않는 보험을 말합니다. 대신 상대적으로 유배당 상품보다는 보험료가 낮게 책정이 됩니다.
                                                    </p>
                                                </div>
                                            </div>

                                            <div class='qa4 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    실비보험 면책기간은 어떻게 되나요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an4 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    의료실비의 경우 90일의 면책기간이 있습니다. 
                                                    </p>
                                                </div>
                                            </div>

                                            <div class='qa5 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    보험가입을 위해 병원에서 받은 진단서를 꼭 제출해야 하나요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an5 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    가입 원하시는 상품과 고지하는 질병에 따라서 진단서 첨부가 요청되는 경우가 있고 또는, 고지만으로 가입 가능 하실 수도 있습니다. 또한, 진단서를 첨부하셨을 때 그 내용에 따라 가입이 가능 하실 수도, 가입이 불가능 하실 수도 있습니다.
                                                    </p>
                                                </div>
                                            </div>


                                            <div class='qa6 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    이혼 후 배우자도 그대로 보장가능 한가요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an6 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    보험수익자는 보험금 지급사유가 발생한 때에 보험금을 청구하여 받을 수 있는 사람을 말합니다. 이혼 후에도 배우자가 보험금의 수익자로 지정되어 있는 경우에는 보험금 보장이 가능합니다.

                                                    </p>
                                                </div>
                                            </div>

                                            <div class='qa7 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    보험의 일부 특약을 해지하려는데, 가능한가요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an7 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    특약 해지는 의무부가 특약의 경우만 제외하고 해지 가능합니다.
                                                    </p>
                                                </div>
                                            </div>

                                            <div class='qa8 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    갱신 시 보험료 산정 기준은 어떻게 되나요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an8 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    갱신 시의 연령 및 갱신 시의 보험회사 경험 위험율 표에 의한 위험율에 따른 책정이 되며, 보험료 산정 기준은 변동될 수 있습니다.
                                                    </p>
                                                </div>
                                            </div>

                                            <div class='qa9 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    기존 가입자가 10년 후 자동 갱신시 개정된 상품으로 변경 가능한가요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an9 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    면책기간과 감액기간을 제외하면 가입했던 상품과 동일한 보장내용으로 갱신됩니다.
                                                    </p>
                                                </div>
                                            </div>

                                            <div class='qa10 qa'>
                                            <div class='wrap'>
                                                    <span class='q_span'>Q</span>
                                                    <p>
                                                    갱신 시에도 면책기간, 감액 조건이 적용 되나요?
                                                    </p>
                                                    <img src="img/main/down_arrow.png" alt="">
                                                </div>
                                            </div>

                                            <div class='an10 an'>
                                            <div class='wrap'>
                                                    <span>A</span>
                                                    <p>
                                                    갱신 후에는 면책기간, 감액기간이 적용되지 않습니다.
                                                    </p>
                                                </div>
                                            </div>
                                      
                                        </div>
                         
                                    </div>`
        }

    },
    con4Render: function (pagekey) {
        var MainRedner = document.getElementById('con_render');
        if (pagekey == 3) {
            MainRedner.innerHTML = `
                                    <div class='m4-con'>
                                        <h2>인재 채용</h2>
                                        <h3>투게더 인스에서 긍정적이고 <b>진취적인 <span>우수한 인재를</b> 상시 모집하고 있습니다.</span></h3>
                                        <h4>서로를 존중하며 신뢰하는 조직문화를 지향하는 <b>투게더인스와 함께  <span>미래를 함께 하실 전문인재의</b> 많은 지원과 관심 바랍니다.</span></h4>
                                        <div class='join_box1'>
                                            <h3>모집분야</h3>
                                            <p>보험전문가<span>(생명보험, 손해보험, 변액보험)</span></p>
                                        </div>
                                        <div class='join_box2 joins'>
                                        <h3>모집과정</h3>
                                        <ul class='circle'>
                                        <li class='circles circle1'>
                                            <div class='imgs'></div>
                                            <h4>지원서 접수</h4>
                                        </li>
                                        <li class='arrow_img'></li>
                                        <li class='circles circle2'>
                                        <div class='imgs'></div>
                                            <h4>개별 연락</h4>
                                        </li>
                                        <li class='arrow_img'></li>
                                        <li class='circles circle3'>
                                        <div class='imgs'></div>
                                            <h4>채용면접</h4>
                                        </li>
                                        <li class='arrow_img'></li>
                                        <li class='circles circle4'>
                                        <div class='imgs'></div>
                                            <h4>최종합격</h4>
                                        </li>

                                        </ul>
                                        </div>
                                        <div class='join_box3 joins'>
                                            <h3>투게더인스의 핵심 지원내용</h3>
                                            <ul class='circle'>
                                        <li class='circles circle1'>
                                            <div class='imgs'></div>
                                            <h4>우수사원 포상</h4>
                                        </li>
                                        <li class='arrow_img'></li>
                                        <li class='circles circle2'>
                                        <div class='imgs'></div>
                                            <h4>인센티브 지급</h4>
                                        </li>
                                        <li class='arrow_img'></li>
                                        <li class='circles circle3'>
                                        <div class='imgs'></div>
                                            <h4>주5일 근무</h4>
                                        </li>
                                        <li class='arrow_img'></li>
                                        <li class='circles circle4'>
                                        <div class='imgs'></div>
                                            <h4>정기 인재 양성 교육</h4>
                                        </li>

                                        </ul>
                                        </div>
                                        
                                    </div>`

        }
    }
}