function signup(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user ={
        username : username,
        email : email,
        password : password,
    };
    var json = JSON.stringify(user)
    localStorage.setItem(username,json)
    alert("Đăng ký thành công")
    window.location.href="./log_in.html"
}
function login(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("Vui lòng nhập username và password")
    }
    else if(username == data.username && email == data.email && password == data.password){
        alert("Đăng nhập thành công")
    }
    else{
        alert("Đăng nhập thất bại")
    }
    email.value.trim().length
    username.value.trim().length
    password.value.trim().length
}