let gameregister=document.getElementById("registerbtn");
let gamelogin=document.getElementById("loginbtn");

gameregister.addEventListener("click",register);
alert("register your account login to play ! ! !");
function register()
{
    let coin=200;
    let str="️ ⚡️ ❤️ ❤️ ❤️";
    let turns=3;
    localStorage.setItem('turns',turns);
    localStorage.setItem('heart',str);
    localStorage.setItem('coins',coin);
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    console.log(name);
    console.log(password);
    localStorage.setItem('username',name);
    localStorage.setItem('password',password);
    alert("registeration successfull");
    let name1=document.getElementById("name");
    name1.value="";
    let pass=document.getElementById("password");
    pass.value="";
}
gamelogin.addEventListener("click",login);

function login()
{
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    let username=localStorage.getItem('username');
    let userpassword=localStorage.getItem('password');
    if(username==name&&userpassword==password)
    {
        window.location.href=" https://vasanth115.github.io/game_start/";
    }
    else
    {
        alert("invalid username or password");
    }
}