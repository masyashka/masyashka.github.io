var currentIndex = 2;
showComments(currentIndex);

function currentSlide(n) {
	showComments(currentIndex = n);
}

function showComments(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");

	for( i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for ( i = 0; i < dots.length; i++) {
		dots[i].className = "dot";
	}

	slides[currentIndex - 1].style.display = "block";
	dots[currentIndex - 1].className += " active";
}