

/*Scroll function with header*/

window.onscroll = function() {scrollFunction()};

const fixedHeader =  document.getElementById("fixedHeader");



function scrollFunction() {
    if (window.scrollY >= 40) {
        fixedHeader.classList.add("fixedActive");
    } else {
        fixedHeader.classList.remove("fixedActive");
    }
}

/**Finished */

/**Toggle Menu function*/

let slider = document.querySelector("mobileMenu nav");

let open = false;

function slideMenu() {

    if (open === true){
        open = false
        slider.classList.remove("open")
    } else if (open === false) {
        open = true
        slider.classList.add("open")
    }
        
}

/**Finished */

/**Animation when click on a internal link */

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click')
})