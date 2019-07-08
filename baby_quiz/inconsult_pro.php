<?php
//DB연결
include('../conn/conn.php');
// $conn = mysqli_connect('localhost', 'bmadmins', 'bm1004^^','bmadmins'); 
mysqli_set_charset($conn,"utf8");


$reqSexflag = ($_POST['reqSexflag']=='m')?'남성':'여성';
$score = $_GET['s'];
$qa1 = ($_POST['qa1']==0)?'오답':'정답';
$qa2 = ($_POST['qa2']==0)?'오답':'정답';
$qa3 = ($_POST['qa3']==0)?'오답':'정답';
$qa4 = ($_POST['qa4']==0)?'오답':'정답';
$qa5 = ($_POST['qa5']==0)?'오답':'정답';
$qa6 = ($_POST['qa6']==0)?'오답':'정답';
$qa7 = ($_POST['qa7']==0)?'오답':'정답';
$qa8 = ($_POST['qa8']==0)?'오답':'정답';
$score = $_POST['score'];
$adGet = $_POST['adget'];

$time = date('Y-m-d H:i:s');

$reqName = $_POST['reqName'];
$reqPhone = $_POST['reqPhone'];
$reqArea = $_POST['reqArea'];

$memo = "1.$qa1\n2.$qa2\n3.$qa3\n4.$qa4\n5.$qa5\n6.$qa6\n7.$qa7\n8.$qa8\n점수:$score";


$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqArea,reqSexflag,reqMemo,Insertdate,reqAd) 
VALUES ('태보퀴즈','$reqName','$reqPhone','$reqArea','$reqSexflag','$memo','$time','$adGet')";


$sql2 ="INSERT INTO `tb_consult_backup` (site_code,reqName,reqPhone,reqArea,reqSexflag,reqMemo,Insertdate,reqAd) 
VALUES ('태보퀴즈','$reqName','$reqPhone','$reqArea','$reqSexflag','$memo','$time','$adGet')";


mysqli_query($conn,$sql);
mysqli_query($conn,$sql2);

echo "<script>
        alert('신청이 완료되었습니다.')
        location.href='result.php?s=$score'
        </script>"


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