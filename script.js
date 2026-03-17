document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.links a');

  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add('animate-in');
    }, 100 * index);
  });
});
