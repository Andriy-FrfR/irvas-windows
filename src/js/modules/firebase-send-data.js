import { hideModal } from './modals.js';

const showRequestStatus = (status) => {
  const requestInfo = document.querySelector('.request-info');

  if (status === 'error') {
    requestInfo.classList.add('error');
  } else {
    requestInfo.classList.remove('error');
  }

  requestInfo.classList.add('visible');

  setTimeout(() => {
    requestInfo.classList.remove('visible');
  }, 3000);
};

export const firebaseSendData = (db) => {
  const callMeasurerForms = document.querySelectorAll('.call-measurer-form');
  const orderCallForms = document.querySelectorAll('.order-call-form');
  const calculateForms = document.querySelectorAll('.calculate-form');

  callMeasurerForms.forEach(callMeasurerForm => {
    callMeasurerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formInputs = callMeasurerForm.querySelectorAll('.contact-form-input');

      db.collection('measurer-calls').doc().set({
        name: formInputs[0].value,
        phone: formInputs[1].value
      }).then(() => {
        hideModal();
        showRequestStatus('success');
      }).catch(() => {
        hideModal();
        showRequestStatus('error');
      });
    });
  });

  orderCallForms.forEach(orderCallForm => {
    orderCallForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formInputs = orderCallForm.querySelectorAll('.contact-form-input');

      db.collection('order-calls').doc().set({
        name: formInputs[0].value,
        phone: formInputs[1].value
      }).then(() => {
        hideModal();
        showRequestStatus('success');
      }).catch(() => {
        hideModal();
        showRequestStatus('error');
      });
    });
  });

  calculateForms.forEach(calculateForm => {
    calculateForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formInputs = calculateForm.querySelectorAll('.contact-form-input');
      const balconItemActive = document.querySelector('.balcon-item.active');
      const customCheckboxActive = document.querySelector('.custom-checkbox.active');

      db.collection('calculate-calls').doc().set({
        name: formInputs[0].value,
        phone: formInputs[1].value,
        balconForm: balconItemActive.dataset.balconForm,
        sizes: {
          width: widthInput.value,
          height: heightInput.value
        },
        glazingType: glazingSelect.value,
        profile: customCheckboxActive.dataset.profile,
      }).then(() => {
        hideModal();
        showRequestStatus('success');
      }).catch(() => {
        hideModal();
        showRequestStatus('error');
      });
    });
  });
};
