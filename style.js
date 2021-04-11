const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

//event listener


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
