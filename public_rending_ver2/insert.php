<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$cflag = $data->cflag;
$reqName = $data->insult[0];
$reqPhone = $data->insult[2];
$reqBirth = $data->insult[1];
$reqSexflag = $data->insult[3];

$site_code = "상담사/".$cflag;
$time = date('Y-m-d H:i:s');
$result = 'no';
$classcode ='BM_챔프';

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqSexflag,reqPhone,reqBirth,Insertdate,classcode,cflag) 
VALUES('$site_code','$reqName','$reqSexflag','$reqPhone','$reqBirth','$time','$classcode','$cflag')";

$query = mysqli_query($conn,$sql);

if(isset($query)){
    $result='ok';
}

$json = json_encode(
    array("datas" => $data,"sql"=>$sql,"result"=>$result,"sql"=>$site_code)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>  