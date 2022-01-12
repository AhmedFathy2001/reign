let modalFocus = Array.from(document.querySelectorAll('.modal-focus'));
let closeIcon = document.getElementById('closeIcon');
let modal = document.getElementById('modal');
let modalBtn = document.getElementById('modalBtn');
//index to move around in the array of focusable elements
let currentIndex = 0;

//closeing buttons for the modal
[closeBtn, closeIcon].forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add("gone");
        modalBtn.focus();
    });
});

//listens for keyboard clicks
document.addEventListener('keydown', e => {
    //checks if the modal is open or not
    if (!modal.classList.contains("gone")) {
        //closes the modal on escape button click
        if (e.key == "Escape") {
            modal.classList.add("gone");
            modalBtn.focus();
        }
        // moves focus to previously focused element on shift + tab press
        else if (e.shiftKey && e.key == "Tab") {
            //prevents the default tab behavior 
            e.preventDefault();
            //checks if the current focusable element is the first element if so it goes to the last focusable element
            if (currentIndex == 0) {
                currentIndex = modalFocus.length - 1;
                modalFocus[currentIndex].focus();
            }
            //moves focus to the previous element
            else {
                currentIndex--;
                modalFocus[currentIndex].focus();
            }
        }
        //moves focus to next focusable element on tab press
        else if (e.key == "Tab") {
            //prevents the default tab behavior 
            e.preventDefault();
            //checks if the current focusable element is the last element if so it goes to the first focusable element
            if (currentIndex >= modalFocus.length - 1) {
                currentIndex = 0;
                modalFocus[currentIndex].focus();
            }
            //moves focus to the next element
            else {
                currentIndex++
                modalFocus[currentIndex].focus();
            }
        }
    }
});

//opens the modal on button click
modalBtn.addEventListener('click', () => {
    modal.classList.remove("gone");
    closeBtn.focus();
})