let cards;
let cardsdoubled;
let board;
let resetButton;
let counter = 0;
let target1;
let target2;
let deletethis;
let jenomDvakratProsim;
let modal;
let checker;

let init = function () { // init

    cards = ['😂', '🥰', '🤔', '🙂', '😍', '😎', '🤩', '😃']; // emojis
    cardsdoubled = cards.concat(cards); // doubles the cards
    console.log(`Cards Doubled: ${cardsdoubled}`);
    board = document.getElementById('board');
    resetButton = document.getElementById('theOneWhoResets');
    modal = document.getElementById('winscreenModal');
    checker = cards.length;
    shuffleFunc();
    htmlAdd();

    resetButton.addEventListener('click', restart);
}

let shuffleFunc = function () { // Shuffles the cards, duh
    for (let i = 0; i < cardsdoubled.length; i++) {
        let shuffle = Math.floor(Math.random() * i);
        let j = cardsdoubled[i];
        cardsdoubled[i] = cardsdoubled[shuffle];
        cardsdoubled[shuffle] = j;
    }
    console.log(`Cards Shuffled: ${cardsdoubled}`);
}

let htmlAdd = function () { // Adds the funny XD emojis/cards
    for (let i = 0; i < cardsdoubled.length; i++) {
        let div = document.createElement('div');
        div.innerText = cardsdoubled[i].substring(0, 2);
        div.id = `id${i + 1}`;
        div.className = 'piece_unflipped';
        div.addEventListener('click', cardTurn); // The clicking

        board.appendChild(div);
    }
}

let cardTurn = function (e) { // turns the funny xd emojis/cards
    if (jenomDvakratProsim === true) return;
    let target = e.target;

    if (target.className === ('piece_solved')) return;

    if (counter < 1) {
        jenomDvakratProsim = true;
        target.className = 'piece_flipped';
        target1 = target;
        counter++;
        jenomDvakratProsim = false;
    } else {
        jenomDvakratProsim = true;
        target.className = 'piece_flipped';
        target2 = target;
        counter--;
        jenomDvakratProsim = false;
    }

    if (counter < 1 && target1.id === target2.id) {
        jenomDvakratProsim = true;
        target1.className = 'piece_unflipped'
        target1 = '';
        target2 = '';
        counter = 0;
        jenomDvakratProsim = false;
        return;
    }

    if (counter < 1) {
        if (target1.innerText === (target2.innerText)) {
            jenomDvakratProsim = true;
            target1.className = 'piece_solved';
            target2.className = 'piece_solved';
            jenomDvakratProsim = false;
            checker--;
            console.log(`Turns left to win: ${checker}`);
        } else {
            jenomDvakratProsim = true;
            setTimeout(function () {
                target1.className = 'piece_unflipped';
                target2.className = 'piece_unflipped';

                target1 = '';
                target2 = '';
                counter = 0;
                jenomDvakratProsim = false;
            }, 2000)
        }
    }


    // Debug corner

    console.log('Card Turn');

    if (counter > 0) {
        console.log(`TARGET 1 = ${target1.innerText}`);
    } else {
        console.log(`TARGET 2 = ${target2.innerText}`);
    }

    if (counter < 1) {
        if (target1.innerText === (target2.innerText)) {
            console.log(`${target1.innerText} === ${target2.innerText}`);
        } else {
            console.log(`${target1.innerText} =/= ${target2.innerText}`);
        }
    }

    // Win checker (EPIC WIN!!!)

    if (checker < 1) {
        epicWin();
    }
}

let restart = function () {
    for (let i = 0; i < cardsdoubled.length; i++) {
        deletethis = document.getElementById(`id${i + 1}`);
        deletethis.remove();
    }
    target1 = '';
    target2 = '';
    counter = 0;
    jenomDvakratProsim = false;
    isEpicWin = false;
    init();
}

let epicWin = function () {
    modal.style.display = 'block';
}

window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

window.onload = init;