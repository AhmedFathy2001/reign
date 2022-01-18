const close = document.querySelector('.dds-c-modal--close');
const closeBtn = document.querySelector('#closeBtn')
const modal = document.getElementById('modal');
const open = document.querySelector('.dds-open-modal');


//closing buttons for the modal
[closeBtn, close].forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.remove("is-visible");
        open.focus();
    });
});

let focus = Array.from(document.querySelectorAll('.dds-c-modal-focus'));

//index to move around in the array of focusable elements
let currentIndex = 0;
//listens for keyboard clicks
document.addEventListener('keydown', e => {
    //checks if the modal is open or not
    if (modal.classList.contains("is-visible")) {
        //closes the modal on escape button click
        if (e.key == "Escape") {
            modal.classList.remove("is-visible");
            open.focus();
        }
        // moves focus to previously focused element on shift + tab press
        else if (e.shiftKey && e.key == "Tab") {
            //prevents the default tab behavior 
            e.preventDefault();
            //checks if the current focusable element is the first element if so it goes to the last focusable element
            if (currentIndex == 0) {
                currentIndex = focus.length - 1;
                focus[currentIndex].focus();
            }
            //moves focus to the previous element
            else {
                currentIndex--;
                focus[currentIndex].focus();
            }
        }
        //moves focus to next focusable element on tab press
        else if (e.key == "Tab") {
            //prevents the default tab behavior 
            e.preventDefault();
            //checks if the current focusable element is the last element if so it goes to the first focusable element
            if (currentIndex >= focus.length - 1) {
                currentIndex = 0;
                focus[currentIndex].focus();
            }
            //moves focus to the next element
            else {
                currentIndex++
                focus[currentIndex].focus();
            }
        }
    }
});

//opens the modal on button click
open.addEventListener('click', () => {
    modal.classList.add("is-visible");
    closeBtn.focus();
})