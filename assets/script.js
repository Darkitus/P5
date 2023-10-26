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

let left_LeftClick = document.querySelector(".arrow_left").addEventListener("click", () => {
	console.log("Left click")
})

let left_RightClick = document.querySelector(".arrow_left").addEventListener("contextmenu", () => {
	console.log("Right click")
})

let right_LeftClick = document.querySelector(".arrow_right").addEventListener("click", () => {
	console.log("Left click")
})

let right_RightClick = document.querySelector(".arrow_right").addEventListener("contextmenu", () => {
	console.log("Right click")
})