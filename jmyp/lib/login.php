<?php
 $name =$_POST['username'];
 // 获取用户名

 $pwd = $_POST['password'];
 // 获取密码

 $conn = mysqli_connect('localhost','root','root','sz2105');

 // 链接数据库
 $result=mysqli_query($conn,"select * from `users` where username ='$name' AND password ='$pwd'");
// 判断数据库是否有用户名及密码
if(mysqli_fetch_assoc($result)){
    echo 0;
    // 如果有返回0.登陆成功，转到首页
}else{
    mysqli_query($conn,"insert into `users` values('$name','$pwd')");
    echo 1;
    // 如果没有返回1，没有此用户名，转到注册页面
}

?>