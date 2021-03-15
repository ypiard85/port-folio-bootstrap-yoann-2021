

document.querySelectorAll('.card').forEach(e => {

    e.addEventListener( 'mouseenter', function() {
        e.classList.add('is-flipped');

        document.querySelectorAll('.t_flip').forEach(r => {
            e.classList.add('flipped-p');
        })

      });
      e.addEventListener( 'mouseleave', function() {
        e.classList.remove('is-flipped');

        document.querySelectorAll('.t_flip').forEach(r => {
            r.classList.remove('flipped-p');
        })
      });
});
