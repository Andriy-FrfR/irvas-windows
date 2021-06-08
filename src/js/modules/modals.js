import { validateModalsSteps } from './validate-modals-steps.js';

const removeActiveModals = () => {
  const modalsWrapper = document.querySelector('.modals-wrapper');
  const modals = modalsWrapper.querySelectorAll('.modal');

  modals.forEach(modal => {
    modal.classList.remove('active');
  });
};

const calcScroll = () => {
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
};

const showModal = () => {
  document.querySelector('.modals-wrapper').classList.add('visible');

  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = calcScroll() + 'px';
};

export const hideModal = () => {
  document.querySelector('.modals-wrapper').classList.remove('visible');

  document.body.style.overflow = 'auto';
  document.body.style.marginRight = 0;
};

export const modals = () => {
  const modalButtons = document.querySelectorAll('[data-modal-btn-index]');
  const modalsWrapper = document.querySelector('.modals-wrapper');
  const modalsBackground = document.querySelector('.modals-background');
  const hideModalButtons = modalsWrapper.querySelectorAll('.hide-modal');

  modalsBackground.addEventListener('click', hideModal);

  hideModalButtons.forEach(hideModalButton => {
    hideModalButton.addEventListener('click', hideModal);
  });

  modalButtons.forEach(modalButton => {
    modalButton.addEventListener('click', () => {
      const modal = modalsWrapper.querySelector(`[data-modal-index="${modalButton.dataset.modalBtnIndex}"]`);

      if (!validateModalsSteps(modalButton.closest('.modal'))) {
        return;
      }
      
      removeActiveModals();
      showModal();

      modal.classList.add('active');
    });
  });
};
