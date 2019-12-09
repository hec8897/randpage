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
if(isset($data[0]->TestAnsewer[0])){
    $TestAn0 = $data[0]->TestAnsewer[0]==1?"1.CMA/MMA 라는 단어를 처음 들어봤다(네)":"1.CMA/MMA 라는 단어를 처음 들어봤다(아니요)";
    $TestAn1 = $data[0]->TestAnsewer[1]==1?"2.가계부는 단 한번도 써 본적이 없고, 앞으로도 하고 싶지 않다.(네)":"2.가계부는 단 한번도 써 본적이 없고, 앞으로도 하고 싶지 않다.(아니요)";
    $TestAn2 = $data[0]->TestAnsewer[2]==1?"3.저축성/보장성 보험은 하나도 들지 않았다.(네)":"3.저축성/보장성 보험은 하나도 들지 않았다.(아니요)";
    $TestAn3 = $data[0]->TestAnsewer[3]==1?"4.현금서비스나 카드론은 급할때 가끔 받는다.(네)":"4.현금서비스나 카드론은 급할때 가끔 받는다.(아니요)";
    $TestAn4 = $data[0]->TestAnsewer[4]==1?"5.월급이 안 들어오면 당장 다음 달 생활비가 없다.(네)":"5.월급이 안 들어오면 당장 다음 달 생활비가 없다.(아니요)";
    $TestAn5 = $data[0]->TestAnsewer[5]==1?"6.돈이 급할때 주로 가족의 도움을 받는다.(네)":"6.돈이 급할때 주로 가족의 도움을 받는다.(아니요)";
    $TestAn6 = $data[0]->TestAnsewer[6]==1?"7.한달 얼마를 지출하는지 파악이 안된다.(네)":"7.한달 얼마를 지출하는지 파악이 안된다.(아니요)";
    $TestAn7 = $data[0]->TestAnsewer[7]==1?"8. 신용카드를 3개 이상 가지고 있다.(네)":"8. 신용카드를 3개 이상 가지고 있다.(아니요)";
    $TestAn8 = $data[0]->TestAnsewer[8]==1?"9. 현재 저축하고 있는 상품의 이자율이 기억나지 않는다.(네)":"9. 현재 저축하고 있는 상품의 이자율이 기억나지 않는다.(아니요)";
    $TestAn9 = $data[0]->TestAnsewer[9]==1?"10.은퇴후 어떻게 살아야 할지 구체적인 계획이 없다.(네)":"10.은퇴후 어떻게 살아야 할지 구체적인 계획이 없다.(아니요)";
    $reqMemo = "$reqConsult\n$TestAn0\n$TestAn1\n$TestAn2\n$TestAn3\n$TestAn4\n$TestAn5\n$TestAn6\n$TestAn7\n$TestAn8\n$TestAn9";
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