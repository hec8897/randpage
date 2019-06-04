<?php

$reqSexflag = $_POST['reqSexflag'];
$score = $_GET['s'];
$qa1 = $_POST['qa1'];
$qa2 = $_POST['qa2'];
$qa3 = $_POST['qa3'];
$qa4 = $_POST['qa4'];
$qa5 = $_POST['qa5'];
$qa6 = $_POST['qa6'];
$qa7 = $_POST['qa7'];
$qa8 = $_POST['qa8'];
$score = $_POST['score'];

echo "<script>
        location.href='result.php?s=$score'
        </script>"


?>