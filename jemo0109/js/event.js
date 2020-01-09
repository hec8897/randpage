function getQueryString(){
    params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    return params;
}


const popupData = [
    {
        "no":"0",
        "question":"당신의 직업군은 무엇입니까?",
        "answer":[
                  {"qa":"개인사업, 자영업","point":0},
                  {"qa":"직장인, 근로소득자","point":0},
                  {"qa":"전문직, 프리랜서","point":0}
                ]
    },
    {
        "no":"1",
        "question":"당신의 연간 총소득은 얼마인가요?",
        "answer":[
            {"qa":"1천~3천만원","point":1},
            {"qa":"3천~6천만원","point":2},
            {"qa":"6천~9천만원","point":3},
            {"qa":"1억이상","point":4}
          ]
    },
    {
        "no":"2",
        "question":"당신은 얼마 정도의 대출을 받고 있나요?",
        "answer":[
            {"qa":"1천만원 이하","point":4},
            {"qa":"3천만원 이하","point":3},
            {"qa":"5천만 원 이하","point":2},
            {"qa":"1억이상","point":1}
          ]
    },
    {
        "no":"3",
        "question":"비상시를 대비하여 두 달 생활비 정도의 자금이 통장에 있나요?",
        "answer":[
            {"qa":"예","point":4},
            {"qa":"아니요","point":1}
          ]
    },
    {
        "no":"4",
        "question":"당신은 갑작스러운 상해, 질병, 사고, 사망 등에 대비해 보장성 보험에 가입했나요?",
        "answer":[
            {"qa":"예","point":4},
            {"qa":"아니요","point":1}
          ]
    },
   
    {
        "no":"5",
        "question":"매월 정기적으로 발생하는 생활비, 이자, 보험료 등이 얼마인지 정확하게 알고 있나요?",
        "answer":[
            {"qa":"예","point":4},
            {"qa":"아니요","point":1}
          ]
    },
    {
        "no":"6",
        "question":"월 소득대비 당신의 저축률은 어느 정도 되시나요?",
        "answer":[
            {"qa":"10% 이하","point":1},
            {"qa":"20% 이하","point":2},
            {"qa":"30% 이하","point":3},
            {"qa":"50% 이상","point":4}
          ]
    },
    {
        "no":"7",
        "question":"당신은 주로 어떤 방법으로 재테크를 하고 계신가요?",
        "answer":[
            {"qa":"예적금","point":0},
            {"qa":"주식, 펀드","point":0},
            {"qa":"MMA, CMA","point":0},
            {"qa":"채권, 선물옵션","point":0}
          ]
    }
]

String.prototype.replaceAll = function (org, dest) {
    //array fillter prototype
    return this.split(org).join(dest);
}
const Popup = {
    PopupHtml:document.getElementById('popover'),
    PopupOpen(){
        this.PopupHtml.className = 'popover'
        this.PopupRender(0)
    },
    PopupClose(){
        this.PopupHtml.className = 'popover dp_none'
        this.answerDataArray = [];
        this.QuestionIndex = 0;

    },
    QuestionIndex:0,
    UpdateTableData:[],
    answerDataArray:[],
    PopupRender(QuestionIndex){
        const Panel = document.getElementById('panel')
        let Buttons = []
        for(let i = 0; i < popupData[QuestionIndex].answer.length; i++){
            Buttons.push(`<button value='${popupData[QuestionIndex].answer[i].qa}' onclick='Popup.AnswerDataSave(this.value)'>${popupData[QuestionIndex].answer[i].qa}</button>`)
        }
        ButtonRender = Buttons.toString().replaceAll(",","")
        Panel.innerHTML = `<div>
                                <span class="st_cat step_${QuestionIndex+1}"></span>
                                <h3>${QuestionIndex+1}. ${popupData[QuestionIndex].question}</h3>
                                <div>
                                    ${ButtonRender}
                                </div>
                            </div>`
    },
    AnswerDataSave(thisValue){
        if(this.QuestionIndex < 7){

            this.answerDataArray.push(thisValue)
            this.PopupRender(this.QuestionIndex+1)
            this.QuestionIndex+=1;
        }
        else{
            this.answerDataArray.push(thisValue)
            let targetTable = returnInsert.result[0]
            UpdateSurvey(this.answerDataArray,targetTable)
        }

    },
    PrevAnswer(){
        if(this.QuestionIndex > 0){
            this.PopupRender(this.QuestionIndex-1)
            this.answerDataArray.pop();
            this.QuestionIndex-=1;

        }
    }

}
function PrivacyInsertData(mode){
    if(mode == "fast"){
        const reqName = document.getElementById('fast_name');
        const reqPhone = document.getElementById('fast_phone');
        const reqMemo = document.getElementById('fast_memo');
        const Check = document.getElementById('checkbox_1');

        if(reqName.value == ""){
            alert('성함을 입력해주세요')
        }
        else if(reqPhone.value == ""){
            alert('연락처를 입력해주세요')
        }
        else if(reqMemo.value == ""){
            alert('상담분야를 선택해주세요')
        }
        else if(Check.checked == false){
            alert('개인정보 수집 및 이용에 동의 해주세요');
        }
        else{
            getQueryString()

            data = [
                {
                    reqAd:params.id,
                    mode:mode,
                    reqName:reqName.value,
                    reqPhone:reqPhone.value,
                    reqMemo:reqMemo.value
                }
            ]
            DataInsert(data)
            // Popup.PopupOpen()
        }
    }
    else{
        const reqName = document.getElementById('reqname');
        const reqPhone = document.getElementById('reqphone');
        const reqMemo = document.getElementById('reqmemo');
        const Check = document.getElementById('checkbox_2');

        if(reqName.value == ""){
            alert('성함을 입력해주세요')
        }
        else if(reqPhone.value == ""){
            alert('연락처를 입력해주세요')
        }
        else if(reqMemo.value == ""){
            alert('상담분야를 선택해주세요')
        }
        else if(Check.checked == false){
            alert('개인정보 수집 및 이용에 동의 해주세요');
        }
        else{
            getQueryString()

            data = [
                {
                    reqAd:params.id,
                    mode:mode,
                    reqName:reqName.value,
                    reqPhone:reqPhone.value,
                    reqMemo:reqMemo.value
                }
            ]
            DataInsert(data)
        }

    }
}

function privacyView(mode){
    if(mode == 'top'){
        const Privacy = document.getElementById('privacy_top')
        Privacy.className = 'p_box'
    }
    else{
        const Privacy = document.getElementById('privacy_bottom')
        Privacy.className = 'p_box'
    }
}

function DataInsert(data){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            returnInsert = JSON.parse(this.responseText)
            if(returnInsert.phpresult == 'ok'){                
                alert('무료 재무상담 신청이 완료되었습니다. 빠른 시간 내에 전문 상담사를 배정하여 전화드릴 수 있도록 하겠습니다.')
                Popup.PopupOpen()
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

function UpdateSurvey(QaData,data){
    let Data = [
        {
            mode:"update",
            reqName:data.reqName,
            reqPhone:data.reqPhone,
            reqMemo:data.reqMemo
        },
            QaData
    ]
    UpdateInsert(Data)
}

function UpdateInsert(data){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            returnInsert = JSON.parse(this.responseText)
            if(returnInsert.phpresult == 'ok'){                
                alert('무료 재무상담 신청이 완료되었습니다. 빠른 시간 내에 전문 상담사를 배정하여 전화드릴 수 있도록 하겠습니다.')
                Popup.PopupClose() 

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
