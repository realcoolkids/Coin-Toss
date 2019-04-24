import coinToss from './coin-toss.js';
const submitButton = document.getElementById('submit');
const donkeySide = document.getElementById('donkey');
const messageValue = document.getElementById('message');
const headsGuess = document.getElementById('heads');
const winsCount = document.getElementById('wins');
const lossesCount = document.getElementById('losses');

// defining scoring variables
let wins = 0;
let losses = 0;

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
        wins++;
        winsCount.textContent = 'Wins: ' + wins; 
    }
    else {
        messageValue.textContent = 'You Lose!';
        losses++;
        lossesCount.textContent = 'Losses: ' + losses; 
    }
   
});

