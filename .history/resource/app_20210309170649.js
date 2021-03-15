var t = document.querySelector('.t_flip')

document.querySelectorAll('.card').forEach(e => {


    e.addEventListener( 'mouseenter', function() {
            e.classList.add('is-flipped');

        });

        e.addEventListener( 'mouseleave', function() {
            e.classList.remove('is-flipped');
            r.classList.remove('flipped-p');

    })



});
