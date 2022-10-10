const mainContainer =
  document.querySelector(
    '.rating-states'
  );
const thanksContainer =
  document.querySelector(
    '.thank-you-state'
  );
const submitButton =
  document.querySelector('.submit');
const rating =
  document.getElementById('rating');
const rates =
  document.querySelectorAll('.btn');

submitButton.addEventListener(
  'click',
  () => {
    thanksContainer.classList.remove(
      'hidden'
    );
    mainContainer.style.display =
      'none';
  }
);
rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;
  });
});
