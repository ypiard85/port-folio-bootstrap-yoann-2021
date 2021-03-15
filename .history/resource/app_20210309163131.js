var card = document.querySelector('.card');
card.addEventListener( 'mouseenter', function() {
  card.classList.add('is-flipped');
});
card.addEventListener( 'mouseleave', function() {
  card.classList.remove('is-flipped');
});