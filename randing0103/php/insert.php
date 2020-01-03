<?php
include('../../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$reqName = $data[0]->reqName;
$reqPhone = $data[0]->reqPhone;
$reqAd = $data[0]->adget;
$reqMemo = $data[0]->ReqRadio;

$site_code = '개인랜딩상담';
$time = date('Y-m-d H:i:s');    

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqMemo,Insertdate,reqAd) VALUES('$site_code','$reqName','$reqPhone','$reqMemo','$time','$reqAd')";
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