<?php

include('../../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

    $memid = $data->checkId;
    $sql = "SELECT * FROM `public_rending_data` WHERE idx = '$memid'";
    $check =  mysqli_query($conn,$sql);     
    $row = mysqli_fetch_assoc($check);
    $check_DB =  count($row);
    if($check_DB >= 1){
        $checkIdResult = 'nagative';
    }
    else{
        $checkIdResult = 'positive';
    }
    

    
    $Login_info = json_encode(
        array("datas"=>$checkIdResult)
    );
    
    echo urldecode($Login_info);

    
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');
?>
