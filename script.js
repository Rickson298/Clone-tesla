function abrirmenu() {
    let menu = document.querySelector('.menu--right')
    if( menu.style.width == '250px'){
        menu.style.width ='0px'
    } else {
        menu.style.width = '250px'
    }
}