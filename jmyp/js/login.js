$('#submitBtn').click(function(){
    $.ajax({
        url:"../lib/login.php",
        //引入地址
        type:"POST",
        // 请求方式
        data:{
            username:$('#un').val(),
            password:$('#pwd').val(),
            // 获取用户名和登陆密码的变量
        },
        success:function(data){
            if(data==0){
                location.href="./home.html"
            }else{
                alert('亲，还未注册过聚美哦~')
            }
        }
        
    })
    return false;
})
