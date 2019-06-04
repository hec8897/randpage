function toggle(a){
    $('.commen').hide()
    $('.commen'+a).toggle()
}

var qaValue = [];

function answerFn(a,b){

    var frm = document.getElementById('frm');


    $('#qa'+a).val(b)
    $('.qas').load('qa/qa'+(a+1)+'.html');
        console.log(qaValue);
        var thisValue =Number($('#qa'+a).val());
        qaValue.push(thisValue);
        console.log(a)

    if(a==8){
        var sumValuse = qaValue[0]+qaValue[1]+qaValue[3]+qaValue[4]+qaValue[5]+qaValue[6]+qaValue[7];
        frm.action = 'inconsult.php?s='+sumValuse
        frm.submit();

    }
}

$(document).ready(function(){
    $('.qas').load('qa/qa1.html')
})