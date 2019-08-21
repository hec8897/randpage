<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$adGet = $data->url;
$reqName = $data->insult[0];
$reqPhone = $data->insult[1];
$reqArea = $data->insult[2];
$reqJob = $data->insult[3];
$reqSexflag = $data->insult[4];



$site_code = "암보험";
$time = date('Y-m-d H:i:s');

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqSexflag,reqjob,reqPhone,reqArea,Insertdate,reqAd) 
VALUES('$site_code','$reqName','$reqSexflag','$reqJob','$reqPhone','$reqArea','$time','$adGet')";
// 
mysqli_query($conn,$sql);


$json = json_encode(
    array("datas" => $sql,"phpresult"=>'ok', "url" => $data )
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>  