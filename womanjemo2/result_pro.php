<?php
include('../conn/conn.php');
// $conn = mysqli_connect('localhost', 'bmadmins', 'bm1004^^','bmadmins'); 
mysqli_set_charset($conn,"utf8");


$reqBirth = $_POST['an1'];
$reqSexflag = $_POST['an2'];
$an3 = $_POST['an3'];
$an4 = $_POST['an4'];
$an5 = $_POST['an5'];
$an6 = $_POST['an6'];
$an7 = $_POST['an7'];
$an8 = $_POST['an8'];
$an9 = $_POST['an9'];
$an10 = $_POST['an10'];

$reqName = $_POST['reqName'];
$reqArea = $_POST['reqArea'];
$reqPhone = $_POST['reqPhone'];

$url = $_POST['url'];
$adGet = $_POST['ad_get'];

$site_code = "재무심리2";
$time = date('Y-m-d H:i:s');

$memo = "$an3\n$an4\n$an5\n$an6\n$an7\n$an8\n$an9\n$an10";

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqBirth,reqArea,reqSexflag,reqMemo,Insertdate,connectflag,reqAd) 
VALUES('$site_code','$reqName','$reqPhone','$reqBirth','$reqArea','$reqSexflag','$memo','$time','$url','$adGet')";

$sql2 ="INSERT INTO `tb_consult_backup` (site_code,reqName,reqPhone,reqBirth,reqArea,reqSexflag,reqMemo,Insertdate,connectflag) 
VALUES('$site_code','$reqName','$reqPhone','$reqBirth','$reqArea','$reqSexflag','$memo','$time','$url')";

mysqli_query($conn,$sql);
mysqli_query($conn,$sql2);

if($an10 =='예적금/CMA/안전형'){
    ?>
    <script>
    alert("신청이 완료되었습니다.");
    location.href='result.php?result=A'
    </script>
    <?php
}
else if($an10 =='회사채,채권형펀드/신중형'){
    ?>
    <script>
    alert("신청이 완료되었습니다.");
    location.href='result.php?result=B'
    </script>
    <?php

}
else if($an10 =='ELS,혼합형펀드/중립형'){
    ?>
    <script>
    alert("신청이 완료되었습니다.");
    location.href='result.php?result=C'
    </script>
    <?php
}
else if($an10 =='선물옵션,주식형/투자형'){
    ?>
    <script>
    alert("신청이 완료되었습니다.");
    location.href='result.php?result=D'
    </script>
    <?php
}
else{
    echo '없음';
}
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
    
</body>
</html>