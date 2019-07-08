<?php

//DB연결
include('../conn/conn.php');
// $conn = mysqli_connect('localhost', 'bmadmins', 'bm1004^^','bmadmins'); 

mysqli_set_charset($conn,"utf8");

$reqName = $_POST['reqName'];
$reqphone = $_POST['reqPhone'];
$reqBirth = $_POST['reqBirth'];
$memo1 = $_POST['reqMemo1'];
$memo2 = $_POST['reqMemo2'];
$memo3 = $_POST['reqMemo3'];
$memo4 = $_POST['reqMemo4'];

$reqSexflag = $_POST['reqgender'];
$adGet = $_POST['adget'];
$site_code = "태아보험BM";
$time = date('Y-m-d H:i:s');


$memo = "$memo1/$memo2/$memo3/$memo4";


$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqBirth,reqMemo,Insertdate,reqSexflag,reqAd) 
VALUES('$site_code','$reqName','$reqphone','$reqBirth','$memo','$time','$reqSexflag','$adGet')";

$sql2 ="INSERT INTO `tb_consult_backup` (site_code,reqName,reqPhone,reqBirth,reqMemo,Insertdate,reqSexflag) 
VALUES('$site_code','$reqName','$reqphone','$reqBirth','$memo','$time','$reqSexflag')";

mysqli_query($conn,$sql);
mysqli_query($conn,$sql2);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
    alert("신청이 완료되었습니다!")
    history.back();
    </script>
    
</body>
</html>