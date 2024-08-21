const scrollBtn = document.querySelector('.back-to-top');

window.onscroll = toggleScrollBtn;
scrollBtn.onclick = scrollUp;

toggleScrollBtn();

function scrollUp() {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleScrollBtn() {
  scrollBtn.hidden = document.documentElement.scrollTop < 400;
}
