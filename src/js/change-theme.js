const overlay = document.querySelector('.overlay');
const changeThemeBtn = document.querySelector('.change-theme');

changeThemeBtn.addEventListener('click', toggleThemeSelector);

overlay.addEventListener('click', handleOverlay);

function toggleThemeSelector() {
  overlay.classList.toggle('open');
}

function handleOverlay(e) {
  if (e.target === overlay) return toggleThemeSelector();

  if (e.target.localName === 'button') {
    const btn = e.target;
    const color = btn.dataset.color;

    document.body.style.setProperty('--accent', color);

    config.lineColor = config.dotColor = color;
    // stopAnimation();
    // removeDots();
    // generateDots();
  }
}
