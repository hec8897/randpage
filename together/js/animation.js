var animationJs = {
    openTrue: true,
    FaqView: function FaqView(a, b, c) {
        if (this.openTrue == true) {
            animationJs.openTrue = a;
            $("#" + a).slideDown(200);
            $("#" + a + "_p").css({
                "color": '#ed2c3d'
            });
            $('.qa_mark' + c).css({
                "background": '#ed2c3d'
            });
            $('#qa_img' + c).attr("src", "img/main/up_arrow.png");
        } else if (this.openTrue == a) {
            $(".an").slideUp(200);
            animationJs.openTrue = true;
            $("#" + a + "_p").css({
                "color": '#222'
            });
            $('.qa_img').attr("src", "img/main/down_arrow.png");
            $('.qa_mark').css({
                "background": '#999'
            });
        } else {
            $(".an").slideUp(200);
            $("#" + a).slideDown(200);
            $('.qa_mark').css({
                "background": '#999'
            });
            $(".an_p").css({
                "color": '#222'
            });
            $("#" + a + "_p").css({
                "color": '#ed2c3d'
            });
            $('.qa_mark' + c).css({
                "background": '#ed2c3d'
            });
            $('.qa_img').attr("src", "img/main/down_arrow.png");
            $('#qa_img' + c).attr("src", "img/main/up_arrow.png");
            animationJs.openTrue = a;
        } // console.log(openTrue)
        // else if(openTrue == true){
        //     $("#"+a).slideUp(200)
        // }
        // if(openTrue == b){
        //     $(".an").slideUp(200)
        // }

    }
};

$(document).ready(function(){
    
})