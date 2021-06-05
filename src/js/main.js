import { configurateSlick } from './modules/slick-slider-config.js';
import { tabs } from './modules/tabs.js';
import { modals } from './modules/modals.js';
import { popupImages } from './modules/popup-images.js';
import { customCheckbox } from './modules/custom-checkbox.js';
import { timer } from './modules/timer.js';

document.addEventListener('DOMContentLoaded', () => {
  configurateSlick();
  
  tabs();

  modals();

  popupImages();

  customCheckbox();

  timer(1623281672000);
});
