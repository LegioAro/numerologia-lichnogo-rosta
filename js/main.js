isResize('.video__video', '.video__wrapper', '.video__mob', 768);
isResize('.profit__btn', '.profit__btn-wrapper', '.profit__wrapper', 768);

window.addEventListener('resize', () => {
  isResize('.video__video', '.video__wrapper', '.video__mob', 768);
  isResize('.profit__btn', '.profit__btn-wrapper', '.profit__wrapper', 768);
});

//timer

function isTimer() {
  // let dateNow = new Date();
  let minutesDeadline = new Date(2023, 10, 24, 20);

  // dateNow.setMinutes(dateNow.getMinutes() + minutesDeadline);

  let timerId = null;

  function countdownTimer() {
    const diff = minutesDeadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }

    let timers = document.querySelectorAll('.timer');
    for (let timer of timers) {
      let timerDay = timer.querySelector('[data-timer-day]');
      let timerHour = timer.querySelector('[data-timer-hour]');
      let timerMinuts = timer.querySelector('[data-timer-minuts]');
      let timerSeconds = timer.querySelector('[data-timer-seconds]');

      let timerDayItems = timerDay.querySelectorAll('.timer__item-num');
      let timerHourItems = timerHour.querySelectorAll('.timer__item-num');
      let timerMinutesItems = timerMinuts.querySelectorAll('.timer__item-num');
      let timerSecondsItems = timerSeconds.querySelectorAll('.timer__item-num');

      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      // const milSeconds = diff > 0 ? Math.floor(diff) % 100 : 0;

      let dayString = days < 10 ? '0' + days : String(days);
      let hourString = hours < 10 ? '0' + hours : String(hours);
      let minutesString = minutes < 10 ? '0' + minutes : String(minutes);
      let secondsString = seconds < 10 ? '0' + seconds : String(seconds);

      let dayArr = dayString.split('');
      let hourArr = hourString.split('');
      let minutesArr = minutesString.split('');
      let secondsArr = secondsString.split('');

      for (let i = 0; i < timerDayItems.length; i++) {
        timerDayItems[i].innerHTML = dayArr[i];
      }
      for (let i = 0; i < timerHourItems.length; i++) {
        timerHourItems[i].innerHTML = hourArr[i];
      }
      for (let i = 0; i < timerMinutesItems.length; i++) {
        timerMinutesItems[i].innerHTML = minutesArr[i];
      }
      for (let i = 0; i < timerSecondsItems.length; i++) {
        timerSecondsItems[i].innerHTML = secondsArr[i];
      }
    }
  }

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
}

isTimer();

// function isTimer() {
//   let dateNow = new Date();
//   let minutesDeadline = 8;
//   dateNow.setMinutes(dateNow.getMinutes() + minutesDeadline);

//   function countdownTimer() {
//     const diff = dateNow - new Date();
//     if (diff <= 0) {
//       clearInterval(timerId);
//     }

//     // const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//     const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//     const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//     const milSeconds = diff > 0 ? Math.floor(diff) % 100 : 0;

//     // let hoursString = hours < 10 ? '0' + hours : String(hours);
//     let minutesString = minutes < 10 ? '0' + minutes : String(minutes);
//     let secondsString = seconds < 10 ? '0' + seconds : String(seconds);
//     let milsecString = milSeconds < 10 ? '0' + milSeconds : String(milSeconds);

//     // let hoursArr = hoursString.split('');
//     let minutesArr = minutesString.split('');
//     let secondsArr = secondsString.split('');
//     let milsecArr = milsecString.split('');

//     for (let i = 0; i < timerMilSecItems.length; i++) {
//       timerMilSecItems[i].innerHTML = milsecArr[i];
//     }
//     for (let i = 0; i < timerMinutesItems.length; i++) {
//       timerMinutesItems[i].innerHTML = minutesArr[i];
//     }
//     for (let i = 0; i < timerSecondsItems.length; i++) {
//       timerSecondsItems[i].innerHTML = secondsArr[i];
//     }
//     // for (let i = 0; i < timerHoursItems.length; i++) {
//     //   timerHoursItems[i].innerHTML = hoursArr[i];
//     // }
//   }
//   let timer = document.querySelector('.timer');

//   // let timerHours = timer.querySelector('[data-timer-hours]');
//   let timerMinuts = timer.querySelector('[data-timer-minuts]');
//   let timerSeconds = timer.querySelector('[data-timer-seconds]');
//   let timerMilSec = timer.querySelector('[data-timer-milsec]');

//   // let timerHoursItems = timerHours.querySelectorAll('.timer__item-num');
//   let timerMinutesItems = timerMinuts.querySelectorAll('.timer__item-num');
//   let timerSecondsItems = timerSeconds.querySelectorAll('.timer__item-num');
//   let timerMilSecItems = timerMilSec.querySelectorAll('.timer__item-num');

//   // вызываем функцию countdownTimer
//   countdownTimer();
//   // вызываем функцию countdownTimer каждую секунду
//   let timerId = setInterval(countdownTimer, 85);
// }
// isTimer();

//acardion

function handlAcardion() {
  const items = document.querySelectorAll('.moduls__item');

  items.forEach((item) => {
    const header = item.querySelector('.moduls__item-header');
    header.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

handlAcardion();

//slider

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 50,
  autoHeight: true,

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: -20,
    },

    850: {
      slidesPerView: 'auto',
      spaceBetween: -50,
    },

    1500: {
      slidesPerView: 'auto',
      spaceBetween: 50,
    },

    1921: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
  },

  navigation: {
    nextEl: '.slider .slider-arrow-r',
    prevEl: '.slider .slider-arrow-l',
  },
});

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 50,
      behavior: 'smooth',
    });
  });
}

//modal

function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}

isModal();
isModalClose();
