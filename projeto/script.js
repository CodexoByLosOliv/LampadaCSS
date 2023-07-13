const bulb = document.querySelector('.bulb');
const text = document.querySelector('.light .text');

bulb.addEventListener('mouseover', () => {
  text.classList.add('show');
});

bulb.addEventListener('mouseout', () => {
  text.classList.remove('show');
});
