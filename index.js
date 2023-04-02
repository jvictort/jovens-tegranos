const hamburguerMenu = document.querySelector('.hamburguer-menu');
const menuLinks = document.querySelectorAll('.menu-container li a[href^="#"]');
const menuContainer = document.querySelector('.menu-container');

const linkDropdown = document.querySelectorAll('.list-dropdown');

linkDropdown.forEach(link => {
  link.addEventListener('mouseover', event => {
    const formField = document.querySelectorAll('.form-fields');

    formField.forEach(field => {
      field.style.position = 'static';
    });
  });

  link.addEventListener('mouseout', event => {
    const formField = document.querySelectorAll('.form-fields');

    formField.forEach(field => {
      field.style.position = 'relative';
      });
    });
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
