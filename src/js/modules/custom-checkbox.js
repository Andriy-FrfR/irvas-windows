const removeCheckboxActive = () => {
  const activeCheckbox = document.querySelector('.custom-checkbox.active');
  if (activeCheckbox) {
    activeCheckbox.classList.remove('active');
  }
};

export const customCheckbox = () => {
  const checkBoxes = document.querySelectorAll('.custom-checkbox');

  checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', () => {
      removeCheckboxActive();

      checkBox.classList.add('active');
    });
  });
};
