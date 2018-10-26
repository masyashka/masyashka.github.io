var slideIndex_1 = 1;
var slideIndex_2 = 2;
animation();
showSlides(slideIndex_1, slideIndex_2);

function plusSlides(n) {
	animation();
	showSlides(slideIndex_1 += n, slideIndex_2 += n);
}

function showSlides(n1, n2) {
	var i;
	var slides = document.getElementsByClassName('carousel-element');

	if (n1 < 1) {
		slideIndex_1 = 1;
		slideIndex_2 = 2;
	}

	if (n1 === 4) {
		slideIndex_1 = 3;
		slideIndex_2 = 4;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex_1 - 1].style.display = "block";
	slides[slideIndex_2 - 1].style.display = "block";
}

function animation() {
	var slider = document.getElementById("c-s");

	slider.className += " anim";
	setTimeout(func_anim, 1500);
}

function func_anim() {
	var slider = document.getElementById("c-s");

	slider.className = "carousel-slides";
}