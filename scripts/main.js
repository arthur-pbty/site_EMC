$(function() {
        $('.div_btn').hide();
});

$(window).scroll(function(){  
        posScroll = $(document).scrollTop();  
        if(posScroll >=id_div_big_title.clientHeight)  
                $('.div_btn').show();  
        else  
                $('.div_btn').hide();  
}); 