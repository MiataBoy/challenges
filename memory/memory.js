// Array of image URLs
const images = [
    'images/ConcernedMiat.jpg',
    'images/cyberyata.jpg',
    'images/GotPhonesOnYourGames.jpg',
    'images/HELLO.jpg',
    'images/HelpimAnimated.png',
    'images/Imconcerned.jpg',
    'images/Monsteryata.jpg',
    'images/Orangutan.jpg',
    'images/RedMiat.jpg',
    'images/Yellata.jpg',
    'images/ConcernedMiat.jpg',
    'images/cyberyata.jpg',
    'images/GotPhonesOnYourGames.jpg',
    'images/HELLO.jpg',
    'images/HelpimAnimated.png',
    'images/Imconcerned.jpg',
    'images/Monsteryata.jpg',
    'images/Orangutan.jpg',
    'images/RedMiat.jpg',
    'images/Yellata.jpg'
];

// Shuffle the images
shuffleArray(images);
attempts = 0;

// Create image elements and assign click event listeners
const imageContainer = document.getElementById('images');
images.forEach((image, index) => {
    const imgWrapper = document.createElement('div');
    imgWrapper.style.width = "200px !important";
    imgWrapper.style.display = "inline-block";
    imgWrapper.classList.add('image-wrapper');

    const img = document.createElement('img');
    img.src = 'images/background.png';
    img.height = 200;
    img.width = 200;
    img.classList.add('card');

    img.addEventListener('click', () => {
        handleImageClick(img, index);
    });

    imgWrapper.appendChild(img);
    imageContainer.appendChild(imgWrapper);
});

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function handleImageClick(card, index) {
    if (card.classList.contains('match') || lockBoard) {
        return;
    }

    flipCard(card, index);

    if (firstCard === null) {
        firstCard = { card, index };
    } else {
        secondCard = { card, index };

        checkForMatch();
    }
}

function flipCard(card, index) {
    console.log('In flipcard function')
    if (card.classList.contains("card")) {
        card.classList.remove('card');
        card.src = images[index];
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
        card.src = 'images/background.png';
        card.classList.add('card');
    }
}

function checkForMatch() {
    attempts++;
    console.log(attempts)
    if (images[firstCard.index] === images[secondCard.index]) {
        disableCards();
        const matchedCards = document.querySelectorAll('.match');
        if (matchedCards.length === images.length) {
            setTimeout(() => {
                alert(`Congratulations! You won the game!\n${attempts} attempts.`);
            }, 500);
        }
    } else {
        lockBoard = true;
        setTimeout(() => {
            flipCard(firstCard.card, firstCard.index);
            console.log('shouldve flipped card 1')
            flipCard(secondCard.card, secondCard.index);
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        }, 1000);
    }
}

function disableCards() {
    firstCard.card.classList.add('match');
    secondCard.card.classList.add('match');
    firstCard = null;
    secondCard = null;
    lockBoard = false;}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}