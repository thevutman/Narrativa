function menu(){
    document.getElementById("main__container").classList.toggle('active')
    setTimeout(() => {
        document.getElementById("main__categories").classList.toggle('active')
        document.getElementById("main__categories").classList.toggle('animation')
    }, 300);
}
function menu2(){
    document.getElementById("main__categories").classList.toggle('active')
    document.getElementById("main__container").classList.toggle('active')
    document.getElementById("main__categories").classList.toggle('animation')
}

function openMenu(){
    document.getElementById('menu__options').classList.toggle('active')
    for(var i=0; i<3; i++){
        document.querySelectorAll('.menu__desing')[i].classList.toggle('active')
    }

}

function back(){
    window.history.back()
}