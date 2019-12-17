<?php
include('inc/conn.php');
mysqli_set_charset($conn,"utf8");
$data = json_decode($_POST['data']);
$key = $data->key;
$cflag = $data->cflag;
$reqName = $data->insult[0];
$reqPhone = $data->insult[2];
$reqBirth = $data->insult[1];
$reqSexflag = $data->insult[3];
$reqArea = $data->insult[4];
$reqMemo = $data->insult[5];

switch($reqMemo){
    case "home" :
                $reqMemo = "홈 유입";
                break;
    case "gender" :
                $reqMemo = "유전자";
                break;

    case "baby" :
                $reqMemo = "어린이 보험";
                break;

    case "cancer" :
                $reqMemo = "암 보험";
                break;

    case "disease" :
                $reqMemo = "2대 질병";
                break;

    case "dementia" :
                $reqMemo = "치매";
                break;

    case "car" :
                $reqMemo = "자동차";
                break;

}

$site_code = "상담사-".$cflag;
$time = date('Y-m-d H:i:s');
$result = 'no';

$getTeamCode = "SELECT classcode,name FROM public_rending_data INNER JOIN tb_member ON public_rending_data.user_id = tb_member.memid  COLLATE utf8_general_ci where idx = '$key';";
$GetTeamQuery = mysqli_query($conn,$getTeamCode);
$GetTeam = mysqli_fetch_assoc($GetTeamQuery);
$classcode =  $GetTeam['classcode'];
$cflag =  $GetTeam['name'];

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqSexflag,reqArea,reqPhone,reqBirth,Insertdate,classcode,cflag,reqMemo) 
VALUES('$site_code','$reqName','$reqSexflag','$reqArea','$reqPhone','$reqBirth','$time','$classcode','$cflag','$reqMemo')";
$query = mysqli_query($conn,$sql);
if(isset($query)){
    $result='ok';
}
$json = json_encode(
    array("datas" => $data,"test"=>$sql,"result"=>$result,"reqMemo"=>$reqMemo)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>  