document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.links a');
  
  links.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(10px)';
    link.style.transition = 'all 0.5s ease-out forwards';
    
    setTimeout(() => {
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    }, 150 * index);
  });
});