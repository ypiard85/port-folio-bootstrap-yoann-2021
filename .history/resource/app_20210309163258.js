document.querySelectorAll('.card').forEach(e => {
    e.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
      });
      e.addEventListener( 'mouseleave', function() {
        card.classList.remove('is-flipped');
      });
});
