let closeBtn = document.getElementById('closeBtn');
let closeIcon = document.getElementById('closeIcon');
let modal = document.getElementById('modal');
let modalBtn = document.getElementById('modalBtn');

[closeBtn, closeIcon].forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add("gone");
        modalBtn.focus();
    })
})

document.addEventListener('keydown', e => {
    if (!modal.classList.contains("gone")) {
        if (e.key == "Escape") {
            modal.classList.add("gone");
            modalBtn.focus();
        }
    }

})

modalBtn.addEventListener('click', () => {
    modal.classList.remove("gone");
    closeBtn.focus();
})