const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkMode.matches) {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-bs-theme', 'light');
}
