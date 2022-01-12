let modalFocus = Array.from(document.querySelectorAll('.modal-focus'));
let closeIcon = document.getElementById('closeIcon');
let modal = document.getElementById('modal');
let modalBtn = document.getElementById('modalBtn');
let currentIndex = 0;

[closeBtn, closeIcon].forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add("gone");
        modalBtn.focus();
    });
});

document.addEventListener('keydown', e => {
    console.log(e.key);
    if (!modal.classList.contains("gone")) {
        if (e.key == "Escape") {
            modal.classList.add("gone");
            modalBtn.focus();
        } else if (e.shiftKey && e.key == "Tab") {
            e.preventDefault();
            if (currentIndex == 0) {
                currentIndex = modalFocus.length - 1;
                modalFocus[currentIndex].focus();
            } else {
                currentIndex--;
                modalFocus[currentIndex].focus();
            }
        } else if (e.key == "Tab") {
            e.preventDefault();
            if (currentIndex >= modalFocus.length - 1) {
                currentIndex = 0;
                console.log(currentIndex + "0");
                modalFocus[currentIndex].focus();
            } else {
                currentIndex++
                console.log(currentIndex + "with +1");
                modalFocus[currentIndex].focus();
            }
        }
    }
});

modalBtn.addEventListener('click', () => {
    modal.classList.remove("gone");
    closeBtn.focus();
})