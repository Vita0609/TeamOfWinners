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
    const color = getComputedStyle(btn).backgroundColor;

    document.body.style.setProperty('--accent', color);
  }
}
