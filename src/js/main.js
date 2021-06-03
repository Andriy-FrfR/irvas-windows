import { configurateSlick } from './modules/slick-slider-config.js';
import { tabs } from './modules/tabs.js';
import { modals } from './modules/modals.js';
import { popupImages } from './modules/popup-images.js';

document.addEventListener('DOMContentLoaded', () => {
  configurateSlick();
  
  tabs();

  modals();

  popupImages();
});
