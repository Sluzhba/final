const hamburgerIcon = document.querySelector('.burger__icon');

const menuItems = document.querySelector('.burger__list');

hamburgerIcon.addEventListener('click', function() {

    menuItems.classList.toggle('show');

});