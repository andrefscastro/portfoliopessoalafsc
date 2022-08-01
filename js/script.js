

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

/**Animation when click on a internal link */

var link = $('a');



link.on('click', function(){
    var seletor = $(this).attr('href');
    var posicao = $(seletor).offset().top;
    $('html, body').animate({scrollTop: posicao-100},1000);
});