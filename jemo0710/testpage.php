<?php
$AdGet = $_GET['id'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="testpage_wrap">
        <h1 class='testpage_h1'></h1>
        <div class='test-wrap'>
            <h2 class='testpage-h2'>[Data:문제제목]</h2>
            <p class='noanswer'></p>
            <ul class='qas'>
            </ul>
            <div class='front_ans' onclick="frontFn()">
            </div>
        </div>
        <footer></footer>
    </div>
    <script>
        var state = {
            questions:[
                {id:0,point:0,qa:"당신의 직업군은?",an1:['개인사업/자영업',0],an2:['직장인 근로소득자',0],an3:['전문직',0],an4:['프리랜서',0],cateId:null,howAn:4,cate:0},
                {id:1,point:0,qa:"당신의 연간 총소득은 얼마인가요?",an1:['1천만원~3천만원',4],an2:['3천만원~6천만원',6],an3:['6천만원~9천만원',8],an4:['1억이상',10],cateId:null,howAn:4,cate:0},
                {id:2,point:0,qa:"당신의 한 달 생활비는 얼마인가요?",an1:['50만원 내외',10],an2:['100만원 내외',8],an3:['300만원 내외',6],an4:['500만원 이상',4],cateId:'지출관리',howAn:4,cate:1},
                {id:3,point:0,qa:"당신은 얼마 정도 대출을 받고 있나요?",an1:['1천만원 이하',10],an2:['3천만원 이하',8],an3:['5천만원 이하',6],an4:['1억이상',4],cateId:null,howAn:4,cate:0},
                {id:4,point:0,qa:"당신의 월 소득대비 저축률은</br> 어느 정도 되시나요?",an1:['10% 이하',4],an2:['30% 이하',6],an3:['50% 이하',8],an4:['70% 이상',10],cateId:'저축관리',howAn:4,cate:1},
                {id:5,point:0,qa:"비상시를 대비하여 통장에 </br>두 달 생활비 정도의 자금이 있나요?",an1:['네 있습니다!',10],an2:['아니요 없어요ㅠ',4],an3:null,an4:null,cateId:null,howAn:2,cate:0},
                {id:6,point:0,qa:"대출을 했다면 당신은 계획대로 </br>모두 상환할 수 있나요?",an1:['네 가능해요!',10],an2:['힘들 것 같아요ㅠ',4],an3:null,an4:null,cateId:'대출관리',howAn:2,cate:1},
                {id:7,point:0,qa:"당신은 갑작스러운 질병, 상해, 사고, </br>사망 등에 대비해 보장성보험에 </br>가입하고 계신가요?",an1:['네 있습니다',10],an2:['아니요 없습니다..',4],an3:null,an4:null,cateId:'보험관리',howAn:2,cate:1},
                {id:8,point:0,qa:"뜻하지 않게 300만원이 급히 필요하다면 </br>바로 마련하실 수 있나요?",an1:['네 물론이죠',10],an2:['힘들 것 같아요..',4],an3:null,an4:null,cateId:null,howAn:2,cate:0},
                {id:9,point:0,qa:"당신은 평소 공과금이나 납부고지서를 </br>제때 납부하십니까?",an1:['네 물론이죠',10],an2:['안그럴때도 있어요..',4],an3:null,an4:null,cateId:null,howAn:2,cate:0},
                {id:10,point:0,qa:"매월 정기적으로 발생되는 생활비,</br> 이자, 보험료 등이 얼마인지 </br>어렵지 않게 말할 수 있나요?",an1:['네 알고 있습니다.',10],an2:['아니요 잘...',4],an3:null,an4:null,cateId:null,howAn:2,cate:0},
                {id:11,point:0,qa:"당신은 어떤 방법으로 </br>재테크를 하고 계신가요?",an1:['예적금',0],an2:['주식 or 펀드',0],an3:['채권',0],an4:['선물 옵션',0],cateId:null,howAn:4,cate:0},
                {id:12,qa:null}
                ],
            resultText:[
                {id:0,point:0,FrontTexts:`당신의 재무건강은 전문 재무설계사의 도움이 절실하게 필요한 <b>'아주 나쁨'</b>단계입니다. 특히`,backTexts:`분야는 취약한 상태입니다. 그러나 이른 절망은 금물~ 지금이라도 소비,저축,재무목표 설정에 이르기까지 전문가의 도움을 받아 재무 기초체력을 길러보세요. 국내 최고 재무 전문가가 도와드립니다.`},
                {id:1,point:30,FrontTexts:`당신의 재무건강은 <b>허약한 단계</b>로 투자보다는 돈 관리 습관을 바로 잡는 것이 시급합니다. 특히`,backTexts:`분야는 취약한 상태로 나타나므로 지금이라도 소비, 저축, 지출, 재무목표 설정에 이르기까지 전문가의 도움을 받아 보세요. 국내 최고 재무 전문가가 도와 드립니다.`},
                {id:2,point:50,FrontTexts:`당신의 재무건강은 <b>건강한 편</b>입니다. 평소 재무관리에 관심이 많고 돈을 모으고 싶은 욕구가 강합니다. 그러나`,backTexts:`분야에서는 다소 약한 상태입니다. 부족한 분야의 금융지식을 늘리고, 더욱 탄탄한 재무관리를 시작해보세요. 전문가의 도움이 필요하시다면 무료 재무진단 서비스를 지금 바로 신청하세요!` },
                {id:3,point:80,FrontTexts:`당신의 재무건강은 <b>매우 튼튼합니다.</b> 재무와 재테크에 대한 관심이 많고 자신만의 재무 원칙을 따라 올바르게 잘 실천하고 계십니다. 다만`,backTexts:`분야에서는 다소 취약한 면도 있으니 주의가 필요합니다. 재테크 방법 이나 돈을 더욱 효과적으로 모을 수 있는 방법이 궁금하다면 재무 전문가의 무료 진단 서비스를 지금 바로 신청하세요.`},
                {id:4,point:100,FrontTexts:`당신의 재무건강은 <b>완벽합니다.</b> 재무와 재테크에 대한 관심이 많고 자신만의 재무 원칙을 따라 올바르게 잘 실천하고 계십니다.`, backTexts:`재테크 방법 이나 돈을 더욱 효과 적으로 모을 수 있는 방법이 궁금하다면 재무 전문가의 무료 진단 서비스를 지금 바로 신청하세요.`},                
                ]
            }

        var qasArray = [];
        let lists = [];
        let Ancode;
        let noAnswer=[]; 
        let result = []; 
        let TotalPoint=0;
        
        let qaReturn = function(){
            qas = state.questions;
            var i = 0;
            while(i<=state.questions.length-1){
                qasArray.push(qas[i])
                i=i+1;
            }
        }()
        //anReturn(문제아이디,문제점수)
        function submitFn(){
                         var reqName = document.querySelector('#reqname').value;
                         var reqPhone = document.querySelector('#reqphone').value;
                         var reqsexflag = document.querySelector('#gender').value;
                         var reqArea = document.querySelector('#reqarea').value;
                        if(reqName == ''){
                             alert("성함을 입력해주세요")
                        }
                        else if(reqsexflag==''){
                            alert("성별을 선택해주세요")

                        }
                        else if(reqPhone == ''){
                            alert("전화번호를 입력해주세요")
                        }
                        else if(reqArea ==''){
                            alert("지역을 입력해주세요")
                        }
                        else if(reqArea ==''){
                            alert("지역을 입력해주세요")
                        }
                        else{
                        frm.submit()
                        }
                     }
        let anReturn = function(a,b,c,d){
                Ancode = a;
                thisPoint = b;
                    if(c!=undefined){
                            result.push(c);
                        }
                    if(Ancode >= 12){
                    if(TotalPoint < 60){
                        var TotalPointCode = 0;
                    }
                    else if(TotalPoint <70){
                        var TotalPointCode = 1;
                    }
                    else if(TotalPoint <80){
                        var TotalPointCode = 2;
                    }
                    else if(TotalPoint < 88){
                        var TotalPointCode = 3;
                    }
                    else if(TotalPoint<=100){
                        var TotalPointCode = 4;
                    }
                    if(noAnswer!=undefined){
                        // noAnswer='';
                    }
                    document.querySelector('.test-wrap').innerHTML=
                `<div class='inputs_page_wrap'>
                    <h2 class='total-point'>${TotalPoint}점</h2>
                    <p class='noanswer'>${state.resultText[TotalPointCode].FrontTexts} <span>${noAnswer}</span> ${state.resultText[TotalPointCode].backTexts}<p>
                     <form method='POST' action='insult.php' id='frm'>
                        <ul class='inputs'>
                        <h3>상담신청</h3>
                            <li>
                            <div class='name-gender'>
                            <span>성함</span>
                            <input id='reqname' type='text' name='reqname'  placeholder="이름을 입력해주세요" autocomplete="off">
                            </div>
                            </li>
                            <li>
                            <span>성별</span><select id='gender' name='reqsexflag'><option value=''>성별</option><option value='남성'>남</option><option value='여성'>여</option></select>
                            </li>
                            <li><span>전화번호</span>
                                <input id='reqphone' type='number' name='reqphone'  placeholder="연락처를 입력해주세요" autocomplete="off">
                                </li>
                            <li><span>지역</span>
                                <select id='reqarea' name='reqarea'>
                                    <option value=''>지역을선택해주세요</option>
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
                                    </select></li>
                            <li class='sub_btn' onclick='submitFn()' id='submit'>신청하기</li>
                        </ul>

                        <input type='hidden' name='result0' value='${result[0]}'> 
                        <input type='hidden' name='result1' value='${result[1]}'> 
                        <input type='hidden' name='result2' value='${result[2]}'> 
                        <input type='hidden' name='result3' value='${result[3]}'> 
                        <input type='hidden' name='result4' value='${result[4]}'> 
                        <input type='hidden' name='result5' value='${result[5]}'> 
                        <input type='hidden' name='result6' value='${result[6]}'> 
                        <input type='hidden' name='result7' value='${result[7]}'> 
                        <input type='hidden' name='result8' value='${result[8]}'> 
                        <input type='hidden' name='result9' value='${result[9]}'> 
                        <input type='hidden' name='result10' value='${result[10]}'> 
                        <input type='hidden' name='result11' value='${result[11]}'> 
                        <input type='hidden' name='total' value='${TotalPoint}'>
                        <input type='hidden' name='noAn' value='${noAnswer}'> 
                        <input type='hidden' name='adget' value='<?=$AdGet?>'>
                     </form>
                     </div>`;
                    }

                    //결과 페이지 랜더
                else if(Ancode <=12){
                    if(qas[a].qa!=undefined){
                    document.querySelector('.testpage-h2').innerHTML=`${qas[a].qa}`;
                    }
                    //문제 제목 출력
                    if(isNaN(b)==false){
                        TotalPoint += b;
                    }
                    _listAn = Object.values(state.questions[a]);

                    ansReturn()
                    
                    if(d==1){
                    if(b==4){
                        noAnswer.push(qas[Ancode-1].cateId)
                        }
                    }
                }
                if(Ancode>0 && Ancode <12){
                    document.querySelector('.front_ans').innerHTML='이전문제';
                    //이전문제 버튼
                }
                if(Ancode===0){
                    document.querySelector('.front_ans').innerHTML=' ';
                    //이전문제 버튼
                }
                // console.log(TotalPoint);
                return Ancode,TotalPoint,thisPoint;
            }   
            anReturn(0)//최초 랜딩시 실행

            function frontFn(){
                //이전문제 랜딩
                result.splice(-1,1);//전체 결과 마지막 배열 삭제
                if(qas[Ancode-1].cateId === String(noAnswer[noAnswer.length-1])){
                    noAnswer.splice(-1,1);
                }
                if(thisPoint!=undefined){
                    TotalPoint -= thisPoint;
                }
                //포인트 이전 으로 돌리기
                anReturn(Ancode-1);
                //이전 문제 랜딩
            }
        function ansReturn(){
                //디음 문제 랜딩
                if(Ancode!=0){
                var cate = qas[Ancode].cate;
                }
                if(qas[Ancode].howAn === 4){
                    // var test = String(_listAn[3][1])
                    lists = `<li id='${_listAn[3][0]}' onclick='anReturn(${_listAn[0]+1},${_listAn[3][1]},this.id,${cate})'>${_listAn[3][0]}</li>
                             <li id='${_listAn[4][0]}' onclick='anReturn(${_listAn[0]+1},${_listAn[4][1]},this.id,${cate})'>${_listAn[4][0]}</li>
                             <li id='${_listAn[5][0]}' onclick='anReturn(${_listAn[0]+1},${_listAn[5][1]},this.id,${cate})'>${_listAn[5][0]}</li>
                             <li id='${_listAn[6][0]}' onclick='anReturn(${_listAn[0]+1},${_listAn[6][1]},this.id,${cate})'>${_listAn[6][0]}</li>`;
                            //답 4개
                }
                if(qas[Ancode].howAn === 2){
                    lists = `<li id='${_listAn[3][0]}' class='block_list' onclick='anReturn(${_listAn[0]+1},${_listAn[3][1]},this.id,${_listAn[9]})'>${_listAn[3][0]}</li>
                            <li id='${_listAn[4][0]}' class='block_list' onclick='anReturn(${_listAn[0]+1},${_listAn[4][1]},this.id,${_listAn[9]})'>${_listAn[4][0]}</li>`;
                            //답 두개
                }
                    document.querySelector('.qas').innerHTML=`${lists}`;
            }
    </script>
    
</body>
</html>