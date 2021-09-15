const refs = {
    open: document.querySelector("[data-open-map]"),
    close: document.querySelector("[data-close-map]"),
    backdrop: document.querySelector("[data-backdrop]"),
    lock: document.querySelector("[lock]"),
};
refs.open.addEventListener("click", toggleModal);
refs.close.addEventListener("click", toggleModal);

function toggleModal() {
    refs.backdrop.classList.toggle("backdrop--hidden");
    refs.lock.classList.toggle("lock");
}