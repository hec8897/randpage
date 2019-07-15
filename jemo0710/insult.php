<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");


$reqName = $_POST['reqname'];
$reqPhone = $_POST['reqphone'];
$reqArea = $_POST['reqarea'];
$reqSexflag = $_POST['reqsexflag'];


$total = "총점:".$_POST['total'];
$noAn = "부족한점:".$_POST['noAn'];
$adGet = $_POST['adget'];

$result0 = "1.직업군(".$_POST['result0'].")";
$result1 = "2.연간 총소득(".$_POST['result1'].")";
$result2 = "3.한달 생활비(".$_POST['result2'].")";
$result3 = "4.대출(".$_POST['result3'].")";
$result4 = "5.월소득대비 저축률(".$_POST['result4'].")";
$result5 = "6.비상시 생활자금(".$_POST['result5'].")";
$result6 = "7.대출 상환가능 여부(".$_POST['result6'].")";
$result7 = "8.보장성보험 유무(".$_POST['result7'].")";
$result8 = "9.급전 마련 여부(".$_POST['result8'].")";
$result9 = "10.공과금납부성실성".$_POST['result9'].")";
$result10 = "11.생활비,이자,보험료 파악여부(".$_POST['result10'].")";
$result11 = "12.제테크방법(".$_POST['result11'].")";


$reqMemo = "$result0\n$result1\n$result2\n$result3\n$result4\n$result5\n$result6\n$result7\n$result8\n$result9\n$result10\n$result11\n$total\n$noAn";
$site_code = "재무건강";
$time = date('Y-m-d H:i:s');


$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqSexflag,reqPhone,reqArea,reqMemo,Insertdate,reqAd) 
VALUES('$site_code','$reqName','$reqSexflag','$reqPhone','$reqArea','$reqMemo','$time','$adGet')";


$backsql ="INSERT INTO `tb_consult_backup` (site_code,reqName,reqPhone,reqArea,reqMemo,Insertdate) 
VALUES('$site_code','$reqName','$reqPhone'','$reqArea','$reqMemo','$time')";
mysqli_query($conn,$sql);
mysqli_query($conn,$backsql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BM Company</title>
</head>
<body>
    <script>
        alert('상담신청이 완료 되었습니다.');
        location.href='index.php';

    </script>
    
</body>
</html>