<?php

$sexflag = $_GET['tran'];
$url = $_GET['url'];

if($sexflag == 'm'){
    $reqsexflag = "M";
}
else{
    $reqsexflag = "F";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Facebook Pixel Code -->
    <script>
    ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '143615209554476');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=143615209554476&ev=PageView&noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->
    <title>RichTest Bm company</title>

</head>


<body>
    <div id="wrap">
        <div class="qa">
            <div class="qa_wrap">

                <form action="inconsult.php" method="POST" id="frm">
                    <div class="inputs">
                        <input type="hidden" id="reqSexflag" value="<?=$reqsexflag?>" name="reqSexflag">
                        <input type="hidden" id="requrl" value="<?=$url?>" name="url">

                        <input type="hidden" id="qa0input" value="" name="reqqa0">
                        <input type="hidden" id="qa1input" value="" name="reqqa1">
                        <input type="hidden" id="qa2input" value="" name="reqqa2">
                        <input type="hidden" id="qa3input" value="" name="reqqa3">
                        <input type="hidden" id="qa4input" value="" name="reqqa4">
                        <input type="hidden" id="qa5input" value="" name="reqqa5">
                        <input type="hidden" id="qa6input" value="" name="reqqa6">
                        <input type="hidden" id="qa7input" value="" name="reqqa7">
                        <input type="hidden" id="qa8input" value="" name="reqqa8">
                        <input type="hidden" id="qa9input" value="" name="reqqa9">
                        <input type="hidden" id="qa10input" value="" name="reqqa10">
                    </div>
                </form>

                <div class="qna">

                    <div class="qu">
                        <h1 name="qa1">Q.연령대를 선택해 주세요</h1>
                    </div>

                    <div class="btnss">
                        <div class="Qa q0 q20b" id="qa20"></div>
                        <div class="Qa q0 q30b" id="qa30"></div>
                        <div class="Qa q0 q40b" id="qa40"></div>
                        <div class="Qa q0 q50b" id="qa50"></div>
                    </div>

                </div>
            </div>
        </div>

        <div class="bot_bar">
            <div class="bar_wrap">
                <form action="qa_pro.php" method="POST">
                    <input type="hidden" id="requrl" value="<?=$url?>" name="url">

                    <h3>TEST없이 바로 신청하기</h3>
                    <div class="inputs">
                        <input type="text" name="dir_reqname" class="name" placeholder="이름" autocomplete="off">

                      
                        <input type="text" name="dir_reqphone" class="phone" placeholder="전화번호" autocomplete="off">



                        <input type="submit" class="submit_btn" value="">
                    </div>
                </form>
            </div>
        </div>
        <script>
        $(document).ready(function() {


            $(".submit_btn").click(function() {
                var names = $(".name").val();
                var phone = $(".phone").val();


                if (names == "") {
                    alert("이름을 작성해 주세요");
                    return false;
                } else if (phone == "") {
                    alert("전화번호를 입력해 주세요");
                    return false;
                }

            })
            //q0
            $("#qa20").click(function() {
                $("#qa0input").val("20대");
                $(".qna").load("qa/qa1.html");
            })
            
             $("#qa30").click(function() {
                $("#qa0input").val("30대");
                $(".qna").load("qa/qa1.html");
            }) 
           
            $("#qa40").click(function() {
                $("#qa0input").val("40대");
                $(".qna").load("qa/qa1.html");
            }) 
            
            $("#qa50").click(function() {
                $("#qa0input").val("50대");
                $(".qna").load("qa/qa1.html");
            })



            //q1
            $(document).on('click', '#qa1Yes', function() {
                $("#qa1input").val("Yes");
                $(".qna").load("qa/qa2.html");
            })
            $(document).on('click', '#qa1No', function() {
                $("#qa1input").val("No");
                $(".qna").load("qa/qa2.html");
            });

            //q2

            $(document).on('click', '#qa2Yes', function() {
                $("#qa2input").val("편하고 현실적");
                $(".qna").load("qa/qa3.html");
            })

            $(document).on('click', '#qa2No', function() {
                $("#qa2input").val("쿨하고 낙관적");
                $(".qna").load("qa/qa3.html");
            });


            //q3

            $(document).on('click', '#qa3Yes', function() {
                $("#qa3input").val("고졸충분");
                $(".qna").load("qa/qa4.html");
            })

            $(document).on('click', '#qa3No', function() {
                $("#qa3input").val("학사,석사");
                $(".qna").load("qa/qa4.html");
            });


            //q4

            $(document).on('click', '#qa4Yes', function() {
                $("#qa4input").val("돈을깨끗이관리O");
                $(".qna").load("qa/qa5.html");
            })

            $(document).on('click', '#qa4No', function() {
                $("#qa4input").val("돈을깨끗이관리X");
                $(".qna").load("qa/qa5.html");
            });


            //q5
            $(document).on('click', '#qa5Yes', function() {
                $("#qa5input").val("돈적어도됨");
                $(".qna").load("qa/qa6.html");
            })

            $(document).on('click', '#qa5No', function() {
                $("#qa5input").val("돈많아야됨");
                $(".qna").load("qa/qa6.html");
            });

            // q6

            $(document).on('click', '#qa6Yes', function() {
                $("#qa6input").val("돈자주빌려줌");
                $(".qna").load("qa/qa7.html");
            })

            $(document).on('click', '#qa6No', function() {
                $("#qa6input").val("돈잘안빌려줌");
                $(".qna").load("qa/qa7.html");
            });

            //q7

            $(document).on('click', '#qa7Yes', function() {
                $("#qa7input").val("기부한다");
                $(".qna").load("qa/qa8.html");
            })

            $(document).on('click', '#qa7No', function() {
                $("#qa7input").val("투자한다");
                $(".qna").load("qa/qa8.html");
            });


            // //q8

            $(document).on('click', '#qa8Yes', function() {
                $("#qa8input").val("끼니를거른다");
                $(".qna").load("qa/qa9.html");
            })

            $(document).on('click', '#qa8No', function() {
                $("#qa8input").val("끼니는거를수없다");
                $(".qna").load("qa/qa9.html");
            });

            //q9
            $(document).on('click', '#qa9Yes', function() {
                $("#qa9input").val("지는것이 싫다");
                $(".qna").load("qa/qa10.html");

            })

            $(document).on('click', '#qa9No', function() {
                $("#qa9input").val("질수있다");
                $(".qna").load("qa/qa10.html");
            });

            var frm = $("#frm");

            //q10

            $(document).on('click', '#qa10a1', function() {
                $("#qa10input").val("성공");
                // location.href = "index.html"
                frm.submit();
            })

            $(document).on('click', '#qa10a2', function() {
                $("#qa10input").val("돈");
                // location.href = "index.html"
                frm.submit();

            });
            $(document).on('click', '#qa10a3', function() {
                $("#qa10input").val("즐거움");
                location.href = "inconsult.php"
                frm.submit();

            });
            $(document).on('click', '#qa10a4', function() {
                $("#qa10input").val("자기만족");
                location.href = "inconsult.php"
                frm.submit();

            });


        })
        </script>
    </div>
</body>

</html>