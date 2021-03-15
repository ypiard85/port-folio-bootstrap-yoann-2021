function scrollEffect(){


    ScrollReveal().reveal('.about_me', {
        delay: 150,
        duration: 1000,
        reset: true,
        origin: 'bottom',
        distance: '30%'
    });

}

var card = document.querySelector('.card');
card.addEventListener( 'mouseenter', function() {
  card.classList.toggle('is-flipped');
});