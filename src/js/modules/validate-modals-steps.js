export const validateModalsSteps = (modal) => {
  if (!modal) return true;

  if (modal.querySelector('.calc-form .balcon-items')) { // Validates calc-form with balcon-items
    const calcForm = modal.querySelector('.calc-form');

    if ((+widthInput.value >= 1 && +widthInput.value <= 9999999) && (+heightInput.value >= 1 && +heightInput.value <= 9999999)) {
      calcForm.classList.remove('invalid');

      return true;
    }

    calcForm.classList.add('invalid');

    return false;
  }

  if (modal.querySelector('.calc-form .custom-checkbox')) { // Validates calc-form with custom checkbox
    const calcForm = modal.querySelector('.calc-form');

    if (modal.querySelector('.custom-checkbox.active')) {
      calcForm.classList.remove('invalid');

      return true;
    }

    calcForm.classList.add('invalid');

    return false;
  }

  return true;
};
