$(document).ready(function(){
    AOS.init();

    $("#slider .carousel-item").mousemove(function(ev){
        let y=ev.clientY-106;
        let h=$(this).innerHeight()-106;
        if(h/2<y){
            $(this).find(".bg_img").removeClass("bottom").addClass("top");
        }else{
            $(this).find(".bg_img").removeClass("top").addClass("bottom");
        }
    });




});


