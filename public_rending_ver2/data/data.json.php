<?php
include("../inc/conn.php");
$data = json_decode($_POST['data']);

$sql ="SELECT * FROM public_rending_data INNER JOIN tb_member ON public_rending_data.user_id = tb_member.memid COLLATE utf8_general_ci";
// $sql ="SELECT * FROM public_rending_data";



$connect = mysqli_query($conn,$sql);

$Allresult = array(); 
while($row = mysqli_fetch_array($connect)){ 
    array_push($Allresult, array(
        'memId'=>$row['memid'],
        'no'=>$row['no'],
        'idx'=>$row['idx'],
        'name'=>$row['user_name'],
        'spot'=>$row['spot'],
        'headerimg'=>$row['headerimg'],
        'headerMdimg'=>$row['headerMdimg'],
        'headerSmimg'=>$row['headerSmimg'],
        'profilephoto'=>$row['profilephoto'],
        'coment'=>$row['coment'],
        'resumY1'=>$row['resum1Y'],
        'resumY2'=>$row['resum2Y'],
        'resumY3'=>$row['resum3Y'],
        'resumY4'=>$row['resum4Y'],
        'resumY5'=>$row['resum5Y'],
        'resumD1'=>$row['resum1D'],
        'resumD2'=>$row['resum2D'],
        'resumD3'=>$row['resum3D'],
        'resumD4'=>$row['resum4D'],
        'resumD5'=>$row['resum5D'],
        'Activation'=>$row['Activation'],
        'tab1'=>$row['tab1'],
        'tab2'=>$row['tab2'],
        'tab3'=>$row['tab3'],
        'tab4'=>$row['tab4'],
        'tab5'=>$row['tab5'],
        'tab6'=>$row['tab6']


    )); 
};

$json =  json_encode(
    array("result"=>$Allresult,'sql'=>$sql
)); 
echo urldecode($json);

?>