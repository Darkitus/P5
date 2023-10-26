const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const bannerDots = document.querySelector(".dots")
const bannerImg = document.querySelector(".banner-img")
const bannerParagraph = document.querySelector("#banner p")
let i = 0

// Event Listener

arrowLeft.addEventListener("click", () => {
	i--
	if (i === -1) {
	  i = slides.length
	}
	bannerImg.src = slides[i].image
	bannerParagraph.innerHTML = slides[i].tagLine
});

arrowRight.addEventListener("click", () => {
	i++
	if (i === slides.length) {
	  i = 0
	}
	bannerImg.src = slides[i].image;
	bannerParagraph.innerHTML = slides[i].tagLine
});



// Création des bullets points
for (let x = 0; x < slides.length; x++) {
	const dot = document.createElement("span")
	dot.classList.add("dot")
	bannerDots.appendChild(dot)
}








// Non Fonctionnel

// let arrow = document.querySelectorAll(".arrow")

// arrow.addEventListener("click", () => {
// 	console.log("Left click")
// })

// arrow.addEventListener("contextmenu", () => {
// 	console.log("Right click")
// })



// Fonctionnel

// let left_LeftClick = document.querySelector(".arrow_left")
// left_LeftClick.addEventListener("click", () => {
// 	console.log("Left click")
// })

// let left_RightClick = document.querySelector(".arrow_left")
// left_RightClick.addEventListener("contextmenu", () => {
// 	console.log("Right click")
// })

// let right_LeftClick = document.querySelector(".arrow_right")
// right_LeftClick.addEventListener("click", () => {
// 	console.log("Left click")
// })

// let right_RightClick = document.querySelector(".arrow_right")
// right_RightClick.addEventListener("contextmenu", () => {
// 	console.log("Right click")
// })


// Fonctionnel

// let left_LeftClick = document.querySelector(".arrow_left").addEventListener("click", () => {
// 	console.log("Left click")
// })

// let left_RightClick = document.querySelector(".arrow_left").addEventListener("contextmenu", () => {
// 	console.log("Right click")
// })

// let right_LeftClick = document.querySelector(".arrow_right").addEventListener("click", () => {
// 	console.log("Left click")
// })

// let right_RightClick = document.querySelector(".arrow_right").addEventListener("contextmenu", () => {
// 	console.log("Right click")
// })