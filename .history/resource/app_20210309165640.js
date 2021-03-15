var t = document.querySelectorAll('.t_flip')

document.querySelectorAll('.card').forEach(e => {

    t.forEach(r =>{

        e.addEventListener( 'mouseenter', function() {
            e.classList.add('is-flipped');

            r.classList.add('flipped-p');
        });

        e.addEventListener( 'mouseleave', function() {
            e.classList.remove('is-flipped');
        });

    })



});
