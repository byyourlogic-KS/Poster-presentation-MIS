document.querySelectorAll('.menu nav a').forEach(link => {
  link.addEventListener('click', () => { document.querySelector('.menu').open = false; });
});
