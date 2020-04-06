getQueryString = function getQueryString() {
    params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
      params[key] = value;
    });
    return params;
  };
  
  getQueryString();
  
  function InsertDataFn() {
    var ReqName = document.getElementById('reqname');
    var ReqPhone = document.getElementById('reqphone');
    var ReqRadio1 = document.getElementById('radio_1');
    var ReqRadio2 = document.getElementById('radio_2');
    var ReqRadio3 = document.getElementById('radio_3');
    var checkbox = document.getElementById('checkbox_1');
    var RadioValue;
  
    if (checkbox.checked == false) {
      alert('개인정보수집 및 이용에 동의해주세요');
    } else if (ReqName.value == "") {
      alert('성함을 입력해주세요');
    } else if (ReqPhone.value == "") {
      alert('연락처를 입력해주세요');
    }  else if (ReqRadio1.checked == true) {
      RadioValue = "1. 개인 홈페이지 제작(30만원)";
    } else if (ReqRadio2.checked == true) {
      RadioValue = "2. 온라인 마케팅 3주교육(30만원)";
    } 
    else if (ReqRadio3.checked == true) {
      RadioValue = "3. 개인 홈페이지 + 마케팅 3주교육(40만원)";
    }
    else {
      InsertdataArray = [{
        adget: params.id,
        Idkey: params.idkey,
        reqName: ReqName.value,
        reqPhone: ReqPhone.value,
        ReqRadio: RadioValue
      }];
    }
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
    dataInsert: function dataInsert() {
      var ReqName = document.getElementById('reqname');
      var ReqPhone = document.getElementById('reqphone');
      var ReqRadio1 = document.getElementById('radio_1');
      var ReqRadio2 = document.getElementById('radio_2');
      var ReqRadio3 = document.getElementById('radio_3');

      var checkbox = document.getElementById('checkbox_1');
      var RadioValue = "";
  
      if (ReqRadio1.checked == true) {
        RadioValue = "1-랜딩페이지 제작(30만원)";
      } else if (ReqRadio2.checked == true) {
        RadioValue = "2-FC맞춤 온라인 마케팅 교육(50만원)";
      }
      else if (ReqRadio3.checked == true) {
        RadioValue = "3. 개인 홈페이지 + 마케팅 3주교육(40만원)";
      }
  
      if (checkbox.checked == false) {
        alert('개인정보수집 및 이용에 동의해주세요');
      } else if (ReqName.value == "") {
        alert('성함을 입력해주세요');
      } else if (ReqPhone.value == "") {
        alert('연락처를 입력해주세요');
      } else if (RadioValue == "") {
        alert('원하시는 상담을 선택해 주세요');
      } else {
        var insert = confirm('입력하신 정보로 상담신청 하시겠습니까?');
  
        if (insert == true) {
          data = [{
            adget: params.id,
            Idkey: params.idkey,
            reqName: ReqName.value,
            reqPhone: ReqPhone.value,
            ReqRadio: RadioValue
          }];
          var xhttp = new XMLHttpRequest();
  
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              var returnInsert = JSON.parse(this.responseText);
  
              if (returnInsert.phpresult == 'ok') {
                alert('상담신청이 완료되었습니다:) 빠른시일내에 연락드리겠습니다'); // location.reload()
              } else {
                alert('상담신청 실패 관리자에게 문의해주세요');
              }
            }
          };
  
          xhttp.open('POST', 'php/insert.php', true);
          xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhttp.send("data=" + JSON.stringify(data));
        }
      }
    }
  };