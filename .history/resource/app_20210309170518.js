

document.querySelectorAll('.card').forEach(e => {

    document.querySelectorAll('.t_flip').forEach(r => {
        e.addEventListener( 'mouseenter', function() {
            r.classList.add('is-flipped');
        })

        e.addEventListener( 'mouseleave', function() {

            r.classList.remove('flipped-p');

    })
    })



    e.addEventListener( 'mouseenter', function() {
            e.classList.add('is-flipped');

        });

        e.addEventListener( 'mouseleave', function() {
            e.classList.remove('is-flipped');
            r.classList.remove('flipped-p');

    })



});
