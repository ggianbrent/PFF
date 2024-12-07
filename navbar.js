const profileIcon = document.getElementById('menu');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeMenu = document.getElementById('close-menu');

profileIcon.addEventListener('click', () => {
  fullscreenMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  fullscreenMenu.classList.add('hidden');
});

fullscreenMenu.addEventListener('click', (event) => {
  if (event.target === fullscreenMenu) {
    fullscreenMenu.classList.add('hidden');
  }
});