<?php

//DB연결
include('../conn/conn.php');
// $conn = mysqli_connect('localhost', 'bmadmins', 'bm1004^^','bmadmins'); 

mysqli_set_charset($conn,"utf8");

$reqName = $_POST['reqName'];
$reqphone = $_POST['reqPhone'];
$reqBirth = $_POST['reqBirth'];
$memo = $_POST['reqMemo'];

$site_code = "태아보험랜딩(모두네임)";
$time = date('Y-m-d H:i:s');

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqBirth,reqMemo,Insertdate) 
VALUES('$site_code','$reqName','$reqphone','$reqBirth','$memo','$time')";

$sql2 ="INSERT INTO `tb_consult_backup` (site_code,reqName,reqPhone,reqBirth,reqMemo,Insertdate) 
VALUES('$site_code','$reqName','$reqphone','$reqBirth','$memo','$time')";

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