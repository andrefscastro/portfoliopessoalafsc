window.onscroll = function() {fixedMenu()};

var header = document.getElementById('mobile-menu');

var sticky = header.offsetTop;

function fixedMenu() {
    if (window.pageYoffset > sticky) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
}