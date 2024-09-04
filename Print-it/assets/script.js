// Les données des diapositives
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlideIndex = 0; // Initialisation de l'index de la diapositive actuelle

// Sélectionner les éléments du DOM
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('.banner-text');
const dotsContainer = document.querySelector('.dots');

// Fonction pour mettre à jour l'image et le texte
function updateSlide() {
    const slide = slides[currentSlideIndex];
    bannerImage.src = `./assets/images/slideshow/${slide.image}`;
    bannerText.innerHTML = slide.tagLine;
}

// Fonction pour mettre à jour les bullet points
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentSlideIndex);
    });
}

// Fonction pour gérer le clic sur la flèche gauche
function handleLeftArrowClick() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Boucle en arrière
    updateSlide();
    updateDots();
	playClickSound();
    console.log('Flèche gauche cliquée');
}

// Fonction pour gérer le clic sur la flèche droite
function handleRightArrowClick() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Boucle en avant
    updateSlide();
    updateDots();
	playClickSound();
    console.log('Flèche droite cliquée');
}

// Ajouter les event listeners pour les flèches
leftArrow.addEventListener('click', handleLeftArrowClick);
rightArrow.addEventListener('click', handleRightArrowClick);

// Créer les bullet points
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected'); // Le premier point est sélectionné par défaut
    }
    dotsContainer.appendChild(dot);
});

// Initialiser avec la première diapositive
updateSlide();
updateDots();

const clickSound = document.getElementById('click-sound');

function playClickSound() {
    clickSound.play();
}

// Appeler playClickSound dans les gestionnaires d'événements des flèches
function handleLeftArrowClick() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Boucle en arrière
    updateSlide();
    updateDots();
    playClickSound();
    console.log('Flèche gauche cliquée');
}

function handleRightArrowClick() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Boucle en avant
    updateSlide();
    updateDots();
    playClickSound();
    console.log('Flèche droite cliquée');
}