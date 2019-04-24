import coinToss from './coin-toss.js';
const submitButton = document.getElementById('submit');
const donkeySide = document.getElementById('donkey');
const messageValue = document.getElementById('message');
const headsGuess = document.getElementById('heads');

submitButton.addEventListener('click', () => {
    const randomNum = Math.random();
    const flip = coinToss(randomNum);
    const image = 'assets/' + flip + '.jpg';
    donkeySide.src = image;

    let userGuess = '';

    if(headsGuess.checked) {
        userGuess = 'heads';
    }
    else { 
        userGuess = 'tails';
    }

    if(flip === userGuess) {
        messageValue.textContent = 'You Won!'; 
    }
    else {
        messageValue.textContent = 'You Lose!';
    }
   
});

