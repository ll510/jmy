// 正则验证

// 用户名验证
let regName = /^[A-Za-z\u4e00-\u9fa5]{2,10}$/
var oNname =function(){
    var name= $('#un').val();
    if(regName.test(name)){
        return true;
    }else{
        $('#name').append(`
        <div id="add">用户名2-10个字母或中文，请正确输入</div>
        `)
        $('#un').off('blur',oNname)
        return false;
        
    }
}
$('#un').on('blur',oNname)

// 密码验证
let regPwd =/^.{6,}$/

var oNpwd =function(){
    var pwd= $('#pwd').val();
    if(regPwd.test(pwd)){
        return true;
    }else{
        $('#password').append(` <div id="PWD">密码不能小于6位哦~</div>`)
        $('#pwd').off('blur',oNpwd)
        return false;
    }
}
$('#pwd').on('blur',oNpwd)
// 重复密码


var oNpwds =function(){
    var pwd =$('#pwd').val();
    var pwds=$('#pwds').val();
    if(pwd==pwds){
      return true;
    }else{
        $('#pwdes').append(`<div id="PWDS">两次密码输入不一致，请再次确认~</div>`)
        $('#pwds').off('blur',oNpwds)
        return false;
    }
}

$('#pwds').on('blur',oNpwds)


$('#login').click(function(){
if(!(oNname() && oNpwd() && oNpwds())){
    return false;
//    alert('输入不合法，请重新验证')
}else{
    //  location.href="./login.html"
    console.log(1)
}    


    $.ajax({
        url:"../lib/register.php",
        // 引入地址
        type:"POST",
        // 请求方式
        data:{
            username:$('#un').val(),
            password:$('#pwd').val(),
            // 获取用户名和登陆密码的变量
        },
        success:function(data){
            console.log(data);
            if(data==0){
                alert('此用户名已被注册')
                // 如果用户名=0，则另外取名
            }else{
                location.href="./login.html"
                // 如果用户名未被登陆，注册成功，转到登陆页面
            }
        }
    })
    return false;
})

