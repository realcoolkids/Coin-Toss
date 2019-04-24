import coinToss from './coin-toss.js';
const submitButton = document.getElementById('submit');
const donkeySide = document.getElementById('donkey');
const messageValue = document.getElementById('message');
const headsGuess = document.getElementById('heads');
const winsCount = document.getElementById('wins');
const lossesCount = document.getElementById('losses');
const betInput = document.getElementById('bet-amount');
const moneyValue = document.getElementById('money');

// defining scoring variables
let wins = 0;
let losses = 0;
let money = 1000;

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

    const betValue = parseInt(betInput.value, 10);

    if(flip === userGuess) {
        messageValue.textContent = 'You Won!';
        wins++;
        winsCount.textContent = 'Wins: ' + wins; 
        messageValue.classList.remove('loss');
        messageValue.classList.add('win');

        money += betValue;
    }
    else {
        messageValue.textContent = 'You Lose!';
        losses++;
        lossesCount.textContent = 'Losses: ' + losses; 
        messageValue.classList.remove('win');
        messageValue.classList.add('loss');

        money -= betValue;
    }
   
    moneyValue.textContent = 'Money: $' + money;

});

