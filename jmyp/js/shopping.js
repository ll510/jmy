window.onload = function(){
    // 获取节点
    var small = document.getElementById('small');// 小盒子
    var big = document.getElementById('big');// 大盒子:400*400
    var mask = document.getElementById('mask');// 遮罩层
    var bigImg = big.children[0];
    // 大图片:800*800
    var box = small.parentNode;//box盒子
    // 1 鼠标移入small，mask显示，big显示
    small.onmouseenter = function(){
        mask.style.display = "block";
        big.style.display = "block";
    }
    // 2 鼠标在small里面移动，mask跟随鼠标,光标在mask中间
    small.onmousemove = function(e){
        e = e||window.event;
        // 由于small.offsetLeft是small盒子距离box盒子的长度（0）
        // 可以使用box距离body的长度来代替small距离body的长度
        var left = e.pageX - (box.offsetLeft+1);
        var top = e.pageY - (box.offsetTop+1); 
        // 光标在mask中间
        left = left - mask.offsetWidth/2;
        top = top - mask.offsetHeight/2;
        // mask在移动中不能超出small范围
        if(left<0){
            left = 0;
        }
        if(left>small.offsetWidth-mask.offsetWidth){
            left=small.offsetWidth-mask.offsetWidth
        }
        if(top<0){
            top = 0;
        }
        if(top>small.offsetHeight-mask.offsetHeight){
            top=small.offsetHeight-mask.offsetHeight
        }
        // 定位mask
        mask.style.left = left+"px";
        mask.style.top = top+"px"
        // 4 mask对应的大图部分显示在big的可视区域中
        var bigLeft = -left/small.offsetWidth*bigImg.offsetWidth;
        var bigTop = -top/small.offsetHeight*bigImg.offsetHeight;

        bigImg.style.left = bigLeft+"px";
        bigImg.style.top = bigTop+"px";
    }
    // 5 鼠标移出small，mask隐藏，big隐藏
    small.onmouseleave = function(){
        mask.style.display = "none";
        big.style.display = "none";
    }
}


// 点击加入购物车之后跳转到列表页
$('#buyBTn').click(function(){
    console.log(1)
    window.location.href="../pages/cart.html"
})