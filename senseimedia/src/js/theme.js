let date = new Date();
let hour = date.getHours();
let headerBtn = document.querySelector('.header__btn');
let serviceBtn = document.querySelectorAll('.service__btn');
let textColor = document.querySelectorAll('.info__block-title');
let checkIcon = document.querySelectorAll('.service__icon');
let servicePrice = document.querySelectorAll('.service__price-cost');
let servicePriceLine = document.querySelectorAll('.service__price-line');
let formBtn = document.querySelector('.form__btn');
let footerBtn = document.querySelector('.footer__button');



if(hour <= 9) {
	headerBtn.classList.add('violet');
	for(let i = 0; i < serviceBtn.length; i++) {
		serviceBtn[i].classList.add('violet')
	}
	for(let i = 0; i < textColor.length; i++){
		textColor[i].classList.add('text-violet')
	}
	for(let i = 0; i < checkIcon.length; i++){
		checkIcon[i].classList.add('text-violet')
	}
	for(let i = 0; i < servicePrice.length; i++) {
		servicePrice[i].classList.add('text-violet')
	}
	for(let i = 0; i < servicePriceLine.length; i++) {
		servicePriceLine[i].style.background = 'linear-gradient(115.11deg, #9021AC 16.38%, #C8459F 84.56%)'
	}
	formBtn.classList.add('violet')
	footerBtn.classList.add('violet')
}
else if(hour <= 18){
	headerBtn.classList.add('orange');
	for(let i = 0; i < serviceBtn.length; i++) {
		serviceBtn[i].classList.add('orange')
	}
	for(let i = 0; i < textColor.length; i++){
		textColor[i].classList.add('text-orange')
	}
	for(let i = 0; i < checkIcon.length; i++){
		checkIcon[i].classList.add('text-orange')
	}
	for(let i = 0; i < servicePrice.length; i++) {
		servicePrice[i].classList.add('text-orange')
	}
	for(let i = 0; i < servicePriceLine.length; i++) {
		servicePriceLine[i].style.background = 'linear-gradient(115.11deg, #FFBC2A 16.38%, #FF4F39 95.45%)'
	}
	formBtn.classList.add('orange')
	footerBtn.classList.add('orange')
}

console.log(hour);