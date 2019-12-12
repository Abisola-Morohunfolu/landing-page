// if (window.scrollY != 0) {
//     window.addEventListener('scroll', () => {
//         document.querySelector('.navigation__box').style.backgroundColor = 'white';
//     })
// } else {
//     window.addEventListener('scroll', () => {
//         document.querySelector('.navigation__box').style.backgroundColor = 'transparent';
//     })
// }

function scrollAppear() {
	const aboutText = document.querySelector('.about__text');
	const aboutTextPosition = aboutText.getBoundingClientRect().top;
	const iconBox = document.querySelector('.icon__box-container');
	const iconBoxPosition = iconBox.getBoundingClientRect().top;
	const pricingContainer = document.querySelector('.pricing__container');
	const pricingContainerPosition = pricingContainer.getBoundingClientRect().top;
	const screenHeight = window.innerHeight / 1.2;

	if (aboutTextPosition < screenHeight && aboutTextPosition > -1) {
		aboutText.classList.add('about__text-appear');
	} else if (aboutTextPosition <= -1) {
		aboutText.classList.remove('about__text-appear');
	} else {
		aboutText.classList.remove('about__text-appear');
	}

	if (iconBoxPosition < screenHeight && iconBoxPosition > -1) {
		iconBox.classList.add('icon__box-container-appear');
	} else if (iconBoxPosition <= -1) {
		iconBox.classList.remove('icon__box-container-appear');
	} else {
		iconBox.classList.remove('icon__box-container-appear');
	}

	if (pricingContainerPosition < screenHeight && pricingContainerPosition > -300) {
		pricingContainer.classList.add('pricing__container-appear');
	} else if (pricingContainerPosition >= -300 && pricingContainerPosition <= -800) {
		pricingContainer.classList.remove('pricing__container-appear');
	} else if (pricingContainerPosition > screenHeight) {
		pricingContainer.classList.remove('pricing__container-appear');
	}
}

//window.addEventListener('scroll', scrollAppear);
