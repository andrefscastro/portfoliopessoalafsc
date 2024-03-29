/**Animation content when scroll */

window.sr = ScrollReveal({ reset: true});


sr.reveal('.about-wrapper', {
    distance: '300px',
    duration: 3000 }, 
     );


sr.reveal('.skills-wrapper', {
    distance: '300px',
    origin: 'top',
    duration: 3000 }, 
    );

sr.reveal('.projects-wrapper', {
    distance: '300px',
    origin: 'bottom',
    duration: 3000 }, 
    );


sr.reveal('.form-wrapper', {
    distance: '400px',
    origin: 'top',
    duration: 3000 }, 
    );
