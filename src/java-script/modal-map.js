const refs = {
    open: document.querySelector("[data-open-modal]"),
    close: document.querySelector("[data-close-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
};
refs.open.addEventListener("click", toggleModal);
refs.close.addEventListener("click", toggleModal);

function toggleModal() {
    refs.backdrop.classList.toggle("backdrop--hidden");
}