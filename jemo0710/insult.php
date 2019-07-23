<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);
$test2 = gettype(json_decode($_POST['data']));



$reqName = $data->custom[0];
$reqPhone = $data->custom[1];
$reqArea = $data->custom[2];
$reqSexflag = $data->answer[0];
$reqconsult = $data->custom[3];

if($reqconsult == 'con0'){
    $consult = '원하는상담내용:전반적인 재무 상태 점검';
}
else if($reqconsult=='con1'){
    $consult = '원하는상담내용:2배 수익나는 저축팁';
}
else if($reqconsult=='con2'){
    $consult = '원하는상담내용:요즘 스타일 통장쪼개기 비법';
}
else if($reqconsult=='con3'){
    $consult = '원하는상담내용:최대 3천만원 종잣돈 쉽게 모이는 비법';
}
else if($reqconsult=='con4'){
    $consult = '원하는상담내용:소비를 반으로 줄여주는 지출관리 비법';
}
else if($reqconsult=='con5'){
    $consult = '원하는상담내용:전반적인 재무상태 점검';
}
else if($reqconsult=='con6'){
    $consult = '원하는상담내용:수익률 좋은 제테크 상품 추천';
}

$total = "총점:".$data->point;
// $noAn = "부족한점:".$data->noans;
$adGet = $data->adid;

$result0 = "1.직업군(".$data->answer[1].")";
$result1 = "2.연간 총소득(".$data->answer[2].")";
$result2 = "3.한달 생활비(".$data->answer[3].")";
$result3 = "4.대출(".$data->answer[4].")";
$result4 = "5.월소득대비 저축률(".$data->answer[5].")";
$result5 = "6.비상시 생활자금(".$data->answer[6].")";
$result6 = "7.대출 상환가능 여부(".$data->answer[7].")";
$result7 = "8.보장성보험 유무(".$data->answer[8].")";
$result8 = "9.급전 마련 여부(".$data->answer[9].")";
$result9 = "10.공과금납부성실성".$data->answer[10].")";
$result10 = "11.생활비,이자,보험료 파악여부(".$data->answer[11].")";
$result11 = "12.제테크방법(".$data->answer[12].")";


$reqMemo = "$result0\n$result1\n$result2\n$result3\n$result4\n$result5\n$result6\n$result7\n$result8\n$result9\n$result10\n$result11\n$total\n$noAn\n$consult";
$site_code = "재무건강";
$time = date('Y-m-d H:i:s');

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqSexflag,reqPhone,reqArea,reqMemo,Insertdate,reqAd) 
VALUES('$site_code','$reqName','$reqSexflag','$reqPhone','$reqArea','$reqMemo','$time','$adGet')";

// $backsql ="INSERT INTO `tb_consult_backup` (site_code,reqName,reqPhone,reqArea,reqMemo,Insertdate) 
// VALUES('$site_code','$reqName','$reqPhone'','$reqArea','$reqMemo','$time')";

mysqli_query($conn,$sql);
// mysqli_query($conn,$backsql);

$json = json_encode(
    array("datas" => $data,"total"=>$data->point,"phpresult"=>'ok')
);

echo urldecode($json);

header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');
?>
