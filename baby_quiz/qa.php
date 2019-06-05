<?php

$reqSexflag = $_GET['gen'];
$adGet = $_GET['id'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>BM Baby_quiz</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/event.js"></script>
</head>
<body>
    <div id='wrap'>
        <div class="qa_wrap">
            <h2><p>보험 상식 퀴즈대회</p></h2>
                <div class='qas'>
               
                </div>
            <form action="inconsult.php" id='frm' method="POST">
                <input type="hidden" id='adget' name='adget' value='<?=$adGet?>'>
                <input type="hidden" name='reqSexflag' id='qa0' value='<?=$reqSexflag?>'>
                <input type="hidden" id='qa1' name='qa1'>
                <input type="hidden" id='qa2' name='qa2'>
                <input type="hidden" id='qa3' name='qa3'>
                <input type="hidden" id='qa4' name='qa4'>
                <input type="hidden" id='qa5' name='qa5'>
                <input type="hidden" id='qa6' name='qa6'>
                <input type="hidden" id='qa7' name='qa7'>
                <input type="hidden" id='qa8' name='qa8'>

            </form>
        </div>
    </div>    
</body>
</html>