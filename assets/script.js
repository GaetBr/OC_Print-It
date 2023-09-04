const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// FLECHES SLIDER

// Déclartion de la variable pour suivre l'index de l'image actuelle
let currentIndex = 0;

// Obtention de la référence à l'image du carrousel
const carouselImage = document.querySelector(".banner-img");

// Obtention de la référence aux flèches du carrousel
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

// Fonction pour changer l'image en fonction de l'index
function changeImage(index) {
    carouselImage.src = `./assets/images/slideshow/${slides[index].image}`;
    document.querySelector("#banner p").innerHTML = slides[index].tagLine;
}

// Ajout d'un event listener pour le clic sur la flèche gauche
leftArrow.addEventListener("click", function () {
	console.log("Clic sur la flèche gauche");
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    changeImage(currentIndex);
	updateBulletPoints(currentIndex); // Mettre à jour les bullet points
});

// Ajout d'un event listener pour le clic sur la flèche droite
rightArrow.addEventListener("click", function () {
	console.log("Clic sur la flèche droite");
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    changeImage(currentIndex);
	updateBulletPoints(currentIndex); // Mettre à jour les bullet points
});

// Initialisation de l'image avec la première diapositive
changeImage(currentIndex);