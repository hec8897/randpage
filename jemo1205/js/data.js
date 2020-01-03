const AnData = [{
        no: 0,
        qa: "1. CMA/MMA 라는 단어를 처음 들어봤다."
    },
    {
        no: 1,
        qa: "2. 가계부는 단 한번도 써 본적이 없고, 앞으로도 하고 싶지 않다."
    },
    {
        no: 2,
        qa: "3. 저축성/보장성 보험은 하나도 들지 않았다."
    },
    {
        no: 3,
        qa: "4. 현금서비스나 카드론은 급할때 가끔 받는다."
    },
    {
        no: 4,
        qa: "5. 월급이 안 들어오면 당장 다음 달 생활비가 없다."
    },
    {
        no: 5,
        qa: "6. 돈이 급할때 주로 가족의 도움을 받는다."
    },
    {
        no: 6,
        qa: "7. 한달 얼마를 지출하는지 파악이 안된다."
    },
    {
        no: 7,
        qa: "8. 신용카드를 3개 이상 가지고 있다."
    },
    {
        no: 8,
        qa: "9. 현재 저축하고 있는 상품의 이자율이 기억나지 않는다."
    },
    {
        no: 9,
        qa: "10.은퇴후 어떻게 살아야 할지 구체적인 계획이 없다."
    }

]
String.prototype.replaceAll = function (org, dest) {
    //array fillter prototype
    return this.split(org).join(dest);
}
let QArendingFn = {
    resultArray: [],
    indexNumber: 1,
    ResultCount: 0,
    QaNAnRender: function (no) {
        const QaRender = document.getElementById('qa_render')
        QaRender.innerHTML = `${AnData[no].qa}`
    },
    AnClickData(no, result) {
        const YesBtn = document.getElementById('yes_btn')
        const NoBtn = document.getElementById('no_btn')
        const NumberUl = document.getElementById('num');
        const Numbers = document.querySelectorAll('.an_number');
        if (this.indexNumber <= 9) {
            this.indexNumber += 1;
            if (result == "yes") {
                this.ResultCount += 1
                this.resultArray.push(1)
            }
            else{
                this.resultArray.push(0)
            }
            this.QaNAnRender(no)
            for (var i = 0; i < Numbers.length; i++) {
                Numbers[i].className = 'an_number'

            }
            Numbers[no].className = 'an_number active'
            YesBtn.innerHTML = `<img src="images/qa_yes.gif" alt="yes_btn" onclick="QArendingFn.AnClickData(${this.indexNumber},'yes')">`
            NoBtn.innerHTML = `<img src="images/qa_no.gif" alt="no_btn" onclick="QArendingFn.AnClickData(${this.indexNumber},'no')">`
        } else {
            if (this.ResultCount < 4) {
                NumberUl.style.display = 'none'
                popUpOpen("A")
                this.ResultCode = "A";
                // this.resultRender("A")
            } else {
                NumberUl.style.display = 'none'
                popUpOpen("B")
                this.ResultCode = "B";

                // this.resultRender("B")
            }
        }


    },
    ResultCode:"",
    resultArrayPush: function (no, i) {},
    resultPoint: 0,
    pointResult: function (no, point) {
        // this.resultPoint += point
    },
    resultRender: function (result) {
        const ResultRender = document.getElementById('qa_render_bg');
        if (result == "A") {
            ResultRender.innerHTML = `<img src="images/con1_resultA_pc.png" class='pc_bg' alt="">
                                  <img src="images/con1_resultA_mo_bg.png" class='mo_bg' alt="">
                                    <div class='test_area'>
                                      
                                    </div>
                                  `
        } else {
            if (result == "B") {

                ResultRender.innerHTML = `<img src="images/con1_resultB_pc.png" class='pc_bg' alt="">
                                      <img src="images/con1_resultB_mo_bg.png" class='mo_bg' alt="">
                                      <div class='test_area'>
                                   
                                    </div>`
            }
        }

    }
}

function popUpOpen(result,mode) {
    const SelectBox = document.getElementById('reqmemo');
    var Popup = document.getElementById('popup');
    $('html, body').css({ 'overflow': 'hidden', 'height': '150%' }); // 모달팝업 중 html,body의 scroll을 hidden시킴 
    $('#Popup').on('scroll touchmove mousewheel', function(event) { 
    event.preventDefault();     
    event.stopPropagation();     
    return false;
     });
    Popup.style.display = 'block'
}
function popUpClose() {
    var Popup = document.getElementById('popup');
    Popup.style.display = 'none'
    $('html, body').css({'overflow': 'auto', 'height': '100%'}); 
    $('#Popup').off('scroll touchmove mousewheel'); 
}

function gotoInsert() {
    var FormTag = $('#form').offset()
    $('html,body').animate({
        scrollTop: FormTag.top
    }, 1000); // }
}

var dataInserter = {
    params: '',
    getQueryString: function () {
        params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
            params[key] = value;
        });
        return params;
    }(),
    InsertdataArray: [],
    dataInsert: function () {
        var reqName = document.getElementById('reqname').value
        var reqBirth = document.getElementById('reqbirth').value
        var reqPhone = document.getElementById('reqphone').value
        var reqArea = document.getElementById('reqarea').value
        var reqMemo = document.getElementById('reqmemo').value
        var reqCheckM = document.getElementById('radio_1').checked
        var reqCheckW = document.getElementById('radio_2').checked
        var reqChecked = document.getElementById('checkbox_1').checked

        var reqSexflag;

        if (reqCheckM == true) {
            reqSexflag = '남성'
        } else if (reqCheckW == true) {
            reqSexflag = '여성'
        }


        if (reqName == "") {
            alert('성함을 입력해주세요')
        } else if (reqBirth == "") {
            alert('생년월일을 입력해주세요')
        } else if (reqCheckM == false && reqCheckW == false) {
            alert('성별을 선택해주세요')
        } else if (reqPhone == "") {
            alert('연락처를 입력해주세요')
        } else if (reqArea == "") {
            alert('지역을 선택해주세요')
        } else if (reqMemo == "") {
            alert('상담 분야를 선택하세요')
        } else if (reqChecked == false) {
            alert('개인정보수집 및 이용에 동의 해주세요')
        } else {
            var insert = confirm('입력하신 정보로 상담신청 하시겠습니까?')

            if (insert == true) {
                data = [{
                        TestAnsewer: QArendingFn.resultArray,
                        result: QArendingFn.resultPoint
                    },
                    {
                        reqName: reqName,
                        reqBirth: reqBirth,
                        reqPhone: reqPhone,
                        reqArea: reqArea,
                        reqMemo: reqMemo,
                        reqSexflag: reqSexflag,
                        adget: params.id
                    }
                ]

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var returnInsert = JSON.parse(this.responseText)
                        if (returnInsert.phpresult == 'ok') {
                            alert('상담신청이 완료되었습니다:)')
                                QArendingFn.resultRender(QArendingFn.ResultCode)
                                popUpClose() 
                            // location.reload()
                        } else {
                            alert('상담신청 실패 관리자에게 문의해주세요')
                            QArendingFn.resultRender(QArendingFn.ResultCode)
                            popUpClose() 
                        }
                    }
                }
                xhttp.open('POST', 'php/insert.php', true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send("data=" + JSON.stringify(data))
            }

        }





    }
}