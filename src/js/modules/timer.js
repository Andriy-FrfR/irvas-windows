let remainderFromDays;
let remainderFromHours;
let remainderFromMinutes;

const setDays = (time) => {
  let daysCount = Math.floor(time / 86400000);

  document.querySelector('.timer-days .timer-item-count').textContent = daysCount > 9 ? daysCount : '0' + daysCount;

  remainderFromDays = time % 86400000;
};

const setHours = (time) => {
  let hoursCount = Math.floor(time / 3600000);

  document.querySelector('.timer-hours .timer-item-count').textContent = hoursCount > 9 ? hoursCount : '0' + hoursCount;

  remainderFromHours = time % 3600000;
};

const setMinutes = (time) => {
  let minutesCount = Math.floor(time / 60000);

  document.querySelector('.timer-minutes .timer-item-count').textContent = minutesCount > 9 ? minutesCount : '0' + minutesCount;

  remainderFromMinutes = time % 60000;
};

const setSeconds = (time) => {
  let secondsCount = Math.floor(time / 1000);

  document.querySelector('.timer-seconds .timer-item-count').textContent = secondsCount > 9 ? secondsCount : '0' + secondsCount;
};

export const timer = (time) => {
  time = time - Date.now();
  
  setInterval(() => {
    time = time - 1000;

    setDays(time);

    setHours(remainderFromDays);

    setMinutes(remainderFromHours);

    setSeconds(remainderFromMinutes);
  }, 1000);
};
