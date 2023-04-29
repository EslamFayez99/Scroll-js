let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let welcome = document.querySelector('.welcome');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1 + 'px';
    mountains4.style.top = value * 0.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 2 + 'px';
    welcome.style.fontSize = value + 'px';
    if(scrollY >= 70){
        welcome.style.fontSize = 70 + 'px';
        welcome.style.position = 'fixed';
        if(scrollY >= 500){
            welcome.style.display = 'none';
        }else{
            welcome.style.display = 'block';
        }
        if(scrollY >= 270){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = "linear-gradient(#200016, #10001f)"
        }
    }
}