<?php

//DB연결
include('../conn/conn.php');
// $conn = mysqli_connect('localhost', 'bmadmins', 'bm1004^^','bmadmins'); 
//실 서버
// $conn = mysqli_connect('localhost', 'root', 'bm12#$','BmDb');
//개발 서버
mysqli_set_charset($conn,"utf8");

$sexflag = $_POST['reqSexflag'];
$url = $_POST['url'];
$adGet = $_POST['adget'];
$qa0 =$_POST['reqqa0'];
$qa1 =$_POST['reqqa1'];
$qa2 =$_POST['reqqa2'];
$qa3 =$_POST['reqqa3'];
$qa4 =$_POST['reqqa4'];
$qa5 =$_POST['reqqa5'];
$qa6 =$_POST['reqqa6'];
$qa7 =$_POST['reqqa7'];
$qa8 =$_POST['reqqa8'];
$qa9 =$_POST['reqqa9'];
$qa10 =$_POST['reqqa10'];

$reqName = $_POST['reqname'];
$reqphone = $_POST['reqphone'];
$reqArea = $_POST['reqArea'];

$phone = "'".$reqphone."'";



$dir_reqName = $_POST['dir_reqname'];
$dir_reqphone = $_POST['dir_reqphone'];

$dir_phone = "'".$dir_reqphone."'";
$site_code = "재무심리";
$time = date('Y-m-d H:i:s');
$memo = "1.$qa1\n2.$qa2\n3.$qa3\n4.$qa4\n5.$qa5\n6.$qa6\n7.$qa7\n8.$qa8\n9.$qa9\n10.$qa10";

if(isset($dir_reqName)){
    $sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,Insertdate,connectflag,reqAd) 
    VALUES('$site_code','$dir_reqName','$dir_phone','$time','$url','$adGet')";
    $sql2 ="INSERT INTO `tb_consult_backup` (site_code,reqName,reqPhone,Insertdate,connectflag) 
    VALUES('$site_code','$dir_reqName','$dir_phone','$time','$url')";
}
else{
    $sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqBirth,reqArea,reqSexflag,reqMemo,Insertdate,connectflag,reqAd) 
    VALUES('$site_code','$reqName','$reqphone','$qa0','$reqArea','$sexflag','$memo','$time','$url','$adGet')";
     $sql2 ="INSERT INTO `tb_consult_backup` (site_code,reqName,reqPhone,reqBirth,reqArea,reqSexflag,reqMemo,Insertdate,connectflag) 
     VALUES('$site_code','$reqName','$reqphone','$qa0','$reqArea','$sexflag','$memo','$time','$url')";
}
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
    <input type="hidden" value="<?=$qa10?>" id="get_qa">
    <script>
        var getUrl = document.getElementById("get_qa").value;
        if(getUrl == ""){
            location.href="index.php";
        }
        else{
            location.href="result.php?id="+getUrl;
        }
        

    </script>
    
</body>
</html>