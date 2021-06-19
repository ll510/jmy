<?php

$name = $_POST['username'];
// 获取用户名

$pwd = $_POST['password'];
// 获取密码

$conn = mysqli_connect('localhost', 'root', 'root','sz2105');

// 链接数据库

$result=mysqli_query($conn,"SELECT * FROM `users` WHERE `username`='$name' AND `password` = '$pwd'");

// 判断数据库是否有用户名及密码

if(mysqli_fetch_assoc($result)){
    echo 0;
    // 如果有返回0，注册失败，请重新取名
}else{
    mysqli_query($conn,"INSERT INTO  `users`(`username`,`password`) VALUES ('$name','$pwd')");
   echo 1;
   // 如果没有返回1，注册成功，转到登陆页面
}
?>