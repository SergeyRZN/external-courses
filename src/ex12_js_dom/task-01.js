const slides = document.getElementsByClassName("item");
const arrayImage = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
const elementAdd = function (array) {
	array.forEach(function(img) {
		let elementsDivGeneral= document.getElementById('slider');
		let elementDiv = document.createElement('div');
		let elementImg = document.createElement('img');
		elementDiv.setAttribute('class', 'item');
		elementImg.setAttribute('src', img);
		elementDiv.append(elementImg);
		elementsDivGeneral.append(elementDiv);	
	});
};
let slideIndex = 1;

elementAdd(arrayImage)

showSlides(slideIndex);
 
function nextSlide() {
    showSlides(slideIndex += 1);
};

function backSlide() {
    showSlides(slideIndex -= 1);  
};
 
function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};