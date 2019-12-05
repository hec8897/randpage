<?php
include('../../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$reqName = $data[1]->reqName;
$reqPhone = $data[1]->reqPhone;
$reqBirth = $data[1]->reqBirth;
$reqArea = $data[1]->reqArea;
$reqConsult = $data[1]->reqMemo;
$reqSexflag = $data[1]->reqSexflag;
$reqAd = $data[1]->adget;

if(isset($data[0]->TestAnsewer[7])){
    $TestAn1 = "직업군=>".$data[0]->TestAnsewer[0];
    $TestAn2 = "연간총소득=>".$data[0]->TestAnsewer[1];
    $TestAn3 = "대출정도=>".$data[0]->TestAnsewer[2];
    $TestAn4 = "두달 정도 생활비 비상금 마련=>".$data[0]->TestAnsewer[3];
    $TestAn5 = "보장성 보험 가입여부=>".$data[0]->TestAnsewer[4];
    $TestAn6 = "생활비,이자,보험료 파악 여부=>".$data[0]->TestAnsewer[5];
    $TestAn7 = "소득대비 저축률=>".$data[0]->TestAnsewer[6];
    $TestAn8 = "재테크 방법=>".$data[0]->TestAnsewer[7];
    $reqMemo = "$reqConsult\n$TestAn1\n$TestAn2\n$TestAn3\n$TestAn4\n$TestAn5\n$TestAn6\n$TestAn7\n$TestAn8";
}
else{
    $reqMemo = "$reqConsult\n테스트 미실행";
}
$site_code = '재무분석';
$time = date('Y-m-d H:i:s');


$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqArea,reqBirth,reqPhone,reqSexflag,reqMemo,Insertdate,reqAd) 
VALUES('$site_code','$reqName','$reqArea','$reqBirth','$reqPhone','$reqSexflag','$reqMemo','$time','$reqAd')";


$conn = mysqli_query($conn,$sql);
if(isset($conn)){$phpresult = 'ok';}
else{$phpresult = 'no';}

$json = json_encode(
    array("datas" => $data,"phpresult"=>$phpresult)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>