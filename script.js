document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById('audio');
    let btnsi = document.getElementById('btn-si');
    let btnno = document.getElementById('btn-no');
    let modalno = document.getElementById('modalno');

    btnsi.addEventListener('click', function() {
        let modal = document.getElementById('modal');
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