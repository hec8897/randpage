<?php
    $conn = mysqli_connect('localhost', 'bmadmins', 'bm1004^^','bmadmins'); 
    mysqli_set_charset($conn,"utf8");

    $reqName = $_POST['reqname'];
    $reqPhone = $_POST['reqphone'];
    echo $reqName;
    echo $reqPhone;


    $reqAd = $_POST['reqad'];
    $site_code = '예신';
    $time = date('Y-m-d H:i:s');
  

    // $sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,reqMemo,Insertdate,reqAd) VALUES('$site_code','$reqName','$reqPhone','$reqMemo','$time','$reqAd')";   

    $sql ="INSERT INTO `tb_consult` (site_code,reqName,reqPhone,Insertdate,reqAd) VALUES('$site_code','$reqName','$reqPhone','$time','$reqAd')";   


    $query = mysqli_query($conn,$sql);

        ?>
        <script>
            alert('상담신청이 완료되었습니다.');
            history.back()
        </script>
        <?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>예신 울산 북구점</title>
</head>
<body>
    
</body>
</html>