<?php
include('../../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$site_code = '재무분석';
$time = date('Y-m-d H:i:s');

$reqAd = $data[0]->reqAd;
$reqName = $data[0]->reqName;
$mode = $data[0]->mode;
$reqPhone = $data[0]->reqPhone;
$reqMemo = $data[0]->reqMemo;

if($mode == "update"){
    $TestAn1 = "직업군=>".$data[1][0];;
    $TestAn2 = "연간총소득=>".$data[1][1];
    $TestAn3 = "대출정도=>".$data[1][2];
    $TestAn4 = "두달 정도 생활비 비상금 마련=>".$data[1][3];
    $TestAn5 = "보장성 보험 가입여부=>".$data[1][4];
    $TestAn6 = "생활비,이자,보험료 파악 여부=>".$data[1][5];
    $TestAn7 = "소득대비 저축률=>".$data[1][6];
    $TestAn8 = "재테크 방법=>".$data[1][7];
    $reqSexflag= $data[1][8];
    $reqBirth = $data[1][9];
    $reqMemoss = "$reqMemo\n$TestAn1\n$TestAn2\n$TestAn3\n$TestAn4\n$TestAn5\n$TestAn6\n$TestAn7\n$TestAn8";
}
else{
    $reqMemoss = "$reqMemo\n테스트 미실행";
}

if($mode == "fast"){
    $reqMemos = "빠른입력\n".$reqMemo;
    $sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqMemo,Insertdate,reqAd) 
    VALUES('$site_code','$reqName','$reqPhone','$reqMemos','$time','$reqAd')";
}
else if($mode == "normal"){
    $reqMemos = "하단입력\n".$reqMemo;
    $sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqMemo,Insertdate,reqAd) 
    VALUES('$site_code','$reqName','$reqPhone','$reqMemos','$time','$reqAd')";
}
else if($mode == "update"){
    $sql = "UPDATE `tb_consult` SET `reqSexflag`='$reqSexflag', `reqBirth`='$reqBirth', `reqMemo` = '$reqMemoss ' WHERE `reqPhone` = '$reqPhone' AND `reqName`= '$reqName'";
}

$conn = mysqli_query($conn,$sql);


if(isset($conn)){$phpresult = 'ok';}
else{$phpresult = 'no';}

$json = json_encode(
    array("phpresult"=>"$phpresult","result"=>$data,"testd"=>$reqAd)
    // array("phpresult"=>$phpresult,"result"=>$data,"testd"=>$sql)

);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>