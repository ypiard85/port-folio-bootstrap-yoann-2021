document.querySelectorAll('.card').forEach(e => {
    e.addEventListener( 'mouseenter', function() {
        e.classList.add('is-flipped');
      });
      e.addEventListener( 'mouseleave', function() {
        e.classList.remove('is-flipped');
      });
});

document.querySelectorAll('.card__face--front p').forEach(e => {
    e.addEventListener( 'mouseenter', function() {
        e.classList.add('is-flipped');
      });
      e.addEventListener( 'mouseleave', function() {
        e.classList.remove('is-flipped');
      });
});
