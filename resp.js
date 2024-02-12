burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar-list')
navList = document.querySelector('.nav-list')


burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})