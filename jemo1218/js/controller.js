var Doc = document;


var controllerLayout = {

}

EnrollmentArray = []

function submitFn(Classification){

    var reqName = Doc.getElementById('reqname');
    var reqKey = Doc.getElementById('reqkey');
    var reqPassword = Doc.getElementById('reqpassword');
    var reqPhone = Doc.getElementById('reqphone');
    var reqSpot = Doc.getElementById('reqspot');
    var checkGene = Doc.getElementById('check-gene').checked;
    var checkCancer = Doc.getElementById('check-cancer').checked;
    var checkBaby = Doc.getElementById('check-baby').checked;
    var checkDisease = Doc.getElementById('check-disease').checked;
    var checkDementia = Doc.getElementById('check-dementia').checked;
    var checkCar = Doc.getElementById('check-car').checked;
    var Coment = Doc.getElementById('coment')
    var Resum1Year = Doc.getElementById('resum1-year');
    var Resum2Year = Doc.getElementById('resum2-year');
    var Resum3Year = Doc.getElementById('resum3-year');
    var Resum4Year = Doc.getElementById('resum4-year');
    var Resum5Year = Doc.getElementById('resum5-year');

    // var Resum1Month = Doc.getElementById('resum1-month');
    // var Resum2Month = Doc.getElementById('resum2-month');
    // var Resum3Month = Doc.getElementById('resum3-month');
    // var Resum4Month = Doc.getElementById('resum4-month');
    // var Resum5Month = Doc.getElementById('resum5-month');

    var Resum1Text = Doc.getElementById('resum1-text');
    var Resum2Text = Doc.getElementById('resum2-text');
    var Resum3Text = Doc.getElementById('resum3-text');
    var Resum4Text = Doc.getElementById('resum4-text');
    var Resum5Text = Doc.getElementById('resum5-text');

    if(Classification == 'new'){

        var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if(reqKey.value==""){
            alert('key를 입력해주세요')
            reqKey.focus();
        }
        else if (languageCheck.test(reqKey.value)) {
                 alert("ID에 한글이 포함되어 있습니다(영문 숫자 혼용 10자)");
                 reqKey.focus();
    
            } 
        if(reqName.value == ""){
            alert('이름을 입력해주세요');
            reqName.focus()
        }
     
       
        else if(reqPassword.value ==""){
            alert('패스워드를 입력해주세요');
            reqPassword.focus()
        }
        else if(reqPhone.value ==""){
            alert('전화번호를 입력해주세요')
            reqPhone.focus()
        }
        else if(reqSpot.value ==""){
            alert('직위를 입력해주세요')
            reqSpot.focus()
        }
   
        else if(Coment.value ==""){
            alert('코멘트를 입력해주세요')
            Coment.focus()
        }
        else if(Resum1Text.value ==""){
            alert('이력을 한개 이상 작성해주세요')
            Resum1Text.focus()
        }
     
        else{
            EnrollmentArray.push({
                "idx":reqKey.value,
                "name":reqName.value,
                "password":reqPassword.value,
                "reqphone":reqPhone.value,
                "spot":reqSpot.value,
                "tab1":checkGene,
                "tab2":checkCancer,
                "tab3":checkBaby,
                "tab4":checkDisease,
                "tab5":checkDementia,
                "tab6":checkCar,
                "coment":Coment.value,
                "resum1Y":`[<p>${Resum1Year.value}</p>,<p>${Resum1Text.value}</p>]`,
                "resum2":`[<p>${Resum2Year.value}</p>,<p>${Resum2Text.value}</p>]`,
                "resum3":`[<p>${Resum3Year.value}</p>,<p>${Resum3Text.value}</p>]`,
                "resum4":`[<p>${Resum4Year.value}</p>,<p>${Resum4Text.value}</p>]`,
                "resum5":`[<p>${Resum5Year.value}</p>,<p>${Resum5Text.value}</p>]`,
            })
            sessionStorage.setItem("idx", EnrollmentArray[0].idx);
            sessionStorage.setItem("name", EnrollmentArray[0].name);
            localStorage.setItem('idx', EnrollmentArray[0].idx);
            InsertDates()
        }
    }
}

function idCheck (keyString) {
    var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if(keyString.value==""){
        alert('key를 입력해주세요')
        keyString.focus();
    }
    else if (languageCheck.test(keyString.value)) {
             alert("ID에 한글이 포함되어 있습니다(영문 숫자 혼용 10자)");
             keyString.focus();

        } 
}

function InsertDates() {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            DBreturnJson = JSON.parse(this.responseText)
            if(DBreturnJson.phpresult == 'ok'){
                alert('사용 등록 신청되었습니다.')
                location.href='upload.html?id='+EnrollmentArray[0].idx
                var SubBtb = document.getElementById('submit_btn')
                SubBtb.style.display = 'none'

            }
         
        }
    }
    xhttp.open('POST', 'php/insert.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("data=" + JSON.stringify(EnrollmentArray))
}

function uploadHtml(){
    keyTag = document.getElementById('upload_reqKey');
    keyTag.value=sessionStorage.idx
    NameTag = document.getElementById('nametag')
    NameTag.innerHTML = `${sessionStorage.name}/${sessionStorage.idx}`
}