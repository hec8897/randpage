String.prototype.replaceAll = function (org, dest) {
    //array fillter prototype
    return this.split(org).join(dest);
}

var QArendingFn = {
  
    DataRender: function () {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                returnJson = JSON.parse(this.responseText)

            }
        }
        xhttp.open('POST', 'data/data.json', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=0")

    }(),
    resultArray: [],
    QaNAnRender: function (no, mode) {
        if (mode == "reset") {
            this.resultPoint = 0
        }
        var qaRender = document.getElementById('qa_render');
        var AnResult = []
        if (no == returnJson.length) {
            this.resultRender();
        } else {

            for (var i = 0; i < returnJson[no].answer.length; i++) {
                AnResult.push(`<button onclick='QArendingFn.QaNAnRender(${no+1})|QArendingFn.resultArrayPush(${no}|${i})|QArendingFn.pointResult(${no}|${returnJson[no].answer[i].point})'>${returnJson[no].answer[i].qa}</button>`)

            }
            var resultArrayHtml = AnResult.toString();
            var replaceAll1 = resultArrayHtml.replaceAll(',', '');
            var replaceAll2 = replaceAll1.replaceAll('|', ',');

            qaRender.innerHTML = `  <span class="st_cat step_${no+1}"></span>
                <h3>${returnJson[no].question}</h3>
                <div>
                ${replaceAll2}
                </div>`
        }



    },
    resultArrayPush: function (no, i) {
        this.resultArray.push(`${returnJson[no].answer[i].qa}`)
    },
    resultPoint: 0,
    pointResult: function (no, point) {
        this.resultPoint += point
    },
    resultRender: function () {
        var qaRender = document.getElementById('qa_render');
        if (this.resultPoint >= 20) {
            qaRender.innerHTML = `<h3 class='result_tit result_good'>재무 상태 좋음</h3>
                                    <img src='images/result_good.png' alt="결과 아이콘 좋음">
                                    <p>당신의 재무상태는 좋은 편입니다.</p>
                                    <p> 자신의 재무상황을 올바르게 파악하고 있고 재테크에 관심이 많아 약간의 전문가 도움을 더하면 돈을 더욱 효과적으로 모을 수 있습니다. 무료재무 상담서비스를 통해 수익률 좋은 재테크 방법을 추천받아 보세요.</p>
                                    <div class='return_btn return_top' onclick='QArendingFn.QaNAnRender(0,"reset")'>테스트 다시하기</div> <div class='return_btn' onclick='gotoInsert()'>상담 신청하기</div>`
        } else if (this.resultPoint >= 14) {
            qaRender.innerHTML = `<h3 class='result_tit result_normal'>재무 상태 보통</h3>
                                    <img src='images/result_normal.png' alt="결과 아이콘 보통">
                                    <p>당신의 재무상태는 보통입니다.</p>
                                    <p> 부족한 분야의 금융지식을 늘리고, 단계별 재무목표 수립을 통해 든든한 노후를 맞이하기 위한 노력이 필요합니다. 무료재무 상담서비스를 통해 든든한 재무설계를 시작해보세요.</p>
                                    <div class='return_btn return_top' onclick='QArendingFn.QaNAnRender(0,"reset")'>테스트 다시하기</div><div class='return_btn' onclick='gotoInsert()'>상담 신청하기</div>`
        } else {
            qaRender.innerHTML = `<h3 class='result_tit result_bad'>재무 상태 나쁨</h3>
                                    <img src='images/result_bad.png' alt="결과 아이콘 나쁨">
                                    <p>당신의 재무상태는 나쁨입니다.</p>
                                    <p> 올바른 소비, 저축, 부채관리는 물론 든든한 재무목표 설정이 시급합니다. 재무전문가를 통해 목표 없는 재테크 투자보다는 건강한 돈관리 습관을 길러보세요. </p>
                                    <div class='return_btn return_top' onclick='QArendingFn.QaNAnRender(0,"reset")'>테스트 다시하기</div><div class='return_btn' onclick='gotoInsert()'>상담 신청하기</div>`
        }
    }
}

function gotoInsert(){
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


        if(reqName == ""){
            alert('성함을 입력해주세요')
        }
        else if(reqBirth ==""){
            alert('생년월일을 입력해주세요')
        }
        else if(reqCheckM == false && reqCheckW == false){
            alert('성별을 선택해주세요')
        }
        else if(reqPhone ==""){
            alert('연락처를 입력해주세요')
        }
        else if(reqArea ==""){
            alert('지역을 선택해주세요')
        }
        else if(reqMemo ==""){
            alert('상담 분야를 선택하세요')
        }
        else if(reqChecked == false){
            alert('개인정보수집 및 이용에 동의 해주세요')
        }
        else{
            var insert = confirm('입력하신 정보로 상담신청 하시겠습니까?')
          
            if(insert == true){
                data = [
                    {
                        TestAnsewer: QArendingFn.resultArray
                    },
                    {
                        reqName: reqName,
                        reqBirth: reqBirth,
                        reqPhone: reqPhone,
                        reqArea: reqArea,
                        reqMemo: reqMemo,
                        reqSexflag: reqSexflag,
                        adget:params.id,
                        Idkey:params.idkey
                    }
                ]
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var returnInsert = JSON.parse(this.responseText)
                        if(returnInsert.phpresult == 'ok'){
                            alert('상담신청이 완료되었습니다:)')
                        }
                        else{
                            alert('상담신청 실패 관리자에게 문의해주세요')
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