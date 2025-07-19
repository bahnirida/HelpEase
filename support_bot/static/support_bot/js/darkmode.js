const darkModeToggle = document.getElementById('darkModeToggle');

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️'; // icône soleil
  localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  darkModeToggle.textContent = '🌙'; // icône lune
  localStorage.setItem('darkMode', 'disabled');
}

// Charger la préférence au chargement
if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Écouter le clic sur le bouton toggle
darkModeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

