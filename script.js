document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById('audio');
    let btnsi = document.getElementById('btn-si');
    let btnno = document.getElementById('btn-no');
    let modalno = document.getElementById('modalno');
    let modal = document.getElementById('modal');

    btnsi.addEventListener('click', function() {
        modal.classList.add('oculto');
        audio.play();
    });

    btnno.addEventListener('click', function() {
        modalno.style.display = "flex"

        setTimeout(function() {
            modalno.style.display = "none"
        }, 3000)
    });
});