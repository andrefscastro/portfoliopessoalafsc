

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

