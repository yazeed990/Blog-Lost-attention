'use strict';

const btnOpen = document.querySelectorAll('.show-modal');
const modal = document.querySelectorAll('.modal');
const btnClose = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', function () {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  btnClose[i].addEventListener('click', function () {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });

  modal[i].addEventListener('click', function () {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    modal.forEach(modals => modals.classList.add('hidden'));
    overlay.classList.add('hidden');
  }
});
