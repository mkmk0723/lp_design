$(function(){

    /*burger-btnをクリックした時*/ 
    $('.burger-btn').on('click',function(){

        $('.burger-btn').toggleClass('close');

        if ($('.burger-btn').hasClass('close')){

            $('.burger-menu').addClass('close');
        }else {
            $('.burger-menu').removeClass('close');
        }
    });
/*burger-menuをクリックした時*/ 　　　
    $('.burger-menu a').on('click',function(){

          $('.burger-btn').toggleClass('close');
        
        if ($('.burger-btn').hasClass('close')){

            $('.burger-menu').addClass('close');
        }else {
            $('.burger-menu').removeClass('close');
        }
    });

    // BBBが選ばれる理由(スライド左）

    $('.inview-slide-left').on('inview',function(event,isInView,VisiblePartX, VisiblePartY){
        if (isInView){

            $(this).stop().addClass('slide-left');
        }    
        
    });

    // (スライド右)
    $('.inview-slide-right').on('inview',function(event, isInView, VisiblePartX, VisiblePartY){

        if(isInView){

            $(this).stop().addClass('slide-right');
        }
    });

    // 吹き出し

    $('.voice-box').on('inview',function(event, isInView, VisiblePartX, VisiblePartY){

        if(isInView){

            $(this).stop().addClass('fukidashi');
        }

        
    });
    
});


 

