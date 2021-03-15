var t = document.querySelectorAll('.t_flip')

document.querySelectorAll('.card').forEach(e => {

    e.addEventListener( 'mouseenter', function() {
        e.classList.add('is-flipped');

        t.forEach(r =>{
            r.classList.add('flipped-p');
        })

      });

      e.addEventListener( 'mouseleave', function() {
        e.classList.remove('is-flipped');
        t.forEach(r =>{
            r.classList.remove('flipped-p');
        })
      });




});
