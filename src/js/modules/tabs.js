export const tabs = () => {
  const tabsContainers = document.querySelectorAll('.tabs-container');

  tabsContainers.forEach(tabsContainer => {
    const tabsButtonsWrapper = tabsContainer.querySelector('.tabs-buttons-wrapper');
    const tabsButtons = tabsButtonsWrapper.querySelectorAll('[data-tab-index]');
    const tabsWrapper = tabsContainer.querySelector('.tabs-wrapper');
    const tabs = tabsWrapper.querySelectorAll('[data-tab-index]');
    
    tabsButtons.forEach(tabsButton => {
      tabsButton.addEventListener('click', () => {
        tabs.forEach(tab => {
          tab.classList.remove('visible');
        });

        tabsButtons.forEach(tabsButton => {
          tabsButton.classList.remove('active');
        });

        tabsWrapper.querySelector(`[data-tab-index="${tabsButton.dataset.tabIndex}"]`)
          .classList.add('visible');

        tabsButton.classList.add('active');
      });
    });
  });
};
