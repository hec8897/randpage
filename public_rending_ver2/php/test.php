<?php
$target_dir = "../uploads/";
$reqKey = $_POST['reqkey'];
$target_file = $target_dir . $reqKey.'-'.basename($_FILES["fileToUpload"]["name"]);
echo $target_file;

?>
