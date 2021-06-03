import { configurateSlick } from './modules/slick-slider-config.js';
import { tabs } from './modules/tabs.js';
import { modals } from './modules/modals.js';

document.addEventListener('DOMContentLoaded', () => {
  configurateSlick();
  
  tabs();

  modals();
});
