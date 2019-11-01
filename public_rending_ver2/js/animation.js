var smMedia = window.matchMedia('( max-width: 575px )');
var mdMedia = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

window.onload = function () {
  if (smMedia.matches == true) {
    $(window).scroll(function () {
      section1Ev(700, 's');
      section3Ev(2500);
    });
  } else if (mdMedia.matches == true) {
    $(window).scroll(function () {
      section1Ev(500, 'm');
      section3Ev(2000);
    });
  } else {
    $(window).scroll(function () {
      section1Ev(500, 'b');
      section3Ev(2000);
    });
  }
}; // function floatMenufn(mode,b,c){


$(document).ready(function () {
  $("#go_top").click(function () {
    // if(mode == 'top'){
    $('html,body').animate({
      scrollTop: 00
    }, 1000); // }
  });
  $("#go_insert").click(function () {
    // if(mode == 'top'){
    $('html,body').animate({
      scrollTop: 9000
    }, 1000); // }
  });
}); // }

function section1Ev(a, b) {
  var offset = $(document).scrollTop();

  if (offset >= a) {
    if (b == 'm') {
      $("#s1_li1").css({
        "animationName": "popUpList"
      });
      setTimeout(function () {
        $("#s1_li2").css({
          "animationName": "popUpList"
        });
      }, 200);
      setTimeout(function () {
        $("#s1_li3").css({
          "animationName": "popUpList"
        });
      }, 600);
      setTimeout(function () {
        $("#s1_li4").css({
          "animationName": "popUpList"
        });
      }, 400);
      $("#sticker_ev").css({
        "animationName": "popUpList"
      });
    } else {
      $("#s1_li1").css({
        "animationName": "popUpList"
      });
      setTimeout(function () {
        $("#s1_li2").css({
          "animationName": "popUpList"
        });
      }, 200);
      setTimeout(function () {
        $("#s1_li3").css({
          "animationName": "popUpList"
        });
      }, 400);
      setTimeout(function () {
        $("#s1_li4").css({
          "animationName": "popUpList"
        });
      }, 600);
      $("#sticker_ev").css({
        "animationName": "popUpList"
      });
    }
  }
}
function section3Ev(a) {
  var offset = $(document).scrollTop();

  if (offset >= a) {
    $("#s2_li1").css({
      "animationName": "popUpList"
    });
    $("#s2_li2").css({
      "animationName": "popUpList"
    });
    $("#s2_li3").css({
      "animationName": "popUpList"
    });
  }
}

$(window).scroll(function () {
  var floatPosition = 500;
  var scrollTop = $(window).scrollTop();
  var newPosition = scrollTop + floatPosition + "px";
  $("#floatMenu").stop().animate({
    "top": newPosition
  }, 300);
  if(scrollTop >=700){
    $('.head').css({
      "background-color":"rgba(249,68,59,0.6)"
    })
  }
  else{
    $('.head').css({
      "background-color":"rgba(0,0,0,0.0)"
    })
  }
}).scroll();

$(document).ready(function(){
    $('#nav-toggle').click(function(){
      $(".side_nav").fadeIn(300,function(){
        $('.mo_nav').animate({"left":"0%"},300)
      })

      $('html, body').css({'overflow-y': 'hidden'});
      // $('.hide_menu').on('scroll touchmove mousewheel', function(event) {
      // event.preventDefault();
      // event.stopPropagation();
      // return false;
    })
    })
    $('.close_btn').click(function(){
      $(".side_nav").fadeOut()
      $('.mo_nav').css({"left":"-50%"})
      $('html').css({'overflow-y': 'auto'});


    })
