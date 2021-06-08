import { configurateSlick } from './modules/slick-slider-config.js';
import { tabs } from './modules/tabs.js';
import { modals } from './modules/modals.js';
import { popupImages } from './modules/popup-images.js';
import { customCheckbox } from './modules/custom-checkbox.js';
import { timer } from './modules/timer.js';
import { firebaseSendData } from './modules/firebase-send-data.js';
import { db } from './modules/firebase-initialize.js';

document.addEventListener('DOMContentLoaded', () => {
  configurateSlick();
  
  tabs();

  modals();

  popupImages();

  customCheckbox();

  timer(db);

  firebaseSendData(db);
});
