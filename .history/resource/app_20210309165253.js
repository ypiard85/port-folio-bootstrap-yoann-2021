var t = document.querySelectorAll('.t_flip').forEach(r => {
    e.classList.add('flipped-p');
})

document.querySelectorAll('.card').forEach(e => {

    e.addEventListener( 'mouseenter', function() {
        e.classList.add('is-flipped');
      });

      e.addEventListener( 'mouseleave', function() {
        e.classList.remove('is-flipped');
      });




});
