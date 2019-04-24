import coinToss from './coin-toss.js';
const submitButton = document.getElementById('submit');
const donkeySide = document.getElementById('donkey');

submitButton.addEventListener('click', () => {
    const randomNum = Math.random();
    const flip = coinToss(randomNum);
    const image = 'assets/' + flip + '.jpg';
    donkeySide.src = image;

    console.log(donkeySide.src);
});