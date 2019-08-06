<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$adGet = $data->url;
$reqName = $data->insult[0];
$reqPhone = $data->insult[1];
$reqArea = $data->insult[2];
$reqBirth = $data->answer[3];
$reqSexflag = $data->answer[2];

$result1 = "직업군(".$data->answer[1].")";
$result2 = "나는 나에게 닥쳐올 수도 있는 위험에 충분한 준비가 되어있다.(".$data->answer[3].")";
$result3 = "나는 돈이 된다는 정보를 들으면 본능적으로 하고 싶다(".$data->answer[4].")";
$result4 = "나는 투자로 돈을 버는 것은 정보의 싸움이라 생각한다.(".$data->answer[5].")";
$result5 = "나는 큰일에 신경쓰고 작은 일에는 신경쓰지 않는 편이다(".$data->answer[6].")";
$result6 = "나는 새로운 일에 도전하는 것이 조심스럽다(".$data->answer[7].")";
$result7 = "나는 머릿속으로 돈을 버는 방법을 항상 생각하고 있다.(".$data->answer[8].")";
$result8 = "돈을 깨끗이 하고 정갈하게 보관해야 한다.(".$data->answer[9].")";
$result9 = "나는 큰 수익이 나는 벤처 사업에 관심이 많다(".$data->answer[10].")";
$result10 = "남들이 나를 빈틈없고 철저한 사람이라고 한다.(".$data->answer[11].")";
$result11 = "나는 돈을 벌기 위해 주식투자를 하고 있거나 할 예정이다.(".$data->answer[12].")";
$result12 = "나는 재테크 투자등을 배우고 해보고 싶다(".$data->answer[13].")";
$result13 = "나는 업그레이드 된 상품이 나오면 꼭 바꿔야만 한다.(".$data->answer[14].")";

$reqMemo = "$result1\n$result2\n$result3\n$result4\n$result5\n$result6\n$result7\n$result8\n$result9\n$result10\n$result11\n$result12\n$result13";
$site_code = "재테크성향";
$time = date('Y-m-d H:i:s');

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqSexflag,reqPhone,reqArea,reqMemo,Insertdate,reqAd) 
VALUES('$site_code','$reqName','$reqSexflag','$reqPhone','$reqArea','$reqMemo','$time','$adGet')";

mysqli_query($conn,$sql);


$json = json_encode(
    array("datas" => $data,"phpresult"=>'ok', "url" => $adGet )
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>  