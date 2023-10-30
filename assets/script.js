const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerDots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerParagraph = document.querySelector("#banner p");

const renderSlide = (index, slides) => {
  bannerImg.src = slides[index].image;
  bannerParagraph.innerHTML = slides[index].tagLine;
};

// Event Listener
let slideIndex = 0;
arrowLeft.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex === -1) {
    slideIndex = slides.length - 1;
  }
  renderSlide(slideIndex, slides);
  movingDot(slideIndex);
});

arrowRight.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex === slides.length) {
    slideIndex = 0;
  }
  renderSlide(slideIndex, slides);
  movingDot(slideIndex);
});

// Création des bullets points
slides.forEach(() => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  bannerDots.appendChild(dot);
});

// Selection de tout les .dot et ajout de la class .dot_selected au premier bullet point
const addDot = document.querySelectorAll(".dot");
addDot[0].classList.add("dot_selected");

// Mise à jour des bullets points
function movingDot(position) {
  addDot.forEach((dot, slideIndex) => {
    if (slideIndex === position) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
