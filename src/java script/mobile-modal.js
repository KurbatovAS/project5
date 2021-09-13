(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-menuOpen]'),
    closeModalBtn: document.querySelector('[data-modal-сlose]'),
    modal: document.querySelector('[data-modal]'),
  };
 

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();