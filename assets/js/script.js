const optionsMenu = document.querySelector('.options-header-mob');
const menuClick = document.querySelector('.menu-buguer');
const menuIcon = document.querySelector('.bi-list');

menuClick.addEventListener('click', () => {
    optionsMenu.classList.toggle('active');
    if(menuIcon.classList.contains('bi-list')) {
        menuIcon.classList.add('bi-x');
        menuIcon.classList.remove('bi-list');
    } else {
        menuIcon.classList.remove('bi-x');
        menuIcon.classList.add('bi-list');
    }
})



document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 0) {
        header.classList.add('scrolled');
        optionsMenu.classList.remove('active');
        menuIcon.classList.remove('bi-x');
        menuIcon.classList.add('bi-list');
    } else {
        header.classList.remove('scrolled');
    }
});

$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        var targetOffset = $(hash).offset().top -200;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 800);
    }
});
});
