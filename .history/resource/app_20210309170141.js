var t = document.querySelectorAll('.t_flip')

document.querySelectorAll('.card').forEach(e => {

    e.addEventListener( 'mouseenter', function() {
            t.forEach(r =>{
            e.classList.add('is-flipped');

            r.classList.add('flipped-p');
        });
        });

        e.addEventListener( 'mouseleave', function() {
            e.classList.remove('is-flipped');
            r.classList.remove('flipped-p');

    })



});
