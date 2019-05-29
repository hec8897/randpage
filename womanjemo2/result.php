<?php

$result = $_GET['result'];


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>richTest BM</title>
    <script>
        $(window).on('load',function(){
            var result = $("#result").val();

            if(result == 'A'){
                $('.result_box').load('result/result1.html');
            }
            else if(result =='B'){
                $('.result_box').load('result/result2.html');
            }
            else if(result =='C'){
                $('.result_box').load('result/result3.html');
            }
            else if(result =='D'){
                $('.result_box').load('result/result4.html');
            }


        })
    
    </script>
</head>
<body>
    <div id='wrap'>
        <input type="hidden" id='result' value='<?=$result?>'>
        <main class="result_main">
            <div class="main_wrap">
                    <div class="logo_area">
                        <h1><span>재</span>테<span>크</span>성향 </br><span>테</span>스트</h1>
                    </div>
                    
                    <div class="result_box">
                            
               

                    </div>
            </div> 
        </main>
     
        

    </div>    
</body>
</html>