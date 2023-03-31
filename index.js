const headerContainer = document.querySelector('header');
const hamburguerMenu = document.querySelector('.hamburguer-menu');
const menuLinks = document.querySelectorAll('.menu-container li a[href^="#"]');
const menuContainer = document.querySelector('.menu-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > headerContainer.offsetHeight) {
      headerContainer.classList.add('active');
  } else {
      headerContainer.classList.remove('active');
  }
});

hamburguerMenu.addEventListener('click', () => {
  hamburguerMenu.classList.toggle('active');
  menuContainer.classList.toggle('active');
});

menuLinks.forEach(links => {
  links.addEventListener('click', () => {
    hamburguerMenu.classList.remove('active');
    menuContainer.classList.remove('active');
  });
});
