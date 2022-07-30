

/*Scroll function with header*/

window.onscroll = function() {scrollFunction()};

const fixedHeader =  document.getElementById("fixedHeader");

const mobileMenu = document.getElementById("mobileMenu")



function scrollFunction() {
    if (window.scrollY >= 40) {
        fixedHeader.classList.add("fixedActive");
        mobileMenu.classList.add("mobileMenuActive")
    } else {
        fixedHeader.classList.remove("fixedActive");
        mobileMenu.classList.remove("mobileMenuActive");
    }
}

/**Finished */

/**Toggle Menu function*/

let slider = document.getElementById("mobilMenu");

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

