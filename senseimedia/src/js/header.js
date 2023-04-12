let headerMenu = document.querySelector('.header__menu');
let headerNav = document.querySelector('.header__nav');

// console.log(headerNav);
// console.log(headerMenu);

headerMenu.addEventListener('click', function(){
	headerMenu.classList.toggle('active'),
	headerNav.classList.toggle('active')
});
