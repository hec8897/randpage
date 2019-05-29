<?php

$adGet = $_GET['id'];
$Url = $_GET['url'];

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
    $(document).ready(function(){
        function btnClick(a){            
            $(".list_view li").css({
                "background-color":"white"
            })
            $(".list_view li:nth-child("+a+")").css({
                "background-color":"#f7a8a9"
            })
        }

        $('.qa_box').load('qa/answer1.html');
        $(".list_view li:nth-child(1)").css({
                "background-color":"#f7a8a9"
            })

        $(document).on('click','#an101',function(){
            $('.qa_box').load('qa/answer2.html');
            $("#input1").val('20대');
            btnClick(2)

        })
        $(document).on('click','#an102',function(){
            $('.qa_box').load('qa/answer2.html');
            $("#input1").val('30대');
            btnClick(2)

            
        })
        $(document).on('click','#an103',function(){
            $('.qa_box').load('qa/answer2.html');
            $("#input1").val('40대');
            btnClick(2)

        })
        $(document).on('click','#an104',function(){
            $('.qa_box').load('qa/answer2.html');   
            $("#input1").val('50대');
            btnClick(2)
        })

        $(document).on('click','#an201',function(){
            $('.qa_box').load('qa/answer3.html');
            $("#input2").val('남성');
            btnClick(3)

        })
        $(document).on('click','#an202',function(){
            $('.qa_box').load('qa/answer3.html');
            $("#input2").val('여성');
            btnClick(3)

        })

        $(document).on('click','#an301',function(){
            $('.qa_box').load('qa/answer4.html');
            $("#input3").val('돈관리가 깨끗함');
            btnClick(4)

        })
        $(document).on('click','#an302',function(){
            $('.qa_box').load('qa/answer4.html');
            $("#input3").val('돈관리가 깨끗하지 않음');
            btnClick(4)

        })

        $(document).on('click','#an401',function(){
            $('.qa_box').load('qa/answer5.html');
            $("#input4").val('돈 많아야함');
            btnClick(5)

        })
        $(document).on('click','#an402',function(){
            $('.qa_box').load('qa/answer5.html');
            $("#input4").val('돈 많치않아도됨');
            btnClick(5)

        })

        $(document).on('click','#an501',function(){
            $('.qa_box').load('qa/answer6.html');
            $("#input5").val('CMA,MMF 경험있음');
            btnClick(6)

        })
        $(document).on('click','#an502',function(){
            $('.qa_box').load('qa/answer6.html');
            $("#input5").val('CMA,MMF 경험없음');
            btnClick(6)

        })


        $(document).on('click','#an601',function(){
            $('.qa_box').load('qa/answer7.html');
            $("#input6").val('5%이내 저축');
            btnClick(7)

        })
        $(document).on('click','#an602',function(){
            $('.qa_box').load('qa/answer7.html');
            $("#input6").val('10%이내 저축');
            btnClick(7)

        })
        $(document).on('click','#an603',function(){
            $('.qa_box').load('qa/answer7.html');
            $("#input6").val('20%이내 저축');
            btnClick(7)

        })
        $(document).on('click','#an604',function(){
            $('.qa_box').load('qa/answer7.html');
            $("#input6").val('30%이내 저축');
        })

        $(document).on('click','#an701',function(){
            $('.qa_box').load('qa/answer8.html');
            $("#input7").val('1년 투자');
            btnClick(8)

        })
        $(document).on('click','#an702',function(){
            $('.qa_box').load('qa/answer8.html');
            $("#input7").val('3년 투자');
            btnClick(8)

        })        
        $(document).on('click','#an703',function(){
            $('.qa_box').load('qa/answer8.html');
            $("#input7").val('5년 투자');
            btnClick(8)

        })
        $(document).on('click','#an704',function(){
            $('.qa_box').load('qa/answer8.html');
            $("#input7").val('10년 투자');
            btnClick(8)

        })

        $(document).on('click','#an801',function(){
            $('.qa_box').load('qa/answer9.html');
            $("#input8").val('투자 위험도를 암');
            btnClick(9)

        })
        $(document).on('click','#an802',function(){
            $('.qa_box').load('qa/answer9.html');
            $("#input8").val('투자 위험도를 모름');
            btnClick(9)

        })      

        $(document).on('click','#an901',function(){
            $('.qa_box').load('qa/answer10.html');
            $("#input9").val('통장 쪼개기하는중');
            btnClick(10)


        })
        $(document).on('click','#an902',function(){
            $('.qa_box').load('qa/answer10.html');
            $("#input9").val('통장 쪼개기를 하지않음');
            btnClick(10)

        })      

        var frm = $('#frm')

        $(document).on('click','#an001',function(){
            $("#input10").val('예적금/CMA/안전형');
            // location.href='inconsult.html'
            frm.submit()
        })
        $(document).on('click','#an002',function(){
            $("#input10").val('회사채,채권형펀드/신중형');
            frm.submit()

        })     
        $(document).on('click','#an003',function(){
            $("#input10").val('ELS,혼합형펀드/중립형');
            frm.submit()

        })      
        $(document).on('click','#an004',function(){
            $("#input10").val('선물옵션,주식형/투자형');
            frm.submit()

        })      

 




 
    })
    </script>
</head>
<body>
    <div id='wrap'>
        <main class="qa_main">
            <div class="main_wrap">
                    <div class="logo_area">
                        <h1><span>재</span>테<span>크</span>성향 </br><span>테</span>스트</h1>
                    </div>
                    <ul class="list_view">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <div class="qa_box">
               

                    </div>

                    <form action="inconsult.php" id='frm' method="POST">
                    <input type="hidden" id='input1' name='an1'>
                    <input type="hidden" id='input2' name='an2'>
                    <input type="hidden" id='input3' name='an3'>
                    <input type="hidden" id='input4' name='an4'>
                    <input type="hidden" id='input5' name='an5'>
                    <input type="hidden" id='input6' name='an6'>
                    <input type="hidden" id='input7' name='an7'>
                    <input type="hidden" id='input8' name='an8'>
                    <input type="hidden" id='input9' name='an9'>
                    <input type="hidden" id='input10' name='an10'>
                    <input type="hidden" name='url' value='<?=$Url?>'>
                    <input type="hidden" name='ad_get' value='<?=$adGet?>'>

                    </form>



            </div> 
        </main>
        

    </div>    
</body>
</html>