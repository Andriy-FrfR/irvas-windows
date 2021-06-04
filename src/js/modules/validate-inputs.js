const onlyNumbers = (event) => {
  const target = event.currentTarget;

  target.value = target.value.replace(/[^0-9]/, '');
};

export const validateInputs = () => {
  widthInput.addEventListener('input', onlyNumbers);
  heightInput.addEventListener('input', onlyNumbers);
};
