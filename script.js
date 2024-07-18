'use strict';

// Sellecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');



const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRole = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// console.log(btnRole);
// Setting initial values to 0
score0El.textContent = 0;
score1El.textContent = 0;

// Setting Dice to hidden
diceEl.classList.add('hidden');


const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

btnRole.addEventListener('click', (e) => {
    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6 + 1);

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // Check for rolled one

    if (dice !== 1) {
        // Add dice eto current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore; // CHANGE LATER
    } else {
        // Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

        player0El.classList.toggle('player--active');
        console.log(player0El);
        player1El.classList.toggle('player--active');
    }
});

btnHold.addEventListener('click', (e) => {
    scores[activePlayer] += currentScore;

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    console.log(player0El);
    player1El.classList.toggle('player--active');

    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
});

btnNew.addEventListener('click', (e) => {

    scores[0] = 0;
    scores[1] = 0;

    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
})