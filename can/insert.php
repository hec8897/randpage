<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$adGet = $data->url;
$reqName = $data->insult[0];
$reqPhone = $data->insult[2];
$reqBirth = $data->insult[1];
$reqSexflag = $data->insult[3];

$site_code = "유전자";
$time = date('Y-m-d H:i:s');
$result = 'no';

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqSexflag,reqPhone,reqBirth,Insertdate,reqAd) 
VALUES('$site_code','$reqName','$reqSexflag','$reqPhone','$reqBirth','$time','$adGet')";

$query = mysqli_query($conn,$sql);
if(isset($query)){
    $result='ok';
}
    // $result='ok';


$json = json_encode(
    array("datas" => $data,"sql"=>$sql,"result"=>$result,"sql"=>$sql)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>  