<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <!-- Facebook Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '143615209554476');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=143615209554476&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->
        <title>Document</title>
    </head>
<body>
    <div id="wrap">
        <ul class="bg">
            <li class="bg3">
                <h1></h1>
            </li>
            <li class="bg2">
                <h1></h1>
            </li>
            <li class="bg1">
                <h1></h1>
            </li>
        </ul>
        <div class="btns">
            <div class="btn btn_left"></div>
            <div class="btn btn_right"></div>

        </div>
        <div class="texts">
            <p>테스트를 모두 완료하신 분께는</p>
            <p>빽다방 커피 쿠폰과 20만원 상당의 재무심리 분석자료를 보내드립니다.</p>
        </div>


    </div>    

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>

        var refer = document.referrer;
        console.log(refer);

        $(".btn_left").click(function(){
            location.href= "qa.php?tran=m&url="+refer;
        })
        $(".btn_right").click(function(){
            location.href= "qa.php?tran=w&url="+refer;
        })

        $(window).on("load",function(){
            var i = 0;
            setInterval(
                function(){
                    i++;
                    $(".bg li:nth-last-child("+i+")").fadeOut(1500);
                    if(i==3){
                        $(".bg li").fadeIn(1500);
                            return i = 0;
                    }       
                    
                },5000
            );
        })
    
    </script>
</body>
</html>