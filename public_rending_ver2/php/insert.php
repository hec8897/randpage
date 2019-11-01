<?php
include('../../conn/conn.php');
mysqli_set_charset($conn,"utf8");
$data = json_decode($_POST['data']);


$idx = $data[0]->idx;
$reqName = $data[0]->name;
$password = $data[0]->password;
$reqPhone = $data[0]->reqphone;
$spot = $data[0]->spot;
$tab1 = $data[0]->tab1;
$tab2 = $data[0]->tab2;
$tab3 = $data[0]->tab3;
$tab4 = $data[0]->tab4;
$tab5 = $data[0]->tab5;
$tab6 = $data[0]->tab6;
$coment = $data[0]->coment;
$resum1 = $data[0]->resum1;
$resum2 = $data[0]->resum2;
$resum3 = $data[0]->resum3;
$resum4 = $data[0]->resum4;
$resum5 = $data[0]->resum5;


$sql ="INSERT INTO `public_rending_data` (idx,name,password,reqphone,spot,coment,resum1,resum2,resum3,resum4,resum5,tab1,tab2,tab3,tab4,tab5,tab6) 
VALUES('$idx','$reqName','$password','$reqPhone','$spot','$coment','$resum1','$resum2','$resum3','$resum4','$resum5','$tab1'
,'$tab2','$tab3','$tab4','$tab5','$tab6')";


$conn = mysqli_query($conn,$sql);

if(isset($conn)){$phpresult = 'ok';}
else{$phpresult = 'no';}


$json = json_encode(
    array("datas" => $data, "Node1" => $sql, "phpresult"=>$phpresult)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>