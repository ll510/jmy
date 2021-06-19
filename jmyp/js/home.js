var hour=document.querySelector('.hour');
var minute=document.querySelector('.minute');
var second=document.querySelector('.second');
// var inputTime = +new Date("2021-6-18 10:00:00");
let inputTime=new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1)
//2、开启定时器dd
setInterval(countDown,1000);
//1000毫秒，每一秒钟调用一次函数
countDown();
//3、倒计时-时分秒函数
function countDown(){
    var nowTime = +new Date(); 
    var times = ( inputTime - nowTime )/1000; 
    var h = parseInt (times/60/60%24);
    h = h < 10 ? '0' + h : h;
    hour.innerHTML=h;
    var m = parseInt(times/60%60);
    m = m < 10 ? '0' + m : m;
    minute.innerHTML=m;
    var s = parseInt(times%60);
    s = s < 10 ? '0' + s : s;
    second.innerHTML=s;
}

// 下拉菜单
$(document).ready(function(){
    $('#list-btn').mouseenter(function(){
        $('#list-btn').stop;
        $('#head-sub').slideDown();
    });
    $('#list-btn').mouseleave(function(){
        $('#head-sub').slideUp();
    })
});

// 侧边栏
var left = $('#main-left');
window.onscroll=function(){
    var height =window.pageYOffset;
    if(height>300){
        $('#main-left').css({display:'block'})
    }else{
       left.css({display:'none'});
    }
}

// 轮播图
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    })        
    

// 回到顶部功能
$('#Gtop').click(function(){
    document.body.srollTop = 0 ; 
    document.documentElement.scrollTop = 0 ;
})

// 所有图片点击后跳转到购物车详情
$('.center_box').click(function(){
    window.location.href="../pages/shopping.html"
})