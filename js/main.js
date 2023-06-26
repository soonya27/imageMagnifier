$(function(){
    mainInit()
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    })
})

function mainInit(){
    util()
    gnb()
    news()
    quickNav()
    footerMenu()

}
function util(){
    var $langli = $('#header .util ul li .lang');
    var $lang = $('#header .util ul li .lang ul');
    var isplay = false;
    $lang.hide();

    $langli.on('click',function(){
        if(isplay){
            $lang.hide();
            $langli.find('a i').attr('class','xi-caret-down-min')
        }else{
             $lang.show();
             $langli.find('a i').attr('class','xi-caret-up-min')
        }
        isplay = !isplay
       
    })
}
function gnb(){
    var $gnbli = $('#nav .gnb li');
    $gnbli.hover(function(){
        $('#header').stop().animate({height:410})
    })
    $('#header').on('mouseleave',function(){
        $(this).stop().animate({height:130})
    })
    

}
function news(){
    var current = 0, old = 0, timer = 0, interval = 3000;
    var len = $('#visual .con-menu .notice .mask .content li').length;
    var h = $('#visual .con-menu .notice .mask .content').height();
    var $prev = $('#visual .con-menu .notice .prev');
    var $next = $('#visual .con-menu .notice .next');
    $('#visual .con-menu .notice .mask .content li').hide().eq(current).show();
    timer = setInterval(make , interval)
    function make() {
        current++;
        if(current > len -1) {current = 0}
        makeNews(-h,h)
    }
    $prev.on('click',function(){
        current--;
        if(current < 0 ){current = len -1}
        makeNews(h,-h)
    })
    $next.on('click',function(){
        current++;
        if(current > len -1) {current = 0}
        makeNews(-h,h)
    })
    function makeNews(start, end){
        $('#visual .con-menu .notice .mask .content li').eq(current).stop().show().css({opacity:0,top:start}).animate({opacity:1,top:0},500);
        $('#visual .con-menu .notice .mask .content li').eq(old).stop().show().css({opacity:1,top:0}).animate({opacity:0,top:end},500);
        old = current;
        clearInterval(timer)
        timer = setInterval(make , interval)
    }
    
}

function quickNav(){
    var top = 0;
    var $btnTop = $('.quick .quick-nav .top p.btn-top')
    var $nav = $('.quick .quick-nav')
    
    $btnTop.on('click',function(){
        $('html,body').stop().animate({scrollTop:0})
    })

    $(window).on('scroll',function(){
        top = $(window).scrollTop();
        console.log(top)
        if( top > 60 ){
            $nav.stop().animate({top:70})
        }else{
            $nav.stop().animate({top:200})
        }
    })


}
function footerMenu(){
    var $center = $('#footer .menu .centerSite ul')
    var $centertitle = $('#footer .menu .centerSite .title')
    var $ci = $centertitle.find('i')
    var $family = $('#footer .menu .familySite ul')
    var $familytitle = $('#footer .menu .familySite .title')
    var $fi = $familytitle.find('i')
    var isplay = false;
    var isplay2 = false;

    $center.hide()
    $family.hide()
    $centertitle.on('click',function(){
        if(isplay){
           $center.hide()
           $ci.attr('class','xi-angle-up-min')
        }else {
           $center.show()
           $ci.attr('class','xi-angle-down-min')
        }
        isplay = !isplay;
    })
    $familytitle.on('click',function(){
        if(isplay2){
           $family.hide()
           $fi.attr('class','xi-angle-up-min')
        }else {
           $family.show()
           $fi.attr('class','xi-angle-down-min')
        }
        isplay2 = !isplay2;
    })
}
